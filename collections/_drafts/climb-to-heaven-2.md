---
author: nieve
layout: post
date: 9999-01-01
title: Climb to heaven 2
---

Prerequisites: 
- Fast growing hierarchy
  - [Math: Extremely Large Numbers](https://piped.video/playlist?list=PLUZ0A4xAf7nkaYHtnqVDbHnrXzVAOxYYC) by Giroux Studios
  - [Ridiculously Huge Numbers](https://piped.video/playlist?list=PL3A50BB9C34AB36B3) by David Metzler
- [Limit Ordinal](https://en.wikipedia.org/wiki/Limit_ordinal)
- [Infinity is bigger than you think - Numberphile](https://piped.video/watch?v=elvOZm0d4H0) by Numberphile
- [Absolute Infinity - Numberphile](https://piped.video/watch?v=sq-ntG5Mcus) by Numberphile

Let's get started. 

Remember that the $$f$$ function starts with $$f(1,x)=x+1$$. The first term counts how many times you repeat $$f$$ on the second term, so $$f(a,b)=\underbrace{f(1,f(1,f(...,b),b),b)}_{a}$$. And when the first term $$a$$ reaches a limit ordinal, you substitute $$w$$ with the first term. For example, $$f(w,x)=f(x,x), f(w2,x)=f(w+x,x),f(w^{w+1},x)=f(w^{w}x,x)$$.

We've seen from last time how we can represent complicated ordinals or functions like $$w*^4w, w*^ww, w*^{w*^{w*^{...}w}w}w$$, etc using a much smaller ordinal inside the $$f$$ function like $$f(w^{w+1},w)$$. But to reach TREE(3), even the folded ordinal gets complicated and we have to use $$f$$ to represent it again. We want to start doing recusion on $$f$$ in the first term, like $$f(f(f(f(...),w),w)x)$$.

Lets add a new term to $$f$$, and $$f(1,a,b)$$ will be our old $$f(a,b)$$. Let $$f(2,1,x)=f(1,x,w)$$. Then, the first parameter will keep track of how many times $$f(2,1,x)=f(1,x,w)$$ is applied instead of $$f(1,1,x)=x+1$$. So $$f(3,x,w)=f(1,f(1,f(1,x,w),w),w)$$, approximately $$\Omega_2$$ in the fast growing hierarchy (FGH).

At $$f(w,x,y)$$, the $$w$$ absorbs the last parameter just like $$w$$ in the second parameter does. So $$f(w,1,3)=f(3,1,3)$$.

$$f(w,w,x)$$ repeatedly applies $$f(1,x,w)$$, and past $$f(w,w^w,x)$$ we are doing metarepetition and more complex recursion on $$f(1,x,w)$$. We are around $$\Omega_{w^w}$$ in FGH.

Note that this is much more powerful than recursion in the last term. An infinite recursion of $$f(1,x,f(1,x,f(1,x,...)))$$ only gives $$f(1,xw,w)$$, far below even $$f(2,x,w)$$.

Eventually even the $$x$$ in $$f(w,x,w)$$, representing the recursion structure of $$f(1,x,w)$$, gets too large, and we can use $$f$$ to represent it like $$f(w,f(1,x,w),w)=f(w+1,x,w)$$ or $$f(w,f(w,x,w),w)=f(w2,x,w)$$.

Then $$f(w^2,x,w)$$ collapses the recursion structure of $$f(w,x,w)$$, and $$f(w^3,x,w)$$ collapses recursion of $$f(w^2,x,w)$$.

Next we get to $$f(w^w,1,x)$$, where the $$w$$ absorbs the $$x$$ to become $$f(w^{(x)},1,x)$$. Each higher exponent of $$w$$, collapses the previous, and now even this collapsing process is being repeated. Of course you can then build a whole recursion structure on top of it, all collapsed into $$f(w^w,x,w)$$. So $$f(w^w,-,-)$$ collapses the process of collapsing. A metacollapse, if you will.

![cat think](/assets/images/picmix.com_2250113.gif)

And then you get $$f(w^w,f(1,x,w),w)=f(w^w+1,x,w), f(w^w,f(w^w,f(w^w,...,w),w),w)=f(w^{w+1},1,w)$$, collapsing the metacollapse. Then $$f(w^{w+1},f(w^{w+1},f(...),w),w)=f(w^{w+2},1,w), f(w^{w2},w,w), f(w^{w^2},w,w), f(w^{w^w},w,w)$$ for level 2 metacollapse, supercollapse, and so on, generating a complex collapse structure, folded up into the first term of $$f$$.

## Rise

It's time for four parameters. Again, $$f(1,a,b,c)=f(a,b,c)$$. The first term keeps track of recursion on the second term, so $$f(2,a,b,c)=f(1,f(1,a,w,w),b,c)$$. Any limit ordinals absorb the first term, for example $$f(w2,1,1,c)=f(w+c,1,1,c)$$.

Now:

$$f(w,1,1,w^2)=\underbrace{f(1,f(1,f(...),1,w),1,w)}_{w^2}$$

$$f(w,1,w,x)=\left.\underbrace{f(1,f(1,f(...),1,w),1,w)}_{\underbrace{f(1,f(1,f(...),1,w),1,w)}_{\underbrace{f(1,f(1,f(...),1,w),1,w)}_{w}}}\right\}x$$

$$f(w,w,1,x)=\underbrace{f(w,1,f(w,1,f(w,1,f(w,...,w,w),w,w),w,w),w,w)}_{x}$$

$$f(w2,1,1,x)=\underbrace{f(w,f(w,f(w,w,w,w),w,w,w),w,w,w)}_{x}$$


## Other Notations

These numbers are getting unfathomably large. But they already were with just two parameters in $$f$$. So how much really changed? How do we appreciate the improvement that 3 and 4 parameters bring?

For numbers that are as big as this probably aren't relevant to our lives or even anything the universe for now. The only thing to do with them is compare them to other big numbers made by other people or in other math problems. So let us look at some other numbers and ordinal notations for fun.

[Ultimate Large Numbers List 2024 - The Biggest Numbers Ever!!!](https://piped.video/watch?v=5hfkzo_ojGE)


