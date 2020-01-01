---
title: "This Month in Mun - December 2019"
author: The Mun Team
excerpt: December is often perceived as a month that emphasizes family and togetherness. The Mun community for one really did pull together, allowing the core contributors to focus on making data structures a reality.
---

December is often perceived as a month that emphasizes family and togetherness. The Mun community for one really did pull together, allowing the core contributors to focus on making data structures a reality. This month, we've implemented:

* **Parsing of tuple data structures**
  ```mun
    struct Baz(float, int);
  ```
* **Parsing and type inferencing of data structure literals**
  ```mun
    struct Foo;
    struct Bar {
        a: float,
    }
    struct Baz(float, int);

    fn main() {
        let a: Foo = Foo;
        let b: Bar = Bar { a: 1.23, };
        let c = Baz(1.23, 1);
    }
  ```
* **Indexing of data structure fields**
  ```mun
    fn main() {
        let foo = Foo { a: 1.23, };
        foo.a
        let bar = Bar(1.23, 4);
        bar.0
        bar.1;
    }
  ```
* **Generation of LLVM IR for data structure declarations, literals, and field indexing**
* **Add data structure information to the Mun ABI**
  ```c
    typedef struct
    {
        /// Struct name
        const char *name;
        /// Struct fields' information
        const MunTypeInfo *field_types;
        /// Number of fields
        const uint16_t num_fields;
    } MunStructInfo;
  ```
* **Loading data structure information into the Mun Runtime**

We also made some minor fixes for the latest version of Rust and added [type checking of binary operations](https://github.com/mun-lang/mun/pull/70):

```mun
fn foo() {
    let b = false;
    let n = 1;
    let _ = b + n; // error: invalid binary operation
}
```

Meanwhile, the Mun community has not been standing by idly:

* We welcomed our first community contributions (PRs [#66](https://github.com/mun-lang/mun/pull/66) & [#67](https://github.com/mun-lang/mun/pull/67)) for two of our [good first issues](https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22). This is a great way for community members to gain an understanding of our codebase and workflow, while helping us implement important fixes and improvements.
* A community member who works on [Veloren](https://gitlab.com/veloren/veloren), created a proof of concept for Mun-powered hot reloading inside the game:
  
  <img src="https://media.discordapp.net/attachments/641225281750827019/660952501553594382/reload.gif?width=500&height=334" alt="Mun hot reloading in Verloren" />


Are you interested in contributing to Mun or do you just want to receive the latest updates? Then join us on [Discord](https://discord.gg/SfvvcCU), follow us on [Twitter](https://twitter.com/munlangorg), or watch us on [Github](https://github.com/mun-lang/mun).
