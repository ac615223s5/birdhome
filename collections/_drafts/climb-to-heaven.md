---
author: nieve
layout: post
date: 9999-01-01
title: Climb To Heaven (Extremely big numbers)
---

Lets try to find the largest number we can.

## Zero
A good starting place. The largest number we have so far.

## One
A good way to get large numbers is to take a number we've already found, apply some kind of function, and hopefully get something bigger. This will be our strategy for the majority of this post.

Here's an example of one such function:

$$s(x)=x+1$$

Also known as the successor function, it takes a number $$x$$ and returns a bigger number $$f(x)$$. Now lets try our fancy new function out:

$$s(0)=1$$

Just as intended, we now have the number 2, a bigger number than what we had before. Lets try doing it again:

$$s(s(0))=f(1)=2$$

$$s(s(s(0)))=3$$

$$s(s(s(s(0))))=4$$

...

As you can see, we can just keep applying this function as much as we want and get bigger and bigger numbers forever. The end.

## Infinity

...Or maybe not. Just because we can keep making our number bigger doesn't necessarily mean we can get a number that is any size we want. It's possible to have a number we will never reach. In the ordinals, that number is $$\omega$$ and it comes after any number in the sequence $$1,s(1),s(s(1)),...$$

This behaviour can be found in real life as well. For example, students in a class might be sorted by name and then age. In that case, it doesn't matter if Alice is older than the universe itself, she will always come before Bob.

Anyway, now that we have $$\omega$$, we can apply $s$ again and get $$s(\omega)$$, then $$s(s(\omega)),s(s(s(\omega))),...$$.

But then we get stuck again. And here's the thing with transfinite ordinals, unlike the finite ordinals: if we just keep applying the same function over and over, we will eventually get stuck. In order to represent numbers beyond, we will have be more creative. There are several approaches to what to do next.

### Option 1: define a new symbol

Like we did before, we can just define a new ordinal. Let the first ordinal after $$s(s(\omega)),s(s(s(\omega))),...$$ to be $\omega_2$. Then we get $$s(\omega_2),s(s(\omega_2)),...$$, and let the first one after that be $$\omega_3$$. And if we keep doing this we get $$\omega_4,\omega_5,...\omega_{\omega},w_{w+1},w_{w_1},w_{w_{w_1}},...$$ and we are stuck again. So lets call the first one after that $$a_1$$. Then we get $$a_2,a_3,...a_w,a_{w_w},a_a,a_{a_a}$$. Then we can define another ordinal $$b_1$$. And so on...

This process takes a lot of definitions and can be hard to think about. So lets look for another way.

### Option 2: Arrays

We can add a second term, and every time the first term reaches infinity, increase the second by one.

Let $$s(s(s(...(0)...)))=(1,0), (1,s(s(s(...))))=(2,0), (2,s(...))=(3,0)$$

Then when the second term reaches infinity, add a third term.

$$ (s(s(...)),0)=(1,0,0)$$

and so on.

### Option 3: ordinal expressions
The same way $$S(0)=0+1$$, we can call $$S(w)=w+1,S(S(w))=w+2,S(S(S(w)))=w+3$$, and the next one after $$S(S(...))=w+1+1+...=w+w=w2$$. By the way, the first ordinal after a series of ordinals is the suprenum of that series. So $$\sup(w,w+1,w+2,...)=w2$$. Then 

$$\sup(w2,w2+1,w2+2...)=w3$$,

$$\sup(w,w2,w3...)=w^2$$,

$$\sup(w^2,w^22,w^23,...)=w^3$$,

and $$\sup(w,w^2,w^3,...)=w^w$$.

Then we can keep going, $$\sup(w^w,w^w2,...)=w^ww=w^{w+1}, \sup(w^{w},w^{w+1},w^{w+2},...)=w^{w^2},\sup(w^w,w^{w^2},...)=w^{w^w}$$, and so on.

This method feels like a natural way to write it, since we are familiar with operators such as addition, multiplication, exponentiation in everyday arithmetic.

Comparison of these methods:

| New Variables       | Arrays    | Expressions      |
|---------------------|-----------|------------------|
| $$w$$               | (1,0)     | $$w=w^{w^0}$$    |
| $$w_2$$             | (2,0)     | $$w2$$           |
| $$w_w$$             | (1,0,0)   | $$w^2$$          |
| $$w_{w_{w+1}+2}+3$$ | (1,1,2,3) | $$w^3+w^2+2w+3$$ |
| $$a_1$$             | (1,0,...) | $$w^w=w^{w^1}$$  |
| $$w_{a+1}$$         |           | $$w^w+w$$        |
| $$w_{w_{a+1}}$$     |           | $$w^w+w^2$$      |
| $$a_2$$             |           | $$w^w2$$         |
| $$a_w$$             |           | $$w^{w+1}$$      |
| $$a_a$$             |           | $$w^{w2}$$       |
| $$b_1$$             |           | $$w^{w^2}$$      |
| $$b_w$$             |           | $$w^{w^2+1}$$    |
| $$b_b$$             |           | $$w^{w^22}$$     |
| $$b_{b_{b_{...}}}$$ |           | $$w^{w^3}$$      |
|                     |           | $$w^{w^w}$$      |

