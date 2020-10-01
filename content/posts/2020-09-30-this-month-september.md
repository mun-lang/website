---
title: "This Month in Mun - September 2020"
author: "The Mun Team"
excerpt: "The community and core team worked together on improvements to bring Mun closer to a new release. Work is also progressing to support multiple source files."
---

The community and core team worked together on improvements to bring Mun closer to a new release. 
Work is also progressing to support multiple source files.

#### Community

A community member whom we welcomed last month picked up another [*good first issue*][gfi] and also 
fixed some deprecations:

* **build: pin rust version to 1.46.0** [[PR#269]](https://github.com/mun-lang/mun/pull/269)
* **improvement: bump smol_str dependency to 0.1.17** [[PR#270]](https://github.com/mun-lang/mun/pull/270)

We are very thankful for your contributions and we hope to see more of them in the future!

More community contributions came from a contributor who tried out our C++ bindings and immediately 
fixed some issues:

* **fix: resolve compiler error in MunGuid equality operator and add assignment operators to RuntimeFunction** [[PR#9]](https://github.com/mun-lang/runtime-ffi/pull/9)

Thanks for your contributions, and welcome to the Mun community!

If you are also interested in helping develop Mun - but are not sure where to start - feel free to
reach out to us on [Discord](https://discord.gg/SfvvcCU) or [Twitter][twi]. To support our cause,
please consider donating to our [Open Collective][oc] or [Github Sponsors][gs].

[gfi]: https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22
[oc]: https://opencollective.com/mun
[gs]: https://github.com/sponsors/mun-lang
[twi]: https://twitter.com/munlangorg

#### Mun v0.3 progress

This month we again focused on some big refactors to create a more stable and maintainable codebase. 
This includes some bug fixes which were found by the Mun community as well as more [high level 
documentation about our use of Salsa](https://docs.mun-lang.org/ch04-01-salsa.html).

* **fix: never return type in let initializer** [[PR#264]](https://github.com/mun-lang/mun/pull/264)
* **refactor: use Idx<T> instead of macro in arena** [[PR#266]](https://github.com/mun-lang/mun/pull/266)
* **misc: split database and added docs** [[PR#267]](https://github.com/mun-lang/mun/pull/267)

Work is still underway to support multiple files in a single project but supporting PRs have already 
landed.

* **feature: adds fixtures to support multiple files from string** [[PR#272]](https://github.com/mun-lang/mun/pull/272)
* **feature: refactored RawItems into ItemTree** [[PR#271]](https://github.com/mun-lang/mun/pull/271)

With the work done for project configuration [in July](../../../07/30/this-month-july/), we are 
focusing on compiler support for [`use` statements](https://github.com/mun-lang/mun/issues/249) and 
[accessibility specifiers](https://github.com/mun-lang/mun/issues/248).

Last month we talked about wanting to release Mun v0.3 but we are not quite there yet. We chose to 
delay the release a little bit to give ourselves some time to achieve the level of polish that we
aspire to deliver in every release.

For more details, please check out our [high-level
roadmap](https://github.com/mun-lang/mun/projects/2) on Github that details new features for the
upcoming three releases - Mun v0.3, v0.4, and v0.5 - as well as a backlog of features that are
still to come.
