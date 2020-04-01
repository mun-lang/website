---
title: "This Month in Mun - March 2020"
author: The Mun Team
excerpt: A lot of things that we cannot fully control are currently going on in the world. The Mun community and Core Team are trying to make the best of the situation and have once again made great strides; the recently obtained MOSS grant giving us an additional productivity boost!
---

A lot of things that we cannot fully control are currently going on in the world. The Mun community and Core Team are trying to make the best of the situation and have once again made great strides; the recently obtained MOSS grant giving us an additional productivity boost!

#### Community

Our community has made great progress on the integration of the [annotate-snippets](https://crates.io/crates/annotate-snippets) crate. Hopefully we will be able to merge their [PR](https://github.com/mun-lang/mun/pull/91) soon.

We have added new [*good first issues*](https://github.com/mun-lang/mun/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) on Github, so if you want to get involved with Mun please check them out:

* **Replace return type annotation `:` with `->`** [[issue#105]](https://github.com/mun-lang/mun/issues/105)

* **Implement slab allocator to store `ObjectInfo<T>`** [[issue#106]](https://github.com/mun-lang/mun/issues/106)

* **feat: add type aliases** [[issue#110]](https://github.com/mun-lang/mun/issues/110)

#### v0.2 progress

We still had two major features left on our [v0.2 roadmap](https://trello.com/b/ZcMiREnC/mun-roadmap): **garbage collection** and **struct hot reloading**. This month we were able to finish the former and started on foundational work for the latter; with a projected release date of Mun v0.2 by early May:

* **feat(runtime): add marshalling of value structs** [[PR#93]](https://github.com/mun-lang/mun/pull/93)
  ```mun
    struct(value) Foo {
        x: int,
        y: int
    }

    pub fn foo_new(x: int, y: int): Foo {
        Foo { x: x, y: y, }
    }

    pub fn foo_add(foo: Foo): int { foo.x + foo.y }
  ```
  ```rust
    fn main() {
        let lib_dir = env::args().nth(1).expect("Expected path to a Mun library.");
        let mut runtime = RuntimeBuilder::new(lib_dir)
            .spawn()
            .expect("Failed to spawn Runtime");

        // The Mun compiler automatically generates a wrapper for `pub fn`s that
        // contain `struct(value)` arguments or return types, which allocates the
        // marshalled data in the runtime's allocator.
        let mut foo: StructRef = invoke_fn!(runtime, "foo_new", 1i64, 2i64).wait();
        let x = foo.get::<i64>("x").unwrap();
        let y = foo.replace("y", x + 1).unwrap();
        foo.set("x", y).wait();
    }
  ```

* **feat: extern functions** [[PR#96]](https://github.com/mun-lang/mun/pull/96)
  ```mun
    /// This is a function that does not have an implementation in Mun but instead is linked 
    /// dynamically when loading the assembly
    extern fn tick_the_system();

    fn main() {
      // The extern functions can be called like any other Mun function
      tick_the_system()
    }
  ```

* **feat: object ptr indirection** [[PR#97]](https://github.com/mun-lang/mun/pull/97)

* **feat: size and alignment in type info** [[PR#98]](https://github.com/mun-lang/mun/pull/98)

* **feat: garbage collector (defaults to mark&sweep)** [[PR#99]](https://github.com/mun-lang/mun/pull/99)

#### Quality Assurance

Our unceasing efforts to improve code coverage have resulted in several PRs focussed on new tests (and consequent fixes) - including our 100th PR!! 🎉

* **Replace grcov with tarpaulin for test coverage** [[PR#100]](https://github.com/mun-lang/mun/pull/100)

* **fix(code_gen): incremental compilation** [[PR#101]](https://github.com/mun-lang/mun/pull/101)

* **test(code_gen): add incremental compilation test** [[PR#102]](https://github.com/mun-lang/mun/pull/102)

* **fix: name of type table global** [[PR#108]](https://github.com/mun-lang/mun/pull/108)

We are always trying to improve metrics for objectively tracking quality as we progress. We've previously talked about how unit and integration tests are a big part of our development process. This month we've added [performance benchmarks](https://github.com/mun-lang/mun/pull/104) using [Criterion](https://crates.io/crates/criterion), allowing us to do our first optimisations in the Mun Runtime.

<img src="../images/empty-violin.svg" alt="Violin plot of an `empty` function call" width="100%" />

The violin plot above compares **function invocation overhead** of embedded languages (Mun, LuaJIT, Wasm) with the raw performance of Rust by invoking an empty function that merely returns the input argument. The [Wasmer](https://crates.io/crates/wasmer) runtime was used to execute Wasm.

Please note that Rust takes around 675 ps and is thus not visible on the above scale. For clarity, below you can see the respective PDFs of function call times in order of speed (less is better); i.e. for Rust, Mun, Wasm, LuaJIT (from left to right, top to bottom).

<img src="../images/empty-rust-pdf.svg" alt="PDF of an `empty` function call time using Rust" width="450" height="300" /><img src="../images/empty-mun-pdf.svg" alt="PDF of an `empty` function call time using Mun" width="450" height="300" />

<img src="../images/empty-wasm-pdf.svg" alt="PDF of an `empty` function call time using Wasm (with wasmer runtime)" width="450" height="300" /><img src="../images/empty-luajit-pdf.svg" alt="PDF of an `empty` function call time using LuaJIT" width="450" height="300" />

To test **arithmetic and logic performance**, we needed to minimise the function invocation overhead; enter Fibonacci. The line chart below shows the mean measured time for each language as the input argument increases (100, 200, 500, 1000, 4000, 8000). Even at this early stage, Mun's dependence on LLVM as compiler backend allows us to achieve performance comparable to Rust.

<img src="../images/fibonacci-lines.svg" alt="Line plot of `fibonacci` function calls" width="100%" />

*All benchmarks were run on an Intel(R) Core(TM) i7-6700HQ CPU @ 2.6 GHz with 16 GB DDR4 RAM.*

The benchmark source code is included with the [Mun repository](https://github.com/mun-lang/mun). Feel free to give it a try, add additional benchmarks, and share your findings with us on [Discord](https://discord.gg/SfvvcCU), [Twitter](https://twitter.com/munlangorg), or [Github](https://github.com/mun-lang/mun).

Last but not least, some miscellaneous quality of life improvements were also merged:

* **feat: only create symbols for public functions** [[PR#92]](https://github.com/mun-lang/mun/pull/92)

* **fix: removed the codecov token** [[PR#94]](https://github.com/mun-lang/mun/pull/94)

* **improvement: bump parking_lot dependency to 0.10** [[PR#103]](https://github.com/mun-lang/mun/pull/103)

* **improvement: bump failure dependency to 0.1.7** [[PR#107]](https://github.com/mun-lang/mun/pull/107)
