---
author: nieve
layout: post
date: 9999-01-01
title: Climb to heaven 2
---



What about the stuff about $$\epsilon_0, \zeta_0, \Gamma_0$$. It's common to call $$\epsilon_0=\sup(w,w^w,w^{w^w}...)$$, and $$\epsilon_1=\sup(\epsilon_0+1,w^{\epsilon_0+1},w^{w^{\epsilon_0+1}}...), \zeta_0=\sup(\epsilon_0,\epsilon_{\epsilon_0},\epsilon_{\epsilon_{\epsilon_0}}...),$$. Notice that this is the same as the $$w,a,b,...$$ symbols we looked at earlier, but starting at $$s(x)=w^x$$ instead of $$s(x)=w+1$$. So now we can decode what they mean:

$$\phi(1,0)=\epsilon_0=(w)_{s(x)=w^x}=w*^4w$$

$$\phi(1,1)=\epsilon_1=(w_2)_{s(x)=w^x}=2w_{s(x)=w^x}=w*^4(2w)$$

$$\phi(2,0)=\zeta_0=w*^4(w^w)$$

$$\phi(3,0)=\eta_0=w*^4(w^{w^2})$$

$$\phi(4,0)=w*^4(w^{w^3})$$

$$\phi(w,0)=w*^4(w^{w^w})$$

$$\phi(\phi(w,0),0)=w*^4 (w*^4 (w^{w^w}))$$

$$\Gamma_0=\phi(1,0,0)=w*^5 w$$

These symbols seem scary in the video with fixed points of fixed points of fixed points and so on. But now you see that $$\Gamma_0$$ is actually a pretty pathetic upgrade, only two steps past exponentiation.



## The first fold

Lets make a function that uses everything so far. Start with $$f(1,x)=x+1$$. We can apply the function multiple times, and the first term keeps track of how many times it has been applied.

$$f(3,10)=f(1,f(1,f(1,x)))=10+3$$

$$f(1,w)=w+1$$

And then we get to $$f(w,x)$$ where something special happens. Whenever you see $$w$$, you replace it with what is in the last term.

