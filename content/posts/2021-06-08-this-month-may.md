---
title: "This Month in Mun - May 2021"
author: "The Mun Team"
excerpt: "The core team is working on new features for Mun v0.4. The biggest feature will be dynamically sized arrays."
---

The core team has been working on new features for Mun v0.4. 
The biggest feature will be dynamically sized arrays.

#### Mun v0.4

Mun v0.4 will be the next release of the Mun programming language. 
This months contributions from the core team include:

* **[RFC] dynamically sized arrays** [[PR#324]](https://github.com/mun-lang/mun/pull/324)

    The dynamically sized arrays RFC has been merged. 
    This indicates that the core team has reached a consensus on the the language design details. 
    Development of the feature is underway.
* **feat: derive clone for RootedStruct** [[PR#323]](https://github.com/mun-lang/mun/pull/323)
    
    The Mun community pointed out that `RootedStruct` could not be cloned from Rust code. 
    This has been resolved with this MR.
* **bump: rust to 1.51.0 and 1.52.0** [[PR#327]](https://github.com/mun-lang/mun/pull/327) & [[PR#325]](https://github.com/mun-lang/mun/pull/325)

    The entire Mun codebase has been updated to support the latest lints from Rust 1.51 and 1.52

Interested in our progress or what we are doing next?
Please check out our [milestone page](https://github.com/mun-lang/mun/milestones) on Github that details new features for future releases - Mun v0.4 and v0.5 - as well as a backlog of features that are still to come.

#### Community

If you are interested in helping develop Mun - but are not sure where to start - feel free to take a look at our [*good first issues*][gfi] or reach out to us on [Discord](https://discord.gg/SfvvcCU) or [Twitter][twi]. To support our cause, please consider donating to our [Open Collective][oc] or [Github Sponsors][gs].

[gfi]: https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22
[oc]: https://opencollective.com/mun
[gs]: https://github.com/sponsors/mun-lang
[twi]: https://twitter.com/munlangorg
[v3r]: https://mun-lang.org/blog/2021/04/11/release-mun-v0-3-0/
[v4m]: https://github.com/mun-lang/mun/milestone/5
