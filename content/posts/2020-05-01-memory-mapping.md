---
title: "Hot Reloadable structs: Memory Mapping"
author: "Remco (Wodann) - Mun Core Team"
excerpt: "The Mun v0.2 release is on the horizon, so we wanted to take this opportunity to delve a little deeper into this release's big newcomer: hot reloadable structs. Being able to effortlessly hot reload data was what we originally set out to do when designing Mun, so we are excited to share how we brought this feat about."
---

The Mun v0.2 release is on the horizon, so we wanted to take this opportunity to delve a little
deeper into this release's big newcomer: **hot reloadable structs**. Being able to effortlessly hot
reload data was what we originally set out to do when designing Mun, so we are excited to share how
we brought this feat about.

At its core Mun leverages function and type information - known as *symbols* - that are generated
by the Mun Compiler. When changes to a source file cause a recompilation, the runtime detects this
and attempts to *hot reload*; swapping out old functions and types with their new counterparts,
without stopping the host application. Whereas hot reloading of functions can be easily done in
most languages (e.g. by swapping shared libraries with a fixed API), hot reloading data is more
complicated because it requires information about the data layout.

```mun
struct OldLayout {
    foo: f32,
    bar: i16,
}

struct NewLayout {
    foo: f64,
    bar: i16
}
```

Given the old and new layout of a struct, we can *memory map* field values from an old struct
instance to a new instance's memory locations. Thanks to Mun's symbols we can now deduce this
mapping - albeit nontrivial. The remainder of this blog will explain the algorithm we've developed
to create a "correct" memory mapping from an old list of types to a new list.

#### Myers Diff

Another way of thinking about the problem is: given a starting state *S* and goal state *G*, we can
make a sequence [*c<sub>1</sub>*, *c<sub>2</sub>*, .. *c<sub>n</sub>*] of changes to S - in any
order - such that we arrive in G. In an ideal world we'd know all of the changes *c<sub>i<sub>*;
instead we only know *S* and *G*. Thus, we need to deduce the "correct" set of changes ourselves.

> Note: It might be possible to obtain all changes *c<sub>i<sub>* by means of an IDE integration
> that converts all key strokes into a change set, but as we cannot assume that everyone will use
> our integration - nor that it is perfect - we need a good algorithm for the simplest use case.

