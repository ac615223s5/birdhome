---
author: nieve
title: Proxy behind a reverse proxy behind a reverse proxy
tags: discussion
comments: https://matrix.to/#/!MYnIXfdNoeowBWxAvO:matrix.org/$6wYXuKubeFrcbp2It3ueBVdK4Gj3cljlY02o7Q0xXjg
---

As you know, websites like Youtube are a mess, requiring an adblocker, custom filters, and several extensions just to make it usable. So instead you come to me, who retrieves the content and packages it up for you without all the bloat. From Youtube's perspective, all these requests are coming from my server Pepperbox, reducing the information they can have about you. Essentially, pepperbox is acting as your ✨proxy✨.

But youtube and twitter want individual users who they can track and send ads to, not servers that send a lot of requests. In order to avoid getting blocked, pepperbox must now spread the requests over several of its own proxies. In other words, Piped and Nitter users are a group of users pretending to be an individual pretending to be another group of users. Wonderful.

Youtube might not know who you are, but your IP address is still visible to me. And in order to find my website, you have to know my IP. And our internet service providers can see both of our IPs communicating with each other. So you route your requests through a proxy, and I set up a reverse proxy, which is basically a proxy for the server. And you use your proxy to connect to my reverse proxy, and I connect to your proxy through my reverse proxy. Now you can't see me, and I can't see you, and we're both happy.

![proxy reverse proxy](/assets/images/2423p0.jpg)

If you're connecting over Tor, you'll be using a series of 3 proxies instead of a single proxy. And if I decided to host a TOR hidden service, my "reverse proxy" would be another 3 jumps.

That's not all. In order to access my reverse proxy, you provide my domain to your DNS server, which points you to my reverse proxy's IP address. Then I forward my reverse proxy's port 443 over my reverse proxy's internet service provider, and you connect to that IP and port through you or your proxy's internet service provider.

There are several services on Pepperbox, each with their own subdomain. And your DNS will point all of them to port 80 of my reverse proxy, which sends all of them to the same port on Pepperbox. All this goes through my second reverse proxy running locally, which reseparates the traffic for each service into their own port.

Actually, some services have multiple subdomains too. For example, Piped has different subdomains for its frontend and backend, all managed by yet another reverse proxy ^v^

So piped is really a proxy behind a reverse proxy. Which is really a proxy behind a proxy behind a reverse proxy. Which is really a proxy behind a proxy behind a reverse proxy behind a reverse proxy...

![proxyproxyproxy](/assets/images/oacuewifmyso.png)

All of this is layer 4 and above. The proxies are connected through a series of routers. And these routers are connected through relays. And the relays are connected through cables. And your router is connected to your network card using ethernet, which then connects with your motherboard and processor through PCIE. All so you can watch this video.

<iframe src="https://piped.stellar.afs.ovh/watch?v=lTonHRerMC4" class="w-full aspect-video" allowfullscreen>