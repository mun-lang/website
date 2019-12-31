---
title: "This Month in Mun - November 2019"
author: The Mun Team
excerpt: November marked the first milestone release of Mun, providing the Mun community with a first chance to experiment with native hot reloading. Leading up to the release we mainly focused on CI, improving documentation, and bug fixes; but also made a few more additions.
---

November marked the [first milestone release of Mun](../../../11/11/release-mun-v0-1-0/), providing the Mun community with a first chance to experiment with native hot reloading. Leading up to the release we mainly focused on CI, improving documentation, and bug fixes; but also made a few more additions:

* **Statically link `mun` against the `liblld` linker** [[PR#37]](https://github.com/mun-lang/mun/pull/37)
  This allows us to release Mun binaries without any external shared libraries.
* **`return` expressions** [[PR#38]](https://github.com/mun-lang/mun/pull/38)
  ```mun
    fn main(a:int):int {
        if a > 4 {
            return a;
        }
        a - 1
    }
  ```
* **Start functions that return native types from the CLI** [[PR#45]](https://github.com/mun-lang/mun/pull/45)

#### Community

We strongly believe that close community collaboration is needed to achieve our goal of natively supported hot reloading. To that end, we've published a [contributing guide](https://github.com/mun-lang/mun/blob/master/CONTRIBUTING.md), a [code of conduct](https://github.com/mun-lang/mun/blob/master/CODE_OF_CONDUCT.md), and [good first issues](https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22). We've also seen an influx of active users on our [Discord server](https://discord.gg/SfvvcCU), whom we try to include as much as possible when making design decisions; e.g. when brainstorming or through polls. If you are also interested in contributing to (or even just observing) this process, feel free to join. No restrictions on experience level or whatsoever. We welcome everyone and anyone!

#### Roadmap

Having released Mun v0.1, we set out to plan our next releases. Instead of setting ourselves hard deadlines, we work with to do lists that need to be completed before we release the next version. This means that we do not release Mun versions at a fixed cadence, but it does allow us to implement features and improvements with the care that we think they deserve.

We are also strong believers in the philosophy of using what you make, so henceforth we'll be adhering to a tick-tock release schedule; i.e. major feature releases are followed by improvement and bug fix releases during which we'll be making demos that showcase the new Mun features while helping us discover flaws in our own designs.

For the next version, we are planning to add language and hot reloading support for data structures,
loops, and external C functions. For the full roadmap of Mun, have a look at our [Trello board](https://trello.com/b/ZcMiREnC/mun-roadmap).

#### v0.2 progress

Some of these language features are already available on our `master` branch:

* **`loop` expressions** [[PR#60]](https://github.com/mun-lang/mun/pull/60)
  ```mun
    fn fibonacci(n:int):int {
        let a = 0;
        let b = 1;
        let i = 1;
        loop {
            if i > n {
                return a
            }
            let sum = a + b;
            a = b;
            b = sum;
            i += 1;
        }
    }
  ```
* **`break` expressions** [[PR#62]](https://github.com/mun-lang/mun/pull/62)
  ```mun
    fn fibonacci(n:int):int {
        let a = 0;
        let b = 1;
        let i = 1;
        loop {
            if i > n {
                break a;
            }
            let sum = a + b;
            a = b;
            b = sum;
            i += 1;
        }
    }
  ```
* **`while` expressions** [[PR#63]](https://github.com/mun-lang/mun/pull/63)
  ```mun
    fn fibonacci(n:int):int {
        let a = 0;
        let b = 1;
        let i = 1;
        while i <= n {
            let sum = a + b;
            a = b;
            b = sum;
            i += 1;
        };
        a
    }
  ```

The most anticipated addition that Mun v0.2 will bring are data structures. As it is a big change that spans across the entire codebase, we maintain a separate branch and [work-in-progress PR](https://github.com/mun-lang/mun/pull/64) to track progress. So far we've implemented:

* **Parsing of record and unit data structures**
  ```mun
    struct Foo;
    struct Bar {}
    struct Baz {
        a: float,
        b: int,
    };
  ```
* **Name resolution for data structures**
  ```mun
    fn main() {
        let foo: Foo;
        let bar: Bar;
        let baz: Baz;
    }
  ```

If you want to receive regular updates about our progress, join us on [Discord](https://discord.gg/SfvvcCU), follow us on [Twitter](https://twitter.com/munlangorg), or watch us on [Github](https://github.com/mun-lang/mun).