Analogous to our problem is `git diff`, which determines the set of changes between two lists of
files. By default, git uses Myers diff algorithm to calculate the set of insertions and deletions
to go from a start state *S* to a goal state *G*. For a thorough explanation of the Myers diff algorithm, I recommend [this blog](https://blog.robertelder.org/diff-algorithm).

```rust
enum Diff {
    Insert,
    Delete,
}
```

Myers diff algorithm serves as a good starting point to determine what is different, but we need to
refine its result to figure out **how** two structs might differ. 

#### Refined Diff

At this point, it's good to ask ourselves what possible differences could occur between two lists
of structs. Given an old list of struct types,

```mun
struct LayoutA {
    a: f32,
    b: i16,
    c: u8,
    d: bool,
}

struct LayoutB {
    e: u128,
    f: i64,
}

struct LayoutC {
    g: bool,
}
```

and a new list,

```mun
struct LayoutBB { // Rename struct + Move struct
    e: u128,
    f: i64,
}

struct LayoutA { // Move struct
    c: u8,    // Move field
    a: f64,   // Convert field type + move field
    bb: i16,  // Rename field + move field
//  d: bool,  // Delete field
    e: i16,   // Insert field
}

//struct LayoutC { // Delete struct
//    g: bool,
//}

struct LayoutD { // Insert struct
    z: i64,
}
```

you'll notice two types of annotated differences: changes related to structs or to struct fields.
The observant reader might already have recognised that in some cases, there are multiple possible
annotations. E.g. the change to `LayoutA::bb` could also be classified as a newly inserted field,
causing the old `LayoutA::b` field to be deleted. Both would be valid conclusions, but
when designing our algorithm we decided to prefer any choice that would allow for data retention.
We'd rather have a user do extra steps to add a new (reset) field, than have them easily lose data
that they actually wanted to retain. There is no recovery from the latter, after all.

So, how do we come up with the "correct" mapping? By adding some assumptions and restrictions, we
are able to avoid most (if not all) ambiguous cases. The assumptions we've made are:

* **If an old struct type and a new struct type have the same name, they must be the same type. In
  this case, we accept any and all changes to the struct and its fields.**  
  `LayoutA` is an example of this; the struct name remained the same but it was *moved* down by one
  position and all of its field were *edited*.
* **If an old struct type and a new struct type have different names but their fields are all the
  same, then the struct must have been *renamed* and can optionally be *moved*.**  
  `LayoutB` is an example of this; the struct was *renamed* to `LayoutBB` and it was *moved* up by
  one position, but all of its fields remained the same.
* **If an old field and new field have the same name and type, they must have remained unchanged. In
  this case, the field can be *moved*.**  
  `LayoutA::c` is an example of this; the field name and type remained the same but it was *moved*
  up two positions.
* **If an old field and new field have the same name, they must be the same field. In this case, we
  accept a *type conversion* and the field can potentially be *moved*.**  
  `LayoutA::a` is an example of this; the field name remained the same but it was *moved* down by
  one position and underwent a *type conversion*.
* **If an old field and new field have different names but the same type, the field *could* have
  been renamed. As there can be multiple candidates with the same type, we accept the *renamed* and
  potentially *moved* field that is closest to the original index of the old field.**  
  `LayoutA::b` is an example of this; the field was *renamed* to `bb` and it was *moved* down by one
  position. Another candidate would have been the newly inserted field `e` which also has the same
  type `i16`, but would have been moved 2 positions - making `bb` the closest candidate.

Some restrictions can be derived from these rules:

* **A struct cannot simultaneously be renamed and its fields edited.** This is intended to prevent
  cases such as `LayoutC` from being *renamed* to `LayoutD` and their fields being *edited*
  accordingly.
* **A struct field cannot simultaneously be renamed and its type changed.** This is intended to
  prevent cases such as `LayoutA::d` from being *renamed* and undergoing a *type conversion* to
  `LayoutA::e`.

In both of the above cases, the difference will be recognised as two separate changes: an insertion
and a deletion of the struct/field.

Based on the above assumptions, we can make two enums to classify changes. For memory mapping,
renaming of a struct won't affect the memory's layout, so we don't have a separate variant for that
case.

```rust
enum StructDiff {
    Insert,
    Edit { diff: Vec<FieldDiff> },
    Move,
    Delete,
}

enum FieldDiff {
    Insert,
    Edit { kind: FieldEditKind },         // in-place edit
    Move { edit: Option<FieldEditKind> }, // move & optional edit
    Delete,
}

enum FieldEditKind {
    ConvertType,
    Rename,
}
```

With this knowledge we can create a `refine(insertion: Diff, deletion: Diff) -> Option<StructDiff>`
function that tries to map pairs of Myers diff insertions and deletions to a `StructDiff::Edit` or
`StructDiff:Move`. If a `Diff` cannot be refined, it is respectively labelled as
`StructDiff:Insert` or `StructDiff::Delete`. The pseudocode of our hot reloading algorithm would
look something like this:

```rust
fn hotreload(old_lib, new_lib) {
    let diff = myers::diff(old_lib.struct_types(), new_lib.struct_types());
    let refined_diff = {
      let (insertions, deletions) = diff.split();
      for insertion in insertions {
          for deletion in deletions {
              // try to find an optimal pair using `refine`
          }
      }
      // add unused insertions & deletions
      result
    };
    map_memory(old_lib.struct_instances, refined_diff);
}
```

To find *an optimal pair* we first calculate the number of changes necessary to convert a deleted
struct's fields to an inserted struct's fields - for all possible pairs - using Myers diff
algorithm. Then we perform a greedy search for `(insertion, deletion)` pairs with the least number
of changes; until there are no viable candidates left. When a pair does not require any changes to
its fields, the struct was merely *moved*; otherwise it was *edited*.

For an *edited* struct we need to also determine **how** its fields differ from the old struct.
This is where our assumptions come into play:

```rust
fn field_diff(old_fields, new_fields) -> Vec<FieldDiff> {
    let diff = myers::diff(old_fields, new_fields);
    let (insertions, deletions) = diff.split();
    let (insertions, deletions) = {
        for insertion in insertions {
            for deletion in deletions {
                // find all fields with the same name and type;
                // i.e. `FieldDiff::Move { edit: None }`
            }
        }
        // Continue the search with all unused differences
        (unused_insertions, unused_deletions)
    };
    let (insertions, deletions) = {
        for insertion in insertions {
            for deletion in deletions {
                // find all fields with the same name
                // If moved, `FieldDiff::Move { edit: Some(FieldEditKind::ConvertType) }`
                // else, `FieldDiff::Edit { kind: FieldEditKind::ConvertType }`
            }
        }
        // Continue the search with all unused differences
        (unused_insertions, unused_deletions)
    };
    let (insertions, deletions) = {
        for insertion in insertions {
            for deletion in deletions {
                // find all fields with the same type
                // choose the pair with the shortest *move*
                // If moved, `FieldDiff::Move { edit: Some(FieldEditKind::Rename) }`
                // else, `FieldDiff::Edit { kind: FieldEditKind::Rename }`
            }
        }
        // Continue the search with all unused differences
        (unused_insertions, unused_deletions)
    };
    // add unused insertions & deletions
    result
}
```

Step 2 takes priority over step 3 because the uniqueness of field names in a struct allows us to
assume with reasonable certainty that the fields were intended to be mapped.

#### Memory Mapping

That wraps up the calculation of a refined diff between an old and new list of struct types. Using
the refined diff and Mun's symbols we can now trivially create a mapping that maps old to new memory
addresses for all fields, and apply this mapping to all heap-allocated struct instances.

Hopefully I was able to convey the algorithm clearly, but in case you have any questions feel free
to ask them on [Discord](https://discord.gg/SfvvcCU) or [Twitter](https://twitter.com/munlangorg).
You can also dive directly into the [Myers diff][src-myers-diff], [struct diff][src-struct-diff],
[field diff][src-field-diff], [diff to mapping conversion][src-conversion], or
[memory mapping][src-mapping] source code on our [Github](https://github.com/mun-lang/mun).

[src-myers-diff]: https://github.com/mun-lang/mun/blob/0df0317069e4bdff40005e14b975b300db5fbe50/crates/mun_memory/src/diff/myers.rs#L15
[src-struct-diff]: https://github.com/mun-lang/mun/blob/0df0317069e4bdff40005e14b975b300db5fbe50/crates/mun_memory/src/diff.rs#L167
[src-field-diff]: https://github.com/mun-lang/mun/blob/0df0317069e4bdff40005e14b975b300db5fbe50/crates/mun_memory/src/diff.rs#L291
[src-conversion]: https://github.com/mun-lang/mun/blob/0df0317069e4bdff40005e14b975b300db5fbe50/crates/mun_memory/src/mapping.rs#L41
[src-mapping]: https://github.com/mun-lang/mun/blob/0df0317069e4bdff40005e14b975b300db5fbe50/crates/mun_memory/src/gc/mark_sweep.rs#L205
