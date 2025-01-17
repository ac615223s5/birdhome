---
author: nieve
title: "Weather Report: Clear Skies (+ New Domain + Early November News)"
tags: internal-news external-news
comments: https://matrix.to/#/!MYnIXfdNoeowBWxAvO:matrix.org/$BG65SEPMYzDqdNMf7nYVNpyrkuSYsotjh37xwF-1B0A
---
Hey everyone, happy ~~September~~ ~~October~~ November. I set up scribe, at [scribe.stellar.afs.ovh](https://scribe.stellar.afs.ovh/). Also, I made a new dark [theme](https://codeberg.org/nieve/private-frontends-manager/src/branch/main/theme-1-piped.css) for piped. And now, the weather:

Nieve Space has always been covered by fog and overcast, but today we are 100% cloud-free! That's right, I did a little dance and blew away the rain. Also, I removed cloudflare tunnel and replaced it with my own tunnel running on a microsoft azure VPS. Now you might be wondering why I removed cloudflare only to use another big corporation, but I don't have control over my router and would rather not expose my network even if I could forward ports. So that means either using an external datacenter or TOR (as a hidden service). The problem is that cloudflare was the one handling decryption for HTTPS traffic, so it can see everything. In the new setup, TLS is terminated locally, meaning that the Azure server is simply passing along your encrypted HTTPS traffic for decryption on my local machine. Also, I am no longer forced to use cloudflare's domains or nameserver (DNS).

As for the tunneling software, I initially used [boringproxy](https://boringproxy.io/) but unfortunately tunnels were randomly failing and the software often had to be manually restarted. I then looked into [frp](https://github.com/fatedier/frp). Finally, I decided to use [rathole](https://github.com/rapiz1/rathole) for its simplicity, reliability, and low resource usage.

I also set up a tunnel for SSH so I can access my server if anything goes wrong while I'm away.

Unfortunately, the VPS costs money, and the revenue of Nieve space comes out to a grand sum of zero. I have enough free azure credit to last for a couple of years, and we'll see what happens after that. May the sun shine forever.

Speaking of which, what better time to set up a weather station? I created a [status monitor](https://status.stellar.afs.ovh/status/stellar) where you can check the uptime and see whether everything's working.

## Weird nitter issue 

Nitter has a weird [issue](https://github.com/sekai-soft/guide-nitter-self-hosting/issues/13) that causes it to break every time the container shuts down ungracefully. I haven't looked into the code and don't know how to fix it, but it shouldn't happen very often. Also Piped has a strange problem with the video player. The video data is still being retrieved, and it's not getting blocked by youtube; the videos are just not playing. Not to worry, I've got a [pull request](https://github.com/TeamPiped/Piped/issues/3715) that'll get things fixed up soon. Also, proxigram is completely broken: ~~[#55](https://codeberg.org/proxigram/proxigram/issues/55) [#53](https://codeberg.org/proxigram/proxigram/issues/53)~~ I fixed this too. And proxitok is [not working quite right](https://github.com/pablouser1/ProxiTok/issues/213) either 😦. 

## Redlib filters

Redlib now supports [default filters](https://github.com/redlib-org/redlib/pull/146), courtesy of yours truly. We will be making heavy use of this feature on our instance, mostly to block popular subreddits focusing on negativity or suggestive images. Now this might raise several concerns, the first being "Why should you get to decide what content to censor?" but these filters only affect r/popular or r/all, where the posts are already arbitrarily selected by Reddit. What about educating yourself on important political or controversial topics? Sure, but that should be done through conscious research from reputable sources, not some random meme you happen to see while scrolling the frontpage. Of course, you can modify your personal filter list in the settings if you don't like it.

The full blocklist can be found [here](https://codeberg.org/nieve/private-frontends-manager/src/branch/main/redlib-blocklist-generator.py). Suggestions are welcome.

Breaking news: this post took so long to come out that there is more stuff to talk about.

## Forever domain

We have moved to a new and hopefully permanent address, [https://stellar.afs.ovh](https://stellar.afs.ovh). Technically, the top-level domain is just afs.ovh, but all of nieve space will be under stellar.afs.ovh. I'm not going to worry about having some cool domain name when there is an infinite space of infinite levels of subdomains.

When I was first setting up, I happened to have a 1 year trial on agew.tech. But now I want something more permanent, especially if I decide to share these websites publicly. However, most of the free domain services are shut down and/or untrustworthy, and https://nic.eu.org/ hasn't responded to my request after half a year. I also had problems with [dedyn.io](https://dedyn.io/) (shut down), [afraid.org](https://freedns.afraid.org/) (doesn't allow you to create subdomains), and [duckdns](https://www.duckdns.org/) (has [problems](https://community.letsencrypt.org/t/unable-to-create-wildcard-certificate-on-duckdns/190287) with ssl certificates). As for paid services, many of them required phone verification or government ID, or some other crap.

So ovh.com was the cheapest place I could find that worked. The domain costs 3$/year which isn't a lot, but again there is zero revenue. 

## Domestic video hosting

My videos are now hosted locally at [https://vid.stellar.afs.ovh/c/nieve1/videos](https://vid.stellar.afs.ovh/c/nieve1/videos). It's a good alternative to Youtube without ads or copyright strikes. You can also download the original video in full quality/framerate and leave comments without a google account. I will not be hosting other people's videos due to the high storage usage.

## Toothbrush update

I recently made a post about toothbrushes. I just meant to discuss a cool new invention (partially inspired by the youtube channel [Technology Connections](https://www.youtube.com/channel/UCy0tKL1T7wFoYcxCe0xjN6Q)), but looking back, it sounds a bit like a product review or advertisement and doesn't sit right with me. I will fix it soon; sorry about that.

Some news from the rest of the world:

## Firefox adds vertical tabs

Firefox added an option showing tabs in a vertical list. That means the tabs will be listed in a panel on the side of the browser rather than the top. That's great; it will make better use of the screen space while fitting in with my vertical taskbar and birdhome's vertical navigation panel. 

~~Except... the top panel (also known as the "chrome") didn't get any smaller. There's still 3 rows: the bookmarks, the address field, and the one with the exit button. But now the sidebar is just taking up more space for nothing. How did that get messed up...~~ They changed it 🙂.

Huh, I guess that's it. There's not much news where I have anything unique to add.

## Personal

All the trees suddenly got colorful! I hope you all have gotten a chance to play in the leaves and enjoy the autumn. I've been making good progress with my swimming and recently finished learning Rust. I've also acquired a tablet and started drawing more. Since it's all digital, I feel like I've been able to draw more comfortably without fear of messing things up.

But to be honest, the last few weeks have been quite stressful, and despite my efforts, I am going through some sad girl times. I'll keep trying. Maybe I can find something fun to do this weekend, and I hope you do too. See you next time.