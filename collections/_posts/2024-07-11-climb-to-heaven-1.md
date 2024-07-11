---
author: nieve
layout: post
title: "Climb To Heaven Part 1: Small Transfinite Ordinals"
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

Anyway, now that we have $$\omega$$, we can apply $$s$$ again and get $$s(\omega)$$, then $$s(s(\omega)),s(s(s(\omega))),...$$.

But then we get stuck again. And here's the thing with transfinite ordinals, unlike the finite ordinals: if we just keep applying the same function over and over, we will eventually get stuck. In order to represent numbers beyond, we will have be more creative. There are several approaches to what to do next.

### Option 1: define a new symbol

Like we did before, we can just define a new ordinal. Let the first ordinal after $$s(s(\omega)),s(s(s(\omega))),...$$ to be $$\omega_2$$. Then we get $$s(\omega_2),s(s(\omega_2)),...$$, and let the first one after that be $$\omega_3$$. And if we keep doing this we get $$\omega_4,\omega_5,...\omega_{\omega},w_{w+1},w_{w_1},w_{w_{w_1}},...$$ and we are stuck again. So lets call the first one after that $$a_1$$. Then we get $$a_2,a_3,...a_w,a_{w_w},a_a,a_{a_a}$$. Then we can define another ordinal $$b_1$$. And so on...

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

## Repetition

The same way multiplication is like repeated addition and exponentiation is like repeated multiplication, we can have a fourth operation `tetration` that represents repeated exponentiation, and then a fifth operation representing repeated tetration, and so on. Lets call the $nth$ operation $*^n$.

So using this notation, $$w^{w^{w^{...}}}=w*^4w=w*^52$$.

$$\underbrace{w+w+w+...}_{w}=w^2$$

$$\left.\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{...}}}\right\}w=w^w$$

$$\underbrace{\left.\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{...}}}\right\}\left.\underbrace{w+w+w+...}_{\underbrace{w+w+w+...}_{...}}\right\}...}_w=w*^4 w$$

Starting from $$s(x)=x+1$$, we took advantage of our intution about everyday arithmetic to get expressions like $$w,w+1,w2,w^2,w^w$$. What if we started with $$s(x)=x+w$$ instead? Then $$2_{s(x)=x+w}=s(s(0))=w+w=w2$$ And $$w_{s(x)=x+w}=w+w+...=w^2$$. So by changing the $$s$$ function, we can represent larger ordinals using the same expression.

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
|$$w*^4(w+1)$$      |             |           |$$w+1$$

Starting with 1 and $$w$$, the ordinal $$x_{s(x)=x+w}=xw$$, and $$xw_{s(x)=xw}=w^x$$. You can see the pattern here, we are generating a higher level operator every time.

|$$x+1$$            | $$w^x$$ |$$w*^4x$$|
|-
|$$w*^4w=w*^52$$    |$$w$$    |$$2$$
|$$w*^4(w+1)$$      |$$w+1$$
|$$w*^4(w^w)$$      |$$w^w$$
|$$w*^4w*^4w=w*^53$$|$$w*^4w$$|$$3$$
|$$w*^5 w$$         |         |$$w$$


To get a better feel for these ordinals, you can watch [How To Count Past Infinity](https://youtube.com/watch?v=SrU9YDoXE88) by Vsauce.

### Back to the finite

Although it is possible to keep adding 1 to get any finite number, in reality we have limited patience to write stuff. We can use same techniques to represent very big finite numbers using less space. For example, there are 8,000,000,000 humans on earth. Instead of writing all those zeros, we can use a log scale, where $$log(1)=0$$ and $$log(x+1)=10x$$. Then $$8000000000=9.903_{s(x)=10x}$$. Going further, $$10*^410=\underbrace{10^{10^{10^{...}}}}_{10}$$, a large number indeed.

Further reading:

[From 1,000,000 to Graham’s Number](https://waitbutwhy.com/2014/11/1000000-grahams-number.html) by Tim Urban 

[Graham's Number on Numberphile](https://youtube.com/playlist?list=PLt5AfwLFPxWKZEG7KVg6HfdN2uWFLIB5q&cbrd=1) by Numberphile
- Notice that a string of $$n$$ arrows $$\underbrace{\uparrow\uparrow ...}_n$$ is equivalent to $$*^{n+2}$$.

[Beyond Infinity Number Comparison](https://youtube.com/watch?v=RJS3Z2DYEO4) by Reigarw Comparisons
- Everything after graham's number is wrong

[Ultimate Large Numbers List 2024 - The Biggest Numbers Ever!!!](https://youtube.com/watch?v=5hfkzo_ojGE) by Douglas Shamlin Jr.
- up to 1:06:10, stuff after that will be covered in part 2
- Also, this video is so slow, it might be best to skip around and/or watch at 6-10x speed...

[The Search for the Longest Infinite Chess Game](https://youtube.com/watch?v=b-Bb_TyhC1A)