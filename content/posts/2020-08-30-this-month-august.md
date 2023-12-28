---
title: "This Month in Mun - August 2020"
author: "The Mun Team"
excerpt: "This month brings some big community and core team updates, paving the way for the release of all Mun crates - including the compiler - to crates.io."
---

This month brings some big community and core team updates, paving the way for the release of all Mun crates - including the compiler - to [crates.io](https://crates.io).

#### Community

We welcomed a new community contributor, who immediately took on a big [*good first issue*][gfi]:

* **feat: type alias**
  [[PR#251]](https://github.com/mun-lang/mun/pull/251)
  [[PR#7]](https://github.com/mun-lang/vscode-extension/pull/7)

Thank you for your contributions, and welcome to the Mun community!

If you are also interested in helping develop Mun - but are not sure where to start - feel free to
reach out to us on [Discord](https://discord.gg/SfvvcCU) or [Twitter][twi]. To support our cause,
please consider donating to our [Open Collective][oc] or [Github Sponsors][gs].

[miobi]: https://github.com/mun-lang/mun/issues/220
[gfi]: https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22
[oc]: https://opencollective.com/mun
[gs]: https://github.com/sponsors/mun-lang
[twi]: https://twitter.com/munlangorg

#### Mun v0.3 progress

This month we mainly focused on some big refactors that improved ergonomics and will allow us to
add runtime type dependencies - a core component for project management.

* **improvement: shared diagnostics between compiler and language server** [[PR#239]](https://github.com/mun-lang/mun/pull/239)
* **refactor: generate C ABI from Rust code**
  [[PR#255]](https://github.com/mun-lang/mun/pull/255)
  [[PR#8]](https://github.com/mun-lang/runtime-ffi/pull/8)
  [[PR#8]](https://github.com/mun-lang/abi-c/pull/8)

  An ergonomic improvement that allows us to use Rust's algebraic data types (or ADTs), while remaining C ABI compatible.
* **refactor: move library loading logic to separate crate** [[PR#252]](https://github.com/mun-lang/mun/pull/252)
* **refactor: move test utility functions to separate crate** [[PR#253]](https://github.com/mun-lang/mun/pull/253)
* **refactor: upgrade to official inkwell** [[PR#254]](https://github.com/mun-lang/mun/pull/254)
  
  Thanks to this refactor we were able to move to an official release of
  [inkwell](https://crates.io/crates/inkwell), allowing us to release the Mun v0.3 compiler crates
  on [crates.io](https://crates.io/) in the future.

  For now, we are still stuck on LLVM 8, due to a bug in the LLD linker - that was introduced in
  later versions. We've [created a fix that has been merged](https://reviews.llvm.org/D86401), so
  we should be able to upgrade to future releases of LLVM again.

Having finished project configuration [last month](../../../07/30/this-month-july/) and runtime
type dependencies well underway, we'll be focussing on compiler support for [`use`
statements](https://github.com/mun-lang/mun/issues/249) and [accessibility
specifiers](https://github.com/mun-lang/mun/issues/248) next.

It's been over three months since we started work on Mun v0.3. Whereas it took us six months to
release Mun v0.2, our goal is to shorten our development cycle to 3-4 months, going forward. As
such, we've moved several "nice to have" issues to the next tock release - Mun v0.5 - to make sure
that we can release Mun v0.3 in about a month.

For more details, please check out our [high-level
roadmap](https://github.com/mun-lang/mun/milestones) on Github that details new features for the
upcoming three releases - Mun v0.3, v0.4, and v0.5 - as well as a backlog of features that are
still to come.
