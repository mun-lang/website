---
title: "This Month in Mun - December 2020"
author: "The Mun Team"
excerpt: "December - again - was a slow month; holidays and day jobs keeping the core developers busy."
---

December - again - was a slow month; holidays and day jobs keeping the core developers busy. We did 
finally manage to work together during the holiday break.

As stated in [last month's update][lmu] we are looking into the possibility of funding a third  
developer ourselves - albeit a token amount. Sadly, none of our existing contributors can dedicate 
more of their precious time either, so we are on the lookout for new talent.

[lmu]: https://mun-lang.org/blog/2020/12/07/this-month-november/

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

* **feature: use statements language support** [[PR#290](https://github.com/mun-lang/mun/pull/290)]
  The language side of things to support multi-file projects is about to be wrapped up with the 
  introduction of `use` statements. We implemented `use` statements similar to how they work in 
  Rust, including support for wildcard imports.

  ```mun
  use package::foo::Bar;
  use package::bar::{self, Baz, *};
  ```

  The next step for our project management epic is to support runtime linking between assemblies.

* **bump: rust 1.49** [[PR#291](https://github.com/mun-lang/mun/pull/291)] and **bump: rust 1.48** [[PR#289](https://github.com/mun-lang/mun/pull/289)]
  We updated our codebase to work with the latest versions of Rust. This also included fixes for new
  clippy warnings.

For more details, please check out our [high-level
roadmap](https://github.com/mun-lang/mun/projects/2) on Github that details new features for the
upcoming three releases - Mun v0.3, v0.4, and v0.5 - as well as a backlog of features that are
still to come.