$$f(w,5)=f(5',5)=5+5$$

$$f(w,w)=f(w',w)=w2$$

$$f(w+1,w^2)=f(w,w^2+1)=f((w^2+1)',w^2+1)=w^2+1+w^2+1=w^22+1$$

This happens again at $$f(w2,x)$$:

$$f(w2,10)=f(w+w,10)=f(w+10',10)=f(w,20)=f(20',20)=20+20=40$$

You might notice that while the finite numbers in the first term represent addition by 1, each $$w$$ represents multiplication by 2.

Then we get $$f(w^2,x)=f(w\times x')=2^xx$$

$$f(w^2,w)=f(ww',w)=2^ww=w^2$$

$$f(w^2+w,w)=f(w^2,w)=2^{2w}w2=w^22$$

$$f(w^22,w)=f(w^2,w^2)=w^4$$

So each $$w^2$$ is like exponentiation/squaring. You can see that we are moving up the operators.

Continuing on, we get $$f(w^3,w)=w^w,f(w^4,w)=w*^4w ...$$ all the way until $$f(w^w,w)=w*^ww$$. We've reached the ackermann ordinal, a special milestone. If each operator is repeating the previous one, then the ackermann function is repeating how many times you do this repetition, a sort of "meta repetition". Although it is often overlooked in favor of $$\epsilon_0, \Gamma_0$$, and the small/large veblen ordinals, I feel that this ordinal is more significant.

Going back to the finite numbers, $$f(w^w,6)=6*^66=6\uparrow\uparrow\uparrow\uparrow 6$$ which is similar to $$g_1$$ from the construction of graham's number. Now we are ready to ascend.

At this point the last term is determining the level of operator. And we can increase this last term by adding to the $$w^w$$.

$$f(w^w+w,w)=f(w^w,w2=w*^{w2+2}w$$

$$f(w^w+w^3,w)=f(w^w,w^w)= w*^{w^w}w$$

$$f(w^w2,w)=w*^{w*^ww}w$$

$$f(w^w2,6)$$ is like $$g_2$$. And at $$f(w^{w+1},64)=f(w^ww,64)=f(w^w64',64)$$ we are doing it 64 times, creating a number that exceeds graham's number.

Notice that $$f(w^{w+1},x)$$ is applying $$f(w^w,x)$$ over and over, a repetition of the metarepetition. In general, multiplying by $$w$$ gives a repetition of the previous function. At $$f(w^{w2},x)$$, we are doing a whole new meta repetition on $$f(w^w,x)$$. And at $$f(w^{w^2},x)$$, we are repeatedly doing the meta repetition, a sort of level 2 metarepetition. And then we can repeat that ($$w^{w^2+1}$$), or do another metarepetition on it (w^{w^2+w}), or another level 2 metarepetition ($$w^{w^22}$$), or repeatedly do level 2 metarepetitions ($$w^{w^3}$$). At $$f(w^{w^w},x)$$, even the level of repetition becomes arbitrarily large, a superrepetition.

It's getting hard to keep track of all these repetitions, which is expected. The reason we created this function in the first place was to represent this repetition structure. Instead of having to draw or think about diagrams like this:

![diagram of w^{w^2}](/assets/images/wacfeni.png)

The whole structure can be folded down into a neat little function: $$f(w^{w^2},100)$$

You can probably imagine doing levels of repetition above the superrepetition, levels of superrepetition, super-super repetitions, building levels of those, hyperrepetitions, and more. By the time we get to $$f(w^{w^{w^w}})$$, we beyond all that. But we can keep going, past $$f(w^{w^{w^{...}}})$$ to $$f(w*^43,x), f(w*^4w,x), f(w*^5w,x)$$, and beyond. At $$f(w*^ww,w)$$ even our folded down ordinal in the first term is getting too big for our liking. But that's ok, we just now came up with a way to express large ordinals. That's right, we can take the output of $$f$$ and plug it right back in :)

$$f(f(w^w,w),x)=f(w*^ww,x)$$

Further reading:

- [The Coding Competition You've Probably Never Heard Of (BIGNUM BAKEOFF Part 1)](https://piped.video/watch?v=U1K6TOy6yjU&list=PL-R4p-BRL8NR8THgjx_DW9c92VHTtjZEY&index=1) by Fine Design
  - Note that the fast growing hierarchy is like our $$f$$ function except $$f_{a}(b)$$ in fast growing hierarchy is $$f(w^a,b)$$ for us. The Goodstein hydra grows as fast as $$f(w*^42, x)$$.
- [The Enormous TREE(3) - Numberphile](https://piped.video/watch?v=3P6DWAwwViU) by NumberPhile
- [TREE(3) (extra footage) - Numberphile](https://piped.video/watch?v=IihcNa9YAPk) by NumberPhile
- [TREE vs Graham's Number - Numberphile](https://piped.video/watch?v=0X9DYRLmTNY) by NumberPhile
  - Remember that $$\Gamma_0=w*^5 w$$. So $$f_{\Gamma_0}(x)$$ in the fast growing hierarchy is like $$f(w*^5 w,x)=f(f(w^5,w),w)$$
- [The Search for the Longest Infinite Chess Game](https://piped.video/watch?v=b-Bb_TyhC1A) by Naviary
  - Continuing with veblen:

$$\phi(2,0,0)=w*^6w=f(w^6,w)$$

$$\phi(3,0,0)=f(w^7,w)$$

$$\phi(w,0,0)=f(w^w,w)$$ (the ackermann ordinal)

$$\phi(1,0,0,0)=\phi(\phi(\phi(...,0,0),0,0),0,0)=f(w^w,f(w^w,f(w^w,...)))=f(w^{w+1},w)$$

$$\phi(1,0,0,0,0)=f(w^{w^2},w)$$

$$\phi(1,0,0,0,0,0)=f(w^{w^3},w)$$

It's similar to the arrays early in this page.

Small veblen ordinal=$$\phi(\underbrace{1,0,...}_w)=f(w^{w^w},w)$$

Large veblen ordinal=$$\phi(\underbrace{1,0,...}_{\phi(\underbrace{1,0,...}_{...})})=f(w^{w^w+1},w)$$

These are some large ordinals! What if we put them in the fast growing hierarchy?

$$f(f(w^{w^w+1},w),x)$$ is $$f_{\text{Large Veblen Ordinal}}(x)$$ in the fast growing hierarchy, which is about the power of the TREE(x) function.

Consider the $$\overline{\text{TREE}}(x)$$ function from the Numberphile video. Just going from 2 to 3 seeds in TREE function results in such a massive number, and now we are taking TREE(3) and applying the TREE function again and again. But this new iterated $$\overline{\text{TREE}}(x)$$ function actually only gets us to $$f(f(w^{w^w+1},w)w,x)$$. We have come so far that even repetition, metarepetition, superrepetition, and the such are negligible improvements.

I will stop here for now. But you might have an idea of how to go even higher.






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


