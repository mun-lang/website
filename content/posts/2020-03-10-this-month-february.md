---
title: "This Month in Mun - February 2020"
author: The Mun Team
excerpt: We are very proud to announce that Mun has been awarded a $15K grant as part of the MOSS Mission Partners track. With Mozilla's generous support, we are able to boost the Core Team's efforts to finish hot reloadable data structures during the coming months.
---

<img src="../images/moss-banner.png" alt="Mun awarded MOSS grant" />

#### Mun awarded MOSS grant

We are very proud to announce that Mun has been awarded a $15K grant as part of the [MOSS Mission Partners](https://www.mozilla.org/en-US/moss/mission-partners) track. Its an honour for an established open-source company like Mozilla to put their faith in our mission and capabilities. With Mozilla's generous support, we are able to boost the Core Team's efforts to finish hot reloadable data structures during the coming months. 

Our goal is to support Mun code with both stack-allocated and heap-allocated data structures, which can be hot reloaded from Rust, C, and C++. A garbage collector will be used to manage heap-allocated structs. Major milestones include:

* Language support for structs (records, tuples, unit structs)

  ```mun
    struct Record { a: float, b: int }
    struct Tuple(Record)
    struct Unit;
  ```

* Language support for structs with different memory management models
  ```mun
    struct(gc) Gc(int);         // Garbage collected
    struct(value) Value(int);   // Passed by value
    struct Default(Value);      // Defaults to `struct(gc)`
  ```

* Marshalling of structs to Rust, C, and C++
  ```rust
    let mut value: StructRef = invoke_fn!(runtime, "value_new", 5i64).unwrap();
    assert!(value.set("0", 10i64).is_ok());
    assert_eq!(Ok(10i64), value.replace("0", 15i64));
    assert_eq!(Ok(15i64), value.get::<i64>("0"));
    let default: StructRef = invoke_fn!(runtime, "default_new", value).unwrap();
  ```

  ```cpp
    auto value = mun::invoke_fn<mun::Struct>(*runtime, "value_new", 5).unwrap();
    assert(value.set("0", 10));
    assert(10 == *value.replace("0", 15);
    assert(15 == *value.get<int64_t>("0"));
    auto default = mun::invoke_fn<mun::Struct>(*runtime, "default_new", value).unwrap();
  ```

Our complete roadmap for the MOSS grant milestones can be found on [Trello](https://trello.com/b/ZcMiREnC/mun-roadmap).

#### Acknowledgements

We would also like to thank Erlend for introducing us to and encouraging us to apply for the MOSS grant. If it weren't for his confidence in Mun - at an early stage - we would not have thought ourselves ready to apply.

#### Next steps

The MOSS grant marks a great achievement for our team, but we don't plan on stopping here. We want to keep improving and expanding Mun; and need your help to do so. Are you interested in contributing to Mun or do you just want to receive the latest updates? Then join us on [Discord](https://discord.gg/SfvvcCU), follow us on [Twitter](https://twitter.com/munlangorg), or watch us on [Github](https://github.com/mun-lang/mun). If you care about our mission but cannot aid in the development, please consider becoming a sponsor on our [Open Collective](https://opencollective.com/mun).
