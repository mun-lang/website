---
title: "This Month in Mun - November 2020"
author: "The Mun Team"
excerpt: "This Month in Mun is a little different from our usual posts. There's a very simple reason for that; we didn't manage to do much."
---

This Month in Mun is a little different from our usual posts. There's a very simple reason for that;
we didn't manage to do much.

Apart from being the two Core contributors on Mun, we (Bas & Remco) have our day jobs in the
robotics and games industries; which means that all of Mun's development happens in our spare time.
We knew that would form a bottleneck for Mun's growth, so with the help of [@erlend_sh][esh] we've
heavily invested in our community from the start. We actively engage with the Mun and wider open-
source community to collaborate on [shared problems][share]; we open-source the Core team's
discussions [on Github][discussions], such that anyone can pitch in and execute on our plans; and
much more.

[esh]: https://twitter.com/erlend_sh
[share]: https://github.com/mun-lang/mun/issues/206
[discussions]: https://github.com/mun-lang/mun/labels/tracking

Since our Mun v0.1 release a year ago, this strategy has paid off in many ways. We [received a $15K
MOSS grant from Mozilla](../../../03/10/this-month-february) in part because of our
contributions to the community; more than half a dozen people have been generous enough to sponsor
our development with their private funds on [Open Collective][oc] and [Github Sponsors][gs]; over
double that number of contributors have improved, fixed or otherwise worked on the Mun codebase;
and we've had a lot of community engagement on our [Discord][discord].

[discord]: https://discord.gg/SfvvcCU
[gs]: https://github.com/sponsors/mun-lang
[oc]: https://opencollective.com/mun

There's still a lot that we can improve though. As we don't have enough funding to dedicate part
of our own workweek to open-source development, we've been looking into the possibility of funding
a third developer ourselves - albeit a token amount. Sadly, none of our existing contributors can
dedicate more of their precious time either, so we are on the lookout for new talent.

#### Tell me more!

As the reward is commensurate of an internship allowance, we're targetting a similar audience. So,
if you've been working on your own Rust projects and want to take the next step on a bigger,
community-driven project; or have always been interested in honing your compiler, language, or
garbage collection skills; this is an opportunity to do so alongside two industry veterans. An added
bonus is that all of our code is - and will always remain - open-source, so you can show off all of
your work on Mun during future job interviews.

If you are interested in helping develop Mun - but are not sure where to start - feel free to
take a look at our [*good first issues*][gfi] or reach out to us on [Discord][discord],
[Twitter][twi], or the *Contact Us* link at the bottom of our [website](https://mun-lang.org).

[gfi]: https://github.com/mun-lang/mun/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22
[twi]: https://twitter.com/munlangorg

#### Mun v0.3 progress

If your take away from this blog was, "Really?! You didn't manage to do anything for an entire month?!", there is one thing that we can share. Several of our PRs were blocked by a bug in
[cbindgen](https://github.com/eqrion/cbindgen). We [upstreamed a fix][cbindgen-fix], allowing us to
continue work on the following PRs:

* **refactor: make type-specific data (such as StructInfo) part of TypeInfo**
  [[PR#287]](https://github.com/mun-lang/mun/pull/287)
  [[PR#10]](https://github.com/mun-lang/runtime-ffi/pull/10)
  [[PR#9]](https://github.com/mun-lang/abi-c/pull/9)

[cbindgen-fix]: https://github.com/eqrion/cbindgen/pull/615

For more details, please check out our [high-level
roadmap](https://github.com/mun-lang/mun/milestones) on Github that details new features for the
upcoming three releases - Mun v0.3, v0.4, and v0.5 - as well as a backlog of features that are
still to come.
