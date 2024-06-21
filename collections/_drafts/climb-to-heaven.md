---
author: nieve
layout: post
date: 9999-01-01
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

<div class="hidden">
### Option 2: multivariable functions
We can extend the $$s$$ function so $$s(1,0)$$ is the next number after $$s(s(s(...)))$$, and $$s(x+1,0)$$ is the next one after $$s(x,s(x,s(x,...)))$$.

Then after $$s(x,0),s(s(x,0),0),...$$ we get $$s(s(s(...,0),0),0)=s(1,0,0)$$ and $$s(s(s(...,0,0),0,0),0,0)=s(1,0,0,0)$$, and eventually, $$s(1,0,0,...)$$.

And now we are out of room. But maybe we can use more dimensions or make our function input more complicated like $$s(1,,0)=s(1,0,0,...),s(1,,,0)=s(1,,0,,0,,...),s(1;0)=s(1,,,,,,...0)$$. But you would have to explain what all these symbols did.
</div>

### Option 2: ordinal expressions
The same way $$S(0)=0+1$$, we can call $$S(w)=w+1,S(S(w))=w+2,S(S(S(w)))=w+3$$, and the next one after $$S(S(...))=w+1+1+...=w+w=w2$$. By the way, the first ordinal after a series of ordinals is the suprenum of that series. So $$\sup(w,w+1,w+2,...)=w2$$. Then 

$$\sup(w2,w2+1,w2+2...)=w3$$,

$$\sup(w,w2,w3...)=w^2$$,

$$\sup(w^2,w^22,w^23,...)=w^3$$,

and $$\sup(w,w^2,w^3,...)=w^w$$.

Then we can keep going, $$\sup(w^w,w^w2,...)=w^ww=w^{w+1}, \sup(w^{w},w^{w+1},w^{w+2},...)=w^{w^2},\sup(w^w,w^{w^2},...)=w^{w^w}$$, and so on.

This method feels like the most natural way to write it, since we are familiar addition, multiplication, exponentiation in everyday arithmetic. But it might not be so obvious in the future.

Comparison of these methods:

|Option 1|Option 2|
|-|-|
|$$w  $$|$$w=w^{w^0}$$|
|$$w_2$$|$$w2$$|
|$$w_w$$|$$w^2$$|
|$$a_1$$|$$w^w=w^{w^1}$$|
|$$w_{a+1}$$|$$w^w+w$$|
|$$w_{w_{a+1}}$$|$$w^w+w^2$$|
|$$a_2$$|$$w^w2$$|
|$$a_w$$|$$w^{w+1}$$|
|$$a_a$$|$$w^{w2}$$|
|$$b_1$$|$$w^{w^2}$$|
|$$b_w$$|$$w^{w^2+1}$$|
|$$b_b$$|$$w^{w^22}$$|
|$$b_{b_{b_{...}}}$$|$$w^{w^3}$$|

All those $$a,w_a,a_{a_a},b_b$$ symbols seemed confusing before, but now it's as clear as day.

