---
title: "This Month in Mun - October 2020"
author: "The Mun Team"
excerpt: "When Mun takes part in Hacktoberfest, there's one thing you can be sure of; lots and lots of pull requests. This month saw us finalise some big new features and refactors that inch us ever closer to a Mun v0.3 release."
---

When Mun takes part in Hacktoberfest, there's one thing you can be sure of; lots and lots of pull requests. This month saw us finalise some big new features and refactors that inch us ever closer to a Mun v0.3 release.

#### Community

This month Mun partook in the [DigitalOcean Hacktoberfest][doh] - a great event aimed at supporting
the open source community. Our goal was to get as many members to contribute at least 4 pull
requests, such that they could win either a limited edition T-shirt or plant a tree. That led to the
following contributions

* **feat: add mdbook plugin for testing mun code in book** [[PR#263]](https://github.com/mun-lang/mun/pull/263)
  This allows testing of Mun code in `mdbook`, guaranteeing that the Mun book remains up-to-date
  when we update our Mun compiler and runtime.
* **docs: fix broken book link and CoC link** [[PR#284]](https://github.com/mun-lang/mun/pull/284)

We are very thankful for your contributions and we hope to see more of them in the future!

If you are also interested in helping develop Mun - but are not sure where to start - feel free to
take a look at our [*good first issues*][gfi] or reach out to us on
[Discord](https://discord.gg/SfvvcCU) or [Twitter][twi]. To support our cause, please consider
donating to our [Open Collective][oc] or [Github Sponsors][gs].

[doh]: https://hacktoberfest.digitalocean.com
[gfi]: https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22
[oc]: https://opencollective.com/mun
[gs]: https://github.com/sponsors/mun-lang
[twi]: https://twitter.com/munlangorg

#### Mun v0.3 progress

This month we finally landed the long-awaited compiler and language-server support for multiple files in a single project:

* **feature: adds modules and visibility** [[PR#283]](https://github.com/mun-lang/mun/pull/283)
  ```mun
    // mod.mun
    struct Foo;
    fn main() -> self::Foo {
        Foo
    }
    fn bar() -> Foo {
        super::Foo  // undefined value
    }
    fn baz() -> Foo {
        package::Foo
    }
    // foo.mun
    struct Foo;
    fn bar() -> Foo {
        super::Foo  // mismatched type
    }
    fn baz() -> package::Foo {
        super::Foo
    }
    fn nested() -> self::Foo {
        package::foo::Foo
    }
  ```
  Those familiar with Rust conventions will notice that Mun:
  - uses `mod.mun` instead of `lib.mun` for the top-level file; and
  - does not require you to add a `mod foo;` statement to the `mod.mun` file. Instead all files in
    the `src` folder are assumed part of the file tree.
* **feature: adds super self and package keywords** [[PR#8]](https://github.com/mun-lang/vscode-extension/pull/8)

In addition, we laid most of the groundwork for runtime linking of multiple Mun libraries:
* **fix(codegen): alignment of struct fields** [[PR#285]](https://github.com/mun-lang/mun/pull/285)
* **feat(codegen): add AsValue macro support for enums** [[PR#286]](https://github.com/mun-lang/mun/pull/286)
  ```rust
  #[derive(AsValue)]
  #[repr(u8)]
  pub enum TypeInfoData<'ink> {
      Primitive,
      Struct(StructInfo<'ink>),
  }
  ```

Together with soon to be merged PRs, that should bring us within earshot of the Mun v0.3 release:

* **refactor: make type-specific data (such as StructInfo) part of TypeInfo**
  [[PR#287]](https://github.com/mun-lang/mun/pull/287)
  [[PR#10]](https://github.com/mun-lang/runtime-ffi/pull/10)
  [[PR#9]](https://github.com/mun-lang/abi-c/pull/9)
* **WIP: refactor: replace `TypeInfo` with `TypeRef` for runtime linking of types** [[PR#268]](https://github.com/mun-lang/mun/pull/268)

For more details, please check out our [high-level
roadmap](https://github.com/mun-lang/mun/projects/2) on Github that details new features for the
upcoming three releases - Mun v0.3, v0.4, and v0.5 - as well as a backlog of features that are
still to come.

Finally, we also performed some fixes and bumped the supported Rust version:

* **fix: dont run mun tests on CI** [[PR#278]](https://github.com/mun-lang/mun/pull/278)
* **bump: rust 1.47** [[PR#279]](https://github.com/mun-lang/mun/pull/279)
* **fix: 7zip issues** [[PR#280]](https://github.com/mun-lang/mun/pull/280)
