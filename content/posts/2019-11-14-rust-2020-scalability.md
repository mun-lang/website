---
title: "Rust 2020: Scalability"
author: Remco (Wodann) - Mun Core Team
excerpt: In my Rust 2020 blog I tried to shy away from specific feature requests, instead zooming out to look at the Rust ecosystem as a whole. As a community, we've achieved great things but we should take care not to crumble under the weight of a scaling language and ecosystem. We all need to come together to ensure that Rust can sustainably scale - be it in large organisations, communities, or codebases.
---

After the Rust Core Team's [call for blogs](https://blog.rust-lang.org/2019/10/29/A-call-for-blogs-2020.html), all of my *open-source time* was being consumed by the Mun v0.1.0 release. This put me in the unique position to draw inspiration from other 2020 blogs, before deciding to add my own perspective.

To give some background, my Rust experience is mostly limited to the periphery. I am an active member of the Rust Gamedev WG, co-creator of and contributor to the Mun language - written in Rust - as well as some other crates relating to IO, web development, and C<->Rust bindings generation. As such I'd classify myself as a Rust language user.

Following in the footsteps of [repnop](https://repnop.dev/posts/rust-2020), I want to take a moment to acknowledge this years achievements. In particular I'd like to highlight the expansion and hard work of the Rust community by listing 2019's newly created working groups:

- **Localization (community)**: Working on localization of compiler, documentation and websites.
- **Rustfix (devtools)**: Improve cargo-fix and be a point of contact for other teams.
- **async-await (compiler)**: Implementing async-await.
- **LLVM (compiler)**: Working with LLVM upstream to represent Rust in its development.
- **Meta (compiler)**: How compiler team organizes itself.
- **MIR Optimizations (compiler)**: Write MIR optimizations and refactor the MIR to be more optimizable.
- **Parallel rustc (compiler)**: Making parallel compilation the default for rustc.
- **Profile-guided optimization (compiler)**: Implementing profile-guided optimization for rustc.
- **RFC 2229 (compiler)**: Make a closure capture individual fields of the variable rather than the entire composite variable.
- **RLS 2.0 (compiler)**: Experimenting with a new compiler architecture tailored for IDEs.
- **Self-Profile (compiler)**: Improving the -Z self-profile feature.
- **Governance (core)**: Working on improving Rust Governance.
- **Learning (compiler)**: Make the compiler easier to learn by ensuring that rustc-guide and api docs are 'complete'.
- **Triage (release)**: Triage repositories under rust-lang organisation.
- **Secure Code**: Making it easy to write secure code in Rust.
- **Resources (embedded)**: Managing various resources owned by the embedded WG.
- **Polonius (compiler)**: Experimental work on a new borrow-checker implementation.
- **Game development**: Focusing on making rust the default choice for game development.

When you list all newly [registered](https://github.com/rust-lang/team)<sup>1</sup> working (sub-)groups like this, it's quite an extensive list. And there are even more! E.g. the [Rust Allocators WG](https://github.com/rust-lang/wg-allocators) is not *officially* listed on Rust's team repository. These are efforts done by both Rust *core* and *edge* teams. It's great that the Rust language, its ecosystem, and community contributions are growing rapidly, but this inherently comes with risks.

In the words of Bilbo Baggins, "I feel thin, sort of stretched, like butter scraped over too much bread." When a userbase grows, so do the number of requests for features and support. As such, the **scalability** of a product (in this case the Rust language) is bound by the size and efficiency of the product team / community.

[XAMPPRocky's blog](https://xampprocky.github.io/public/blog/rust-2021) points out that Rust contributors are at **risk of burnout** or have already fallen prey to burnout, and calls for 2020 to be a year dedicated to making the Rust community efforts more sustainable. I couldn't agree more, but would go a step further in saying that there are also other factors to consider when **sustainably scaling** Rust.

At its core, Rust is a systems language pursuing the trifecta: safety, concurrency, and speed. Its versatility has also attracted the attention of [firmware](https://github.com/rust-embedded/wg), [web application](https://www.arewewebyet.org), and [game](https://rust-gamedev.github.io/) development - to name a few. Community members spearheading Rust adoption in those fields probably contributed to the influx of new working groups. Whereas a lot of the sub-working groups have overlap in members, it seems that these new *edge* teams are comprised of *new* domain experts. If we don't take care to keep the lines of communication short, this puts the Rust ecosystem at **risk of fragmentation**. A fragmented community would greatly diminish its effectiveness.

Unfortunately, Rust is still at a tipping point where most contributions happen on a voluntary basis. This means that contributors have at most a couple of hours a day to spend on Rust. Some large organisations are already [using Rust](https://users.rust-lang.org/t/rust-in-large-organizations-meeting), but it would be a huge **influx of resources** if the private sector would be more involved with the development of Rust itself.

#### Conclusion

In my Rust 2020 blog I tried to shy away from specific feature requests, instead zooming out to look at the Rust ecosystem as a whole. As a community, we've achieved great things but we should take care not to crumble under the weight of a scaling language and ecosystem. We all need to come together to ensure that Rust can **sustainably scale** - be it in large organisations, communities, or codebases.


<sup>1</sup> My sincere apologies if I missed any working groups. Please let me know and I'll update the list.