To get a better feel for these ordinals, you can watch 
[The Search for the Longest Infinite Chess Game](https://piped.video/watch?v=b-Bb_TyhC1A) by Naviary and
[How To Count Past Infinity](https://piped.video/watch?v=SrU9YDoXE88) by Vsauce.
Don't worry if you don't understand the stuff about $$\epsilon_0, \zeta_0, \Gamma_0$$. Remember what I said before about defining new symbols.





## Repetition

Starting from $$s(x)=x+1$$, we took advantage of our intution about everyday arithmetic to get expressions like $$w,w+1,w2,w^2,w^w$$. But we run out of notation to express $$w^{w^{w^{...}}}$$. What if we started with $$s(x)=x+w$$ instead? Then $$2_{x+w}=s(s(0))=w+w=w2$$ And $$w_{x+w}=w+w+...=w^2$$. So by changing the $$s$$ function, we can represent larger ordinals using the same expression.

|$$x+1$$  |$$x+w$$  |$$xw$$ | $$w^x$$
|-
|$$w        $$|$$1        $$|$$1      $$|$$1$$
|$$w2       $$|$$2        $$
|$$w^2      $$|$$w        $$|$$2      $$
|$$w^3      $$|$$w^2      $$|$$3      $$
|$$w^w      $$|$$w^w      $$|$$w      $$|$$2$$
|$$w^{w2}   $$|$$         $$|$$w2     $$
|$$w^{w^w}  $$|$$         $$|$$w^w    $$|$$3$$
|$$w^{w^{w^{...}}}$$|       |           |$$w$$
|?        |         |       |$$w+1$$

Starting with 1 and $$w$$, the ordinal $$x_{x+w}=wx$$. So by converting the ordinal from the $$s(x)=x+w$$ representation to the $$s(x)=x+1$$ representation we get the $$s(x)=xw$$ operation. By converting from $$xw$$ to $$x+1$$ we get $$w^x$$. So what is the operation that converts between the $$w^x$$ and $$x+1$$ representations? Well it would involve the next operation after addition, multiplication, exponentiation. Using up arrow notation, it would be $$f(x)=w\uparrow\uparrow x$$. So by converting between representations,  we now have a method to generate the next ordinals after $$w^{w^{w^{...}}}=w\uparrow\uparrow w$$

|$$x+1$$                  | $$w^x$$ |$$w\uparrow\uparrow x$$|
|-
|$$w\uparrow\uparrow w$$ |$$w$$|$$1$$
|$$w\uparrow\uparrow w+1$$|$$w+1$$
|$$w\uparrow\uparrow w^w$$    |$$w^w$$
|$$w\uparrow\uparrow w\uparrow\uparrow w$$    |$$w\uparrow\uparrow w$$|$$2$$
|$$w\uparrow\uparrow\uparrow w$$||$$w$$


$$\underbrace{w+w+w+...}_{w}=w^2$$

$$\left.\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{...}}}\right\}w=w^w$$

$$\underbrace{\left.\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{...}}}\right\}\left.\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{...}}\right\}...}_w=w\uparrow\uparrow w$$

### Back to the finite

Although theoretically possible to keep adding 1 to get any finite number, in reality we have limited time and space to write stuff. So you can take any of the transfinite ordinals here and replace $$w$$ with a finite number (say, 10) to easily represent some very large finite numbers. For example, $$10\uparrow\uparrow10=\underbrace{10^{10^{10^{...}}}}_{10}$$, a large number indeed.

Relevant links:

[From 1,000,000 to Graham’s Number](https://waitbutwhy.com/2014/11/1000000-grahams-number.html) by Tim Urban 

[Graham's Number on Numberphile](https://piped.video/playlist?list=PLt5AfwLFPxWKZEG7KVg6HfdN2uWFLIB5q&cbrd=1) by Numberphile

## Collapse

In the last section, we start with $$+1$$ and $$+w$$ and converted between different $$S$$ functions to build up addition, multiplication, exponentation, tetration, pentation, and higher operations, each one being the previous one repeated $$w$$ times. Now we might think about $$\sup(w\uparrow\uparrow w,w\uparrow\uparrow\uparrow w, w\uparrow\uparrow\uparrow\uparrow w,...)$$, a kind of "superrepetition" where the process of "repeating the previous operation" itself has been repeated infinitely. How would we represent that? 

Look back to [Option 2](option-2-ordinal-expressions) when we used expressions to represent repeatedly applying $$S$$. But now, what if we set each step $$S(x)$$ to be a repetition of $$x$$? Then $$f(1,w)=w,f(2,w)=w^w,f(3,w)=w\uparrow\uparrow w...$$ and $$f(w)=w\underbrace{\uparrow\uparrow ...}_w w$$ with $$w$$ arrows.

One step after that is $$f(w+1,w)=\left. w\underbrace{\uparrow\uparrow ...}_{\underbrace{\uparrow\uparrow ...}_{...}}w \right\}w$$. Replace the $$w$$s with a finite number (64) and you get $$f(w+1,64)$$, a number comparable to graham’s number. 

Next we get $$f(w+2,w),f(w+3,w),...$$, building a whole new series of operations over $$f(w)$$, all the way up to another superrepetition $$f(w2,w)$$. Repeatedly doing superrepetitions gives $$f(w,w),f(w2,w),f(w3,w),...$$ until $$f(w^2,w)$$, an infinitely repeated superrepetition. For now, lets call that a level 3 repetition. Then $$\sup(f(w,w),f(w^2,w),f(w^3,w),...)=f(w^w,w)$$ where even the repetition level is infinite.

And then you get $$\sup(f(w^w,w),f(w^w2,w),...)=f(w^{w+1},w),\sup(f(w^{w},w),f(w^{w+1},w),f(w^{w+2},w)...)=f(w^{w2},w)$$, and so on. These ordinals are getting extremely big. But you already know how all this works from before. We are just changing the $$S$$ function.

[The Coding Competition You've Probably Never Heard Of (BIGNUM BAKEOFF Part 1)](https://piped.video/watch?v=U1K6TOy6yjU&list=PL-R4p-BRL8NR8THgjx_DW9c92VHTtjZEY&index=1) by Fine Design

By the time we get to $$f(w^{w^{...}},w)$$, the ordinal is getting too big for everyday operations again. But wait, didn't we just come up with a way to express ordinals beyond exponentiation? That's right, we can take the output of $$f$$ and plug it right back into $$f$$ 😀

$$f(f(0,w),w)=f(0,w)$$

$$f(f(1,w),w)=f(w,w)$$

$$f(f(2,w),w)=f(w^w,w)$$

$$f(f(3,w),w)=f(w^{w^{...}},w)=f(w\uparrow\uparrow w,w)$$

$$f(f(4,w),w)=f(w\uparrow\uparrow\uparrow w,w)$$

![cat think](/assets\images\picmix.com_2250113.gif)

You might have an idea of what to do next.


### Other notations
These numbers are so big, they probably aren't relevant to our lives or even anything the universe. The only thing to do with them is compare them to other big numbers made by other people or in other math problems. So let us look at some other numbers and ordinal notations for fun.

[The Enormous TREE(3) - Numberphile](https://piped.video/watch?v=3P6DWAwwViU) by NumberPhile

[TREE(3) (extra footage) - Numberphile](https://piped.video/watch?v=IihcNa9YAPk) by NumberPhile

[TREE vs Graham's Number - Numberphile](https://piped.video/watch?v=0X9DYRLmTNY) by NumberPhile

The fast growing hierarchy is approximately the same as $$f$$, except the $$w$$ is replaced by a finite input to generate a large finite ordinal.

It's common to call $$\epsilon_0=\sup(w,w^w,w^{w^w}...)$$, and $$\epsilon_1=\sup(\epsilon_0+1,w^{\epsilon_0+1},w^{w^{\epsilon_0+1}}...), \zeta_0=\sup(\epsilon_0,\epsilon_{\epsilon_0},\epsilon_{\epsilon_{\epsilon_0}}...),$$. Notice that this is the same as the $$w,a,b,...$$ symbols we looked at earlier, but starting at $$s(x)=w^x$$ instead of $$s(x)=w+1$$. So now we can decode what they mean:

$$\phi(1,0)=\epsilon_0=w\uparrow\uparrow w=f(3,w)$$

$$\phi(1,1)=\epsilon_1=w\uparrow\uparrow 2w$$

$$\phi(2,0)=\zeta_0=w\uparrow\uparrow w^w$$

$$\phi(3,0)=\eta_0=w\uparrow\uparrow w^{w^2}$$

$$\phi(4,0)=w\uparrow\uparrow w^{w^3}$$

$$\phi(w,0)=w\uparrow\uparrow w^{w^w}$$

$$\phi(\phi(w,0),0)=w\uparrow\uparrow w \uparrow\uparrow w^{w^w}$$

$$\Gamma_0=\phi(1,0,0)=w\uparrow\uparrow\uparrow w=f(4,w)$$

$$f_{\epsilon_0}(n)=f(f(3),n)$$

$$f_{\Gamma_0}(n)=f(f(4),n)$$

These symbols seem scary in the video with many layers of recursion. But having come so far, we now see that $$\Gamma_0$$ is actually a pretty pathetic upgrade, only two steps past exponentiation.

Continuing with $$\phi$$ (you might recognize this from The Search for the Longest Infinite Chess Game):

$$\phi(2,0,0)=f(5,w)$$

$$\phi(3,0,0)=f(6,w)$$

$$\phi(w,0,0)=f(w,w)$$

Ackermann ordinal=$$\phi(1,0,0,0)=f(w+1,w)$$

$$\phi(1,0,0,0,0)=f(w^2,w)$$

$$\phi(1,0,0,0,0,0)=f(w^3,w)$$

Small veblen ordinal=$$\phi(\underbrace{1,0,...}_w)=f(w^w,w)$$

Large veblen ordinal=$$\phi(\underbrace{1,0,...}_{\phi(\underbrace{1,0,...}_{...})})=f(w^w+1,w)$$

$$\text{Tree}(n)\approx f(f(w^ww,w),n)$$

And the so called $$\overline{\text{Tree}}(n)$$ from the video is $$\approx f(f(w^ww,w)+1,n)$$

As you can see, the Tree function is so large that repeating it barely feels like an improvement.

Two long playlists explaining the fast growing hierarchy in detail: 

[Math: Extremely Large Numbers](https://piped.video/playlist?list=PLUZ0A4xAf7nkaYHtnqVDbHnrXzVAOxYYC) by Giroux Studios

[Ridiculously Huge Numbers](https://piped.video/playlist?list=PL3A50BB9C34AB36B3) by David Metzler

### multicollapse

So $$f$$ takes an ordinal $$x$$ and interprets it with $$S(x)=$$ repetition of $$x$$, resulting in a far larger ordinal $$f(x,w)$$. Now we can set $$S(x)=f(x,w)$$ and have a new function $$f(2,x,w)$$. So $$f(2,2,w)=f(f(w,w),w),f(w,3,w)=f(f(f(w,w),w),w),f(w,w,w)=f(f(...,w),w)$$. Remember how powerful just applying $$f(x,w)$$ once is. Now we can not only repeat $$f(x,w)$$ but do it transfinitely! We are definitely entering new territory.

But $$f(2,x,w)$$ needs to be given an input ordinal as well. Once that ordinal gets too large, we can use $$f(x,w)$$ or even another $$f(2,x,w)$$ to express it. And then we can have a third function $$f(3,x,w)$$ which applies $$f(2,x,w)$$ at each step, and then $$f(4,x,w)$$, each function transfinitely repeating the previous one. 

$$\underbrace{\left.\underbrace{f(f(f(...)))}_{\underbrace{f(f(f(...)))}_{...}}\right\}\left.f(2,f(2,...))\right\}\left.f(2,f(2,...))\right\}...}_{\underbrace{f(3,f(3,...))}_{...}}=f(4,w)$$




$$\Omega_1$$

$$\Omega_w$$

$$I,M$$


### Collapsing collapse


$$

### 





Links






[Ultimate Large Numbers List 2024 - The Biggest Numbers Ever!!!](https://piped.video/watch?v=5hfkzo_ojGE)

[Absolute Infinity - Numberphile](https://piped.video/watch?v=sq-ntG5Mcus)

[Infinity is bigger than you think - Numberphile](https://piped.video/watch?v=elvOZm0d4H0)
