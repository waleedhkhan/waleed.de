---
title: Simplicity and Readability over Clean Code 
description: >
  Clean Code: A Premature Optimization Trap
date: 2023-03-10
---

The effectiveness of Clean Code in enhancing programmer productivity and code clarity is questionable. I have seen many cases where people who follow it blindly end up with overly complicated designs like FizzBuzz Enterprise. Even the examples from Uncle Bob, the author of Clean Code, are not very readable: [https://qntm.org/clean](https://qntm.org/clean)
<br><br>
I think the main issue is that Clean Code tries to optimize code flexibility too early. It adds complexity and worsens the code quality in the hope of making it easier to modify later. But we often don’t know how the code will evolve, and when the business requirements change, we usually have to change or rewrite the code significantly anyway.
<br><br>
In my experience, simplicity and readability are the best optimization criteria. Instead of resisting code changes, it is better to write code so clear that anyone can safely and easily change it when necessary.
<br><br>
And lastly, there is no trade-off between program performance and developer performance. Many times, I have found that simpler and more readable code also runs faster. You can often achieve both.