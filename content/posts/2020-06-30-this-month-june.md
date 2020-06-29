---
title: "This Month in Mun - June 2020"
author: "The Mun Team"
excerpt: "After the dust settled of the Mun v0.2 release, the focus of this month has been
on fixing several issues found by community members, improving the overall
quality of the code base and working towards our next release: Mun v0.3"
---

After the dust settled of the Mun v0.2 release, the focus of this month has been
on fixing several issues found by community members, improving the overall
quality of the code base and working towards our next release: Mun v0.3.

#### Community

A few important community PRs landed during this month:

* **improvement: added combatibility check between munlib and runtime** [[PR#226]](https://github.com/mun-lang/mun/pull/226)
* **refactor!: Replace deprecated failure crate with thiserror and anyhow** [[PR#213]](https://github.com/mun-lang/mun/pull/213)

In honour of the Mun v0.2 release we launched the [*Make It or Break It*
contest](https://github.com/mun-lang/mun/issues/220) in which we invite both
content creators and developers to use Mun v0.2 and make or break something
with/in Mun. The best Make It or Break It entry will be showcased on the front
page of the Mun website.

We've already seen several issues being posted which break Mun v0.2 in
interesting ways. We are very glad that these issues surfaced and we've been
working hard on fixing them:

* **fix: fixes a lot of llvm assertions** [[PR#233]](https://github.com/mun-lang/mun/pull/233)
* **fix: fixes issues #225** [[PR#232]](https://github.com/mun-lang/mun/pull/232)
* **fix: fixes issue #228** [[PR#229]](https://github.com/mun-lang/mun/pull/229)
* **fix(codegen): crash on missing nested private function** [[PR#221]](https://github.com/mun-lang/mun/pull/221)

June also marks the month in which the mun-lang organization has been admitted
to [the Github Sponsorship program][gs]. We saw a influx of sponsors on both our
Github sponsors as well as on our [Open Collective][oc]. We can't thank you enough!

We also added another [*good first issue*][gfi]:

* **Implement `mun new` or `mun init`** [[issue#237]](https://github.com/mun-lang/mun/issues/237)

If you are interested in helping develop Mun - but are not sure where to start -
feel free to reach out to us on [Discord](https://discord.gg/SfvvcCU) or
[Twitter](https://twitter.com/munlangorg). To support our cause, please consider
donating to our [Open Collective][oc] or [Github Sponsors][gs].

[gfi]: https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22
[oc]: https://opencollective.com/mun
[gs]: https://github.com/sponsors/mun-lang

#### Mun v0.3 progress

We work with a tick-tock verison model. With a tick version we implement
important new features whereas with a tock version we improve on the last
version. Mun v0.2 was a tick version so Mun v0.3 will be a tock version. We have
defined milestones on GitHub, on which you can follow the progress of [the
upcoming release](https://github.com/mun-lang/mun/milestone/2).

A lot of work has been put into the next release:

* **feature: foundation for projects**
    [[PR#223]](https://github.com/mun-lang/mun/pull/223) 
    
    This PR introduces the concept of projects as described in the [Project
    Management tracking issue](https://github.com/mun-lang/mun/issues/203).
    Instead of building Mun files by listing individual source files you now
    build an entire project (similar to a rust crate).

* **feat: language server setup**
    [[PR#210]](https://github.com/mun-lang/mun/pull/210)
    
    Work on our language server has slowly been progressing. The basic
    foundation has been implemented but no actual language server features have
    been implemented yet. We are working hard on implementing the first basic
    features:

    <img src="../images/languageserver.gif" alt="Diagnostics in VSCode" />

* **refactor(codegen): type safe inkwell types**
    [[PR#202]](https://github.com/mun-lang/mun/pull/202)
    
    A major thorn in our sight was the use of partially untyped inkwell types
    in our codebase. When dealing with a `StructValue` there is really no way
    to ensure that the underlying struct value is actually of the type you'd
    expect. To that end we implemented the `Value<T>` type which wraps an
    inkwell type but retains the Rust type information. With this, we already
    found some glaring issues which have now been fixed.

There is still a lot more work to do for Mun v0.3, so stay tuned!
