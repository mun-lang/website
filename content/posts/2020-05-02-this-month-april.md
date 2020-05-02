---
title: "This Month in Mun - April 2020"
author: "The Mun Team"
excerpt: "In our efforts to finalise Mun v0.2, we've made a big push for the finish line. Through
the combined efforts of the Mun Community and Core Team, we were able to release a record amount of
new features, bug fixes, and improvements; the most anticipated new kid on the block being struct hot reloading!"
---

In our efforts to finalise Mun v0.2, we've made a big push for the finish line. Through the
combined efforts of the Mun Community and Core Team, we were able to release a record amount of new
features, bug fixes, and improvements; the most anticipated new kid on the block being **struct hot reloading**!

#### Community

This month we had another exemplary case of community contribution. Someone ran into problems while
writing Mun code, logged corresponding [issues](https://github.com/mun-lang/mun/issues), and - with
our help - created several pull requests to resolve the issues themselves:

* **refactor: use '->' instead of ':' for fn return types** [[PR#123]](https://github.com/mun-lang/mun/pull/123)
  ```mun
    fn foo() -> i64 {
        0
    }
  ```

* **feat: add 128-bit integers (`i128` and `u128`)** [[PR#124]](https://github.com/mun-lang/mun/pull/124)
  ```mun
    fn foo() {
        let _a = 100_000_000_000_000u128;
        let _b = -100_000_000_000_000i128;
    }
  ```

* **misc: lock cbindgen dependency to 0.14.0** [[PR#126]](https://github.com/mun-lang/mun/pull/126)

* **style: add a missing space to invoke_fn15's definition** [[PR#132]](https://github.com/mun-lang/mun/pull/132)

* **feat: remainder operator** [[PR#135]](https://github.com/mun-lang/mun/pull/135)
  ```mun
    fn remainder(a: i64, b: i64) -> i64 {
        a % b
    }
  ```

* **feat: unary operators** [[PR#136]](https://github.com/mun-lang/mun/pull/136)
  ```mun
    fn negate(a: i64) -> i64 {
        -a
    }
  ```

As our Core Team only consists of two part-time members, this greatly helps us scale our output!
Another new contributor has picked up one of our [*good first issues*][gfi]. Hopefully we will be
able to merge their [PR](https://github.com/mun-lang/mun/pull/129) soon.

We have added one additional [*good first issue*][gfi] on Github, which is a good starting point for
anyone who wants to get involved with Mun:

* **refactor(abi): move privacy and name from `FunctionSignature` to `FunctionInfo`** [[issue#146]](https://github.com/mun-lang/mun/issues/146)

If you are interested in helping develop Mun - but are not sure where to start - feel free to reach
out to us on [Discord](https://discord.gg/SfvvcCU) or [Twitter](https://twitter.com/munlangorg). To
support our cause, please consider donating to our [Open Collective][oc].

[gfi]: https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22
[oc]: https://opencollective.com/mun

#### v0.2 progress

The last checkbox we needed to tick for the Mun v0.2 release was **struct hot reloading**:

* **refactor: remove TypeInfo and StructInfo from StructRef** [[PR#109]](https://github.com/mun-lang/mun/pull/109)

* **feat: memory mapping** [[PR#117]](https://github.com/mun-lang/mun/pull/117)
[[blog]](../../01/memory-mapping)

* **fix(runtime): ensure loaded Assemblies can be linked** [[PR#139]](https://github.com/mun-lang/mun/pull/139)

* **feat: add casting of fundamental types to memory mapping** [[PR#140]](https://github.com/mun-lang/mun/pull/140)

* **refactor: cleanup runtime/memory code** [[PR#142]](https://github.com/mun-lang/mun/pull/142)

Apart from that we focused on bug fixes, quality of life improvements, and brushing up our documentation for the upcoming release:

* **fix: infer invalid struct type** [[PR#111]](https://github.com/mun-lang/mun/pull/111)

* **fix: fixes #113** [[PR#114]](https://github.com/mun-lang/mun/pull/114)

* **misc: updates to official cbindgen crate** [[PR#115]](https://github.com/mun-lang/mun/pull/115)

* **docs(readme): new Arch Linux install instructions** [[PR#116]](https://github.com/mun-lang/mun/pull/116)

* **improvement: better literal support** [[PR#122]](https://github.com/mun-lang/mun/pull/122)
  ```mun
    fn main() {
        let a = 1i8;
        let a = 0x3a_u32;
        let a = 0o71234;
        let a = 1_000_000_u32;
        let a = 5i64;
        let a = 3.0f32;
        let a = 1_000_123.0e-2f32;
    }
  ```

* **feat: add support for extern functions without a return type** [[PR#127]](https://github.com/mun-lang/mun/pull/127)
  ```rust
    extern "C" fn foo(a: i64) {
        println!("{}", a);
    }
  ```

* **fix: fixes #128** [[PR#130]](https://github.com/mun-lang/mun/pull/130)

* **misc: merged file and group ir snapshots** [[PR#131]](https://github.com/mun-lang/mun/pull/131)

* **fix(codegen): only generate exposed functions** [[PR#134]](https://github.com/mun-lang/mun/pull/134)

* **fix: color output on linux terminal** [[PR#138]](https://github.com/mun-lang/mun/pull/138)

* **chore(ci): split artifact generation into separate workflow** [[PR#141]](https://github.com/mun-lang/mun/pull/141)

* **feat(runtime): add cloning of StructRef** [[PR#143]](https://github.com/mun-lang/mun/pull/143)

* **feat: add assignment, bit, and boolean operators** [[PR#144]](https://github.com/mun-lang/mun/pull/144)
  ```mun
    struct Foo {
        a: bool,
    }

    struct Bar(Foo);

    fn main() {
        let b = true;
        let foo = Foo { a: !b };
        foo.a |= (b ^ true) && (b ^ false);

        let bar = Bar(foo);
        let foo2 = Foo { a: b };
        bar.0 = foo2;
        let a = 2 >> 1;
    }
  ```

With struct hot reloading completed, we are now putting the final touches to our documentation and
C++ bindings - before releasing Mun v0.2. Please stay tuned!
