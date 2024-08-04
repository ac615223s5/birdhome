---
author: nieve
date: 9999-01-01
title: Proxigram, Nitter, 
---
## Nitter
I'm hosting Nitter, even though it's technically [discontinued](https://status.d420.de/rip) since twitter started requiring an account to see anything. Still, all the more reason to set up my own. If you use this instance regularly, I would ask you to create a twitter account yourself and send me the login information to add to our pool (contact info is at the bottom of the page). That way, you help increase our capacity and still get to access twitter content without signing in.

## Proxigram

There's also a proxigram instance now, at [proxigram.agew.tech](https://proxigram.agew.tech/). Some resturants and organizations put all their information on instagram for some reason so now you can see it without an account. Remember how I didn't understand docker images? Well this time the image was [broken](https://codeberg.org/proxigram/proxigram/issues/42), so I had to build my own. Luckily, it's easy. From what I understand, I take all the commands I would normally run to start the program and put them in the Dockerfile in a specific format. Here's a decent tutorial: [Learn Docker in 7 Easy Steps](https://piped.agew.tech/watch?v=gAkwW2tuIqE).

## Matrix room

I set up a [room](https://matrix.to/#/#duckgalaxy:matrix.org) on Matrix. You can use it to post comments about my blogs or for other related discussion. 

I started using [vscodium](https://vscodium.com/) instead of vscode because apparently this is the version that's actually open source. It was easy to switch, I just copied over my settings and extensions folders and everything worked the same.



## Weird nitter issue (everything is breoik)
Nitter has an [issue](https://github.com/sekai-soft/guide-nitter-self-hosting/issues/13) that causes it to break every time the container is killed. I haven't looked into the code and don't know how to fix it but it should happen less now that pepperbox is on its own hardware and rarely has to restart. Also Piped has a strange problem with videos not playing. The video data is still being retrieved so it's probably not a problem with the backend or getting blocked by youtube, and I wasn't able to reproduce it in the development build so I don't know how to fix it. Check [github](https://github.com/TeamPiped/Piped/issues/3715) for more information. Also, proxigram is completely broken: [#55](https://codeberg.org/proxigram/proxigram/issues/55) [#53](https://codeberg.org/proxigram/proxigram/issues/53). London Bridge is falling down, falling down, falling down...

## Site retheming

Birdhome no longer uses the default Minima theme for Jekyll. While it's great for quickly setting up blogs, I want to embrace the process of decorating my personal website and making it look pretty.

## Pepperbox is born
After months of incubation inside a virtual machine, Pepperbox now runs on its own dedicated hardware! With 2 old processor cores, 8gB of memory, and 256gB of storage, it's not the most impressive system, but on the bright side it does have its own ~~battery~~ uninterruptible power supply. And hey, how much memory did you have as a baby? 

By the way, my server is called Pepperbox because when I was installing linux I set my user account name to `pepper` and then Virtualbox automatically appended `box` to it as the name of the system.

> Does that mean you're going to start using linux now

Nope. Linux's drivers for the touchpad are still considerably worse than microsoft precision drivers, and touchscreen support is even worse.

With its own body, Pepperbox can have much higher uptime and won't be taking up my graphics card's VRAM if I want to run a big neural network. It'll also no longer be a [container of containers](https://piped.agew.tech/watch?v=PivpCKEiQOQ&t=0).

More updates to come. Y'all have a good day now.