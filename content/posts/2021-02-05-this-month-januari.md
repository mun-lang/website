---
title: "This Month in Mun - Januari 2021"
author: "The Mun Team"
excerpt: "The new year started with a lot of contributions!"
---

#### Mun v0.3 progress


* **feat(language server): integrated new vfs** [[PR#294]](https://github.com/mun-lang/mun/pull/294)

  Previously we used `ra_vfs` from Rust Analyzer to manage all file handling in our language server. 
  Rust Analyzer moved away from that crate and implemented a custom solution. 
  With the introduction of Rust 1.49 we encountered some clippy errors in our use of `ra_vfs`. 
  We followed suite and also implemented a (much simpler) custom solution. 
  This PR introduces a virtual filesystem that keeps a consistent state of all files currently used in our analysis in memory.
  It also provides a way to monitor the filesystem for changes and atomically apply these changes to the in-memory state.
  In the future the goal is to use this same functionality for our `watch` mode when building the source.

* **feat(language server): removed async code and switched to lsp_server** [[PR#295]](https://github.com/mun-lang/mun/pull/295)
  
  `async` is a great feature of Rust. 
  We've used it a lot in our implementation of the language server. 
  However, this was also really the only place that actually benefitted from Async IO. 
  A lot of our asynchronous code is just fire-and-forget computations which doesn't really benefit from Rusts async approach and instead works very well in a simple thread-pool.
  Besides that, our async implementation required a lot of boilerplate code because a lot of our dependencies are not async compatible (`salsa` for instance). 

  Therefore we decided to remove our async code and instead use a simple thread pool. 
  It also allowed us to switch to an existing crate for our Language Server Protocol implementation which in the end makes the code more readable.

* **feat(cli): add option to emit IR** [[PR#296]](https://github.com/mun-lang/mun/pull/296)
  
  Mun always emits platform dependant shared objects. 
  These are hard to debug if our code generation behaves incorrectly.
  This PR adds the ability to output Mun assemblies as LLVM IR files which are much easier to debug because we can easily translate them to a human readable form.

* **feature(lsp): adds document symbol provider** [[PR#297]](https://github.com/mun-lang/mun/pull/297)

  More work on the language server implementation. This PR adds the ability to visualize the symbols inside a document by inspecting the Abstract Syntax Tree of the file.

  <img src="../images/vscode-document-symbol-provider.png" alt="Mun document symbols" />

* **feat(book): describe how to install/build LLVM** [[PR#304]](https://github.com/mun-lang/mun/pull/304)

  The Mun compiler source code makes heavy use of LLVM. 
  Usually we install all our dependencies through cargo but LLVM has to be installed manually because its a system dependency.
  Installing LLVM is a tedious task, not made easy by the fact that we also require a specific version.
  We get a lot of questions on how to install this dependency. 
  This PR adds an explanation for different OSes on how to install LLVM so you can use it with Mun.

* **fix: manually extract llvm release to get more output** [[PR#302]](https://github.com/mun-lang/mun/pull/302) and  **misc: adds logging to windows llvm install** [[PR#301]](https://github.com/mun-lang/mun/pull/301)
  
  For a while now we've had some annoying issues with our Windows CI pipeline. 
  For some reason it kept failing randomly.
  This has been a thorn in our eyes because it kept happening at random moments. 
  Once we thought we had fixed the issue it just popped back up a few days later.
  With these PRs we tried to investigate why this failure occurred. 
  It helped us find the issue and implement a fix which will hopefully nip the problem in the butt.

There are currently a number of open Pull Requests which we hope to integrate soon.
A lot of work went into providing a better editing experience with more additions to the language server.
We also worked hard on enabling the use of multiple source files in the form of a Mun project. 
This month we worked on runtime linking multiple assemblies together which brings all of the features of the past few months together.

Exciting times! Stay tuned for more!




