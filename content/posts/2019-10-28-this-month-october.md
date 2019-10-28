---
title: "This Month in Mun - October 2019"
author: The Mun Team
excerpt: Having built a runtime prototype and framework for lexing, parsing, type checking, and LLVM IR code generation; our goal for the remainder of October was to extend, polish, and stabilise this into a Mun v0.1 release.
---

We started October with the launch of our [website](https://mun-lang.org), [Discord server](https://discord.gg/SfvvcCU), and [OpenCollective](https://opencollective.com/mun). Our ideas had advanced far enough that we felt ready to share our vision, but it was still exciting to see how the community would receive our ideas. To our surprise the announcement attracted a larger audience than anticipated - thankfully most of the feedback was positive. Where possible we tried to engage with the community to provide clarity and improve our website accordingly. If you still have any feedback on our website or just want more information, feel free to reach out to us on [Discord](https://discord.gg/SfvvcCU).

Having built a runtime prototype and framework for lexing, parsing, type checking, and LLVM IR code generation; our goal for the remainder of October was to extend, polish, and stabilise this into a Mun v0.1 release. 

#### Stability

To guarantee that this and future releases operate as expected, we spent a lot of time developing tools to test code quality and integrating those tools into our continuous integration pipeline. As part of this effort we implemented snapshot testing for [lexing](https://github.com/mun-lang/mun/blob/aa42189db032e0cfc2399ef6c8f50ab08c6680f7/crates/mun_syntax/src/tests/lexer.rs), [parsing](https://github.com/mun-lang/mun/blob/aa42189db032e0cfc2399ef6c8f50ab08c6680f7/crates/mun_syntax/src/tests/parser.rs), [type checking](https://github.com/mun-lang/mun/blob/aa42189db032e0cfc2399ef6c8f50ab08c6680f7/crates/mun_hir/src/ty/tests.rs), and [code generation](https://github.com/mun-lang/mun/blob/aa42189db032e0cfc2399ef6c8f50ab08c6680f7/crates/mun_codegen/src/test.rs) through the use of the [insta](https://docs.rs/insta) crate, [integration testing of the compiler and runtime](https://github.com/mun-lang/mun/blob/769bfe5a3a921bcc5289217e692f7f8cf19648ab/crates/mun_runtime/src/test.rs), [test coverage metrics](https://codecov.io/gh/mun-lang/mun), [CI](https://dev.azure.com/mun-lang/mun/_build) that continuously builds our code on all Tier 1 platforms (64-bit Windows, macOS, 64-bit Linux), and `cargo fmt` and `cargo clippy` compliance. This test suite allows us to confidently accept pull requests without introducing regressions and makes it easier for other developers to [contribute to Mun](https://github.com/mun-lang).

#### Mun language

For Mun v0.1 we set out to extend the language specification with [function calls](https://github.com/mun-lang/mun/pull/9), [boolean operations](https://github.com/mun-lang/mun/pull/23), and [if-then-else statements](https://github.com/mun-lang/mun/pull/24). With these features in place, we are able to demo Mun's hot reloading capabilities using fibonacci:

```mun
fn fibonacci(n:int):int {
    if n <= 1 {
        n
    } else {
        fibonacci(n-1) + fibonacci(n-2)
    }
}
```

#### Mun runtime

Whenever we add new semantics to the Mun language, we also want to support hot reloading for it. To hot reload functions, the Mun compiler looks up a function pointer in a dispatch table and calls that function instead of inlining function calls. When the compiled library is loaded into the runtime (i.e. on startup or when hot reloading), a process called _runtime linking_ ensures that all those function lookups to internal and external functions map to the correct function addresses. This allows us to hot reload any function at the expense of a slight runtime overhead.

#### Embedding

When designing embedding of Mun into other languages, we wanted the developer experience to be as straightforward as possible. As such we wanted to offer language-specific bindings for some of the languages most likely to embed Mun. As the Mun runtime is written in Rust it became our first target, but we also developed a C API; its stable ABI allowing for the creation of similar bindings in most other languages. To illustrate this we also developed C++ bindings that utilize the C API.

```mun
fn equal(a:int, b:int):bool {
    a==b
}
```

We envisioned three modes of operation for a developer invoking the above Mun function:

* Invoke a function (can fail)
* Retry an invocation once (can fail)
* Wait until the invocation succeeds

Both the `retry` and `wait` operations wait for hot reloaded code before trying again. The Rust and C++ syntax for invoking the `equal` Mun function look as follows:

```rust
use mun_runtime::{invoke_fn, MunRuntime, RetryResultExt, RuntimeBuilder};
use std::env;

fn main() {
    let lib_dir = env::var("TARGET_LIB_PATH").expect("Expected path to a Mun library.");

    let mut runtime = RuntimeBuilder::new(lib_dir).spawn().unwrap();

    let a: i64 = 52;
    let b: i64 = 764;
    let c: bool = MunRuntime::invoke_fn2(&mut runtime, "equal", a, b).unwrap();
    println!("{} == {}? {}", a, b, c);

    let c: bool = invoke_fn!(runtime, "equal", a, b).wait();
    println!("{} == {}? {}", a, b, c);

    let c: Result<_, _> =
        MunRuntime::invoke_fn2::<i64, i64, bool>(&mut runtime, "equal", 52, 764).retry();

    if c.is_ok() {
        println!("{} == {}? {}", a, b, c.unwrap());
    }
}
```

```cpp
#include <iostream>
#include <string>

#include "mun/runtime.h"

int main(int argc, char* argv[]) {
    if (argc < 2) {
        return 1;
    }

    if (auto runtime = mun::make_runtime(argv[1])) {
        int64_t a = 2;
        int64_t b = 3;

        bool result1 = mun::invoke_fn<bool>(*runtime, "equal", a, b).unwrap();
        bool result2 = mun::invoke_fn<bool>(*runtime, "equal", a, b).wait();
        auto result3 = mun::invoke_fn<bool>(*runtime, "equal", a, b).retry();

        std::cout << "Result1: " << std::to_string(result1) << std::endl;
        std::cout << "Result2: " << std::to_string(result2) << std::endl;

        if (result3.is_ok()) {
            std::cout << "Result3: " << std::to_string(result3.unwrap()) << std::endl;
        }
        return 0;
    }

    return 2;
}
```

We are hard at work putting the finishing touches to Mun v0.1, so stay tuned!
