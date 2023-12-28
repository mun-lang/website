---
title: "This Month in Mun - February 2021"
author: "The Mun Team"
excerpt: "It's been a long time coming, but the Core Team is closing in on the finish line for Mun v0.3. We are only a couple of pull requests away from locking the build for bug fixes and documentation. So start your engines!"
---

It's been a long time coming, but the Core Team is closing in on the finish line for Mun v0.3.
We are only a couple of pull requests away from locking the build for bug fixes and documentation.
So start your engines!

#### Mun v0.3 progress

* **feature: use statements language support** [[PR#290]](https://github.com/mun-lang/mun/pull/290)

  ```mun
  // /foo.mun
  pub struct Ok;

  // /bar.mun
  pub use package::foo::Ok as ReallyOk;
  pub struct Ok;

  // /baz.mun
  use package::bar::ReallyOk;
  ```

* **feature(lsp): implements incremental file updates** [[PR#298]](https://github.com/mun-lang/mun/pull/298)

  Allows the language server to receive incremental file updates when text is being modified in an editor.

* **bump: Inkwell beta.2 and LLVM11** [[PR#303]](https://github.com/mun-lang/mun/pull/303)

  Updates our entire codebase to LLVM11, which contains our fix for LLD.
  This will clear the way to build a fully statically linked version of Mun (except for libc) on Linux. (See [issue#191](https://github.com/mun-lang/mun/issues/191))

* **fix: parser performance issues** [[PR#307]](https://github.com/mun-lang/mun/pull/307)

  This improvements affects all operations, but in particular we noticed that it caused completions in a large file to go from 300ms to 3ms.

We have a couple more changes that we want to get in before we start preparing for the release of Mun v0.3.
In particular, runtime linking and one outstanding review on our language server.
After that we'll start the process of testing our Rust & C++ bindings, adding missing documentation and examples, and squashing bugs.
Can't wait?
Please help us test the latest version of Mun by [building from source](https://github.com/mun-lang/mun#building-from-source).

For more details, please check out our [high-level roadmap](https://github.com/mun-lang/mun/milestones) on Github that details new features for the upcoming three releases - Mun v0.3, v0.4, and v0.5 - as well as a backlog of features that are still to come.

#### Community

If you are interested in helping develop Mun - but are not sure where to start - feel free to take a look at our [*good first issues*][gfi] or reach out to us on [Discord](https://discord.gg/SfvvcCU) or [Twitter][twi]. To support our cause, please consider donating to our [Open Collective][oc] or [Github Sponsors][gs].

[doh]: https://hacktoberfest.digitalocean.com
[gfi]: https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22
[oc]: https://opencollective.com/mun
[gs]: https://github.com/sponsors/mun-lang
[twi]: https://twitter.com/munlangorg
