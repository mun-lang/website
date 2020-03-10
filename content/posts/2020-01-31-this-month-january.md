---
title: "This Month in Mun - January 2020"
author: The Mun Team
excerpt: The dawning of a new year is often marked by reflection and the conception of resolutions. We felt that the goals we had previously set for Mun v0.2 were still true, so with the help of our community we pushed forward with our plans.
---

The dawning of a new year is often marked by reflection and the conception of resolutions. We felt that the goals we had previously set for Mun v0.2 were still true, so with the help of our community we pushed forward with our [plans](https://trello.com/b/ZcMiREnC/mun-roadmap).

#### Community

The first PR of the year was made by a new community contributor. Welcome! Their PR was quickly followed by some PRs from a recurring contributor. These are some examples of [*good first issues*](https://github.com/mun-lang/mun/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) that we hope will invite new contributors into our community, while helping improve the quality of life for our users and developers:

* **refactor: renamed `public` to `pub` and removed some un-used functions** [[PR#26]](https://github.com/mun-lang/mun/pull/26)

* **test: add test to check if compiler output strings is valid utf8** [[PR#67]](https://github.com/mun-lang/mun/pull/67)

* **refactor: replace `CStr::from_ptr(ptr).to_str()` with `from_utf8_unchecked`** [[PR#66]](https://github.com/mun-lang/mun/pull/66)

* **feat: compiled libraries have `munlib` extension instead of `dll`/`so`** [[PR#75]](https://github.com/mun-lang/mun/pull/75)

* **fix(hotreloading): no more 'successfully compiled' message if code has errors** [[PR#78]](https://github.com/mun-lang/mun/pull/78)

* **fix(diagnostic): move console cursor to new line after error log** [[PR#79]](https://github.com/mun-lang/mun/pull/79)

* **test: add unit tests for `LineIndex::line_str`** [[PR#86]](https://github.com/mun-lang/mun/pull/86)

A community member independently wrote a [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=0x9ef.vscode-mun) for Mun syntax highlighting ([source](https://github.com/0x9ef/vscode-mun)), for which we are very grateful!

The decision to call hot reloading-enabled libraries `*.munlib` is another great example of our community's involvement. It was coined by one of our community members on our [Discord](https://discord.gg/SfvvcCU) and consequently received most upvotes.

If you like our vision of a hot reloading-powered world and would like to be a part of our journey, then join us on [Discord](https://discord.gg/SfvvcCU), follow us on [Twitter](https://twitter.com/munlangorg), or watch us on [Github](https://github.com/mun-lang/mun).

#### v0.2 progress

In december we had already implemented language support for data structures, but [[PR#64]](https://github.com/mun-lang/mun/pull/64) was not merged until earlier this month. That allowed our focus to shift to integrating structs with the Mun runtime, support for external (non-Mun) functions, Mun-Rust interoperability, and Mun-C interoperability:

* **feat: use extern functions in dispatch table** [[PR#90]](https://github.com/mun-lang/mun/pull/90)
  ```rust
    intrinsics! {
        /// Allocates a chunk of memory in the runtime.
        pub fn malloc(size: u64, alignment: u64) -> *mut u8;
    }
  ```

* **feat: add marshalling of structs** [[PR#83]](https://github.com/mun-lang/mun/pull/83)
  ```mun
    struct(gc) Foo {
        n: int,
        b: Bar,
    }

    struct(gc) Bar;

    fn foo_new(bar: Bar): Foo {
        Foo { n: 1, b: bar, }
    }

    fn bar_new(): Bar { Bar }
  ```
  ```rust
    fn main() {
        let lib_dir = env::args().nth(1).expect("Expected path to a Mun library.");
        let mut runtime = RuntimeBuilder::new(lib_dir)
            .spawn()
            .expect("Failed to spawn Runtime");

        let bar: Struct = invoke_fn!(runtime, "bar_new").wait();
        let mut foo: Struct = invoke_fn!(runtime, "foo_new", bar).wait();
        let n1 = foo.get::<i64>("n").unwrap();
        let n2 = foo.replace("n", n1 + 1).unwrap();
        foo.set("n", n2).expect("Failed to change `Foo::n`");
    }
  ```

* **refactor: dynamically include struct information in type information** [[PR#84]](https://github.com/mun-lang/mun/pull/84)

* **feat: add struct as marshallable field type** [[PR#87]](https://github.com/mun-lang/mun/pull/87)
  ```rust
    fn main() {
        let lib_dir = env::args().nth(1).expect("Expected path to a Mun library.");
        let mut runtime = RuntimeBuilder::new(lib_dir)
            .spawn()
            .expect("Failed to spawn Runtime");

        let bar1: Struct = invoke_fn!(runtime, "bar_new").wait();
        let mut foo: Struct = invoke_fn!(runtime, "foo_new", bar1).wait();
        let bar2: Struct = invoke_fn!(runtime, "bar_new").wait();
        foo.set("b", bar2).expect("Failed to change `Foo::b`");
    }
  ```

* **feat(runtime_capi): add functions for interoperability** [[PR#88]](https://github.com/mun-lang/mun/pull/88)

Some bug fixes and miscellaneous quality of life improvements were also merged:

* **feat: add manual generation of abi, runtime-capi** [[PR#69]](https://github.com/mun-lang/mun/pull/69)

* **feat: better error message printing when signature is missing** [[PR#80]](https://github.com/mun-lang/mun/pull/80)

* **fix: struct initialization fix for non constants** [[PR#81]](https://github.com/mun-lang/mun/pull/81)

* **fix(struct): prevent erroneous caching of struct types** [[PR#89]](https://github.com/mun-lang/mun/pull/89)

#### Roadmap

Next up on our [TODO list](https://trello.com/b/ZcMiREnC/mun-roadmap) are language support for external functions, wrapping up Mun-C interoperability, hot reloading of struct data, and garbage collection.