All those $$a,w_a,a_{a_a},b_b$$ symbols seemed confusing before, but now it's as clear as day.

To get a better feel for these ordinals, you can watch [How To Count Past Infinity](https://piped.video/watch?v=SrU9YDoXE88) by Vsauce.
Don't worry if you don't understand the stuff about $$\epsilon_0, \zeta_0, \Gamma_0$$. Remember what I said before about defining new symbols.





## Repetition

Starting from $$s(x)=x+1$$, we took advantage of our intution about everyday arithmetic to get expressions like $$w,w+1,w2,w^2,w^w$$. But we run out of notation to express $$w^{w^{w^{...}}}$$. We want a way to generate ordinals past exponentiation.

What if we started with $$s(x)=x+w$$ instead? Then $$2_{s(x)=x+w}=s(s(0))=w+w=w2$$ And $$w_{s(x)=x+w}=w+w+...=w^2$$. So by changing the $$s$$ function, we can represent larger ordinals using the same expression.

|$$x+1$$            |$$x+w$$      |$$xw$$     | $$w^x$$
|-      
|$$w              $$|$$1        $$|$$1      $$|$$1$$
|$$w2             $$|$$2        $$|           |
|$$w^2            $$|$$w        $$|$$2      $$|
|$$w^3            $$|$$w^2      $$|$$3      $$|
|$$w^w            $$|$$w^{w+1}  $$|$$w      $$|$$2$$
|$$w^{w2}         $$|$$         $$|$$w2     $$|
|$$w^{w^w}        $$|$$         $$|$$w^w    $$|$$3$$
|$$w^{w^{w^{...}}}$$|             |           |$$w$$
|?                  |             |           |$$w+1$$

Starting with 1 and $$w$$, the ordinal $$x_{s(x)=x+w}=xw$$, and $$xw_{s(x)=xw}=w^x$$. You can see the pattern here, we are generating a higher level operator every time. So what is $$x_{s(x)=w^x}$$? Well it would involve a fourth operation, after addition, multiplication, exponentiation. Lets call it $$*^4$$.

|$$x+1$$            | $$w^x$$ |$$w*^4x$$|
|-
|$$w*^4w=w*^52$$    |$$w$$    |$$1$$
|$$w*^4(w+1)$$      |$$w+1$$
|$$w*^4(w^w)$$      |$$w^w$$
|$$w*^4w*^4w=w*^53$$|$$w*^4w$$|$$2$$
|$$w*^5 w$$         |         |$$w$$


$$\underbrace{w+w+w+...}_{w}=w^2$$

$$\left.\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{...}}}\right\}w=w^w$$

$$\underbrace{\left.\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{...}}}\right\}\left.\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{...}}\right\}...}_w=w*^4 w$$

What about the symbols from the last video? It's common to call $$\epsilon_0=\sup(w,w^w,w^{w^w}...)$$, and $$\epsilon_1=\sup(\epsilon_0+1,w^{\epsilon_0+1},w^{w^{\epsilon_0+1}}...), \zeta_0=\sup(\epsilon_0,\epsilon_{\epsilon_0},\epsilon_{\epsilon_{\epsilon_0}}...),$$. Notice that this is the same as the $$w,a,b,...$$ symbols we looked at earlier, but starting at $$s(x)=w^x$$ instead of $$s(x)=w+1$$. So now we can decode what they mean:

$$\phi(1,0)=\epsilon_0=(w)_{s(x)=w^x}=w*^4w$$

$$\phi(1,1)=\epsilon_1=(w_2)_{s(x)=w^x}=2w_{s(x)=w^x}=w*^4(2w)$$

$$\phi(2,0)=\zeta_0=w*^4(w^w)$$

$$\phi(3,0)=\eta_0=w*^4(w^{w^2})$$

$$\phi(4,0)=w*^4(w^{w^3})$$

$$\phi(w,0)=w*^4(w^{w^w})$$

$$\phi(\phi(w,0),0)=w*^4 (w*^4 (w^{w^w}))$$

$$\Gamma_0=\phi(1,0,0)=w*^5 w$$

These symbols seem scary in the video with fixed points of fixed points of fixed points and so on. But now you see that $$\Gamma_0$$ is actually a pretty pathetic upgrade, only two steps past exponentiation.

### Back to the finite

Although it is possible to keep adding 1 to get any finite number, in reality we have limited patience to write stuff. We can use same techniques to represent very big finite numbers using less space. For example, there are 8,000,000,000 humans on earth. Instead of writing all those zeros, we can use a log scale, where $$log(1)=0$$ and $$log(x+1)=10x$$. Then $$8000000000=9.903_{s(x)=10x}$$. Going further, $$10*^410=\underbrace{10^{10^{10^{...}}}}_{10}$$, a large number indeed.

Relevant links:

[From 1,000,000 to Graham’s Number](https://waitbutwhy.com/2014/11/1000000-grahams-number.html) by Tim Urban 

[Graham's Number on Numberphile](https://piped.video/playlist?list=PLt5AfwLFPxWKZEG7KVg6HfdN2uWFLIB5q&cbrd=1) by Numberphile

Notice that a string of $$n$$ arrows $$\underbrace{\uparrow\uparrow ...}_n$$ is equivalent to $$*^{n+2}$$.

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


