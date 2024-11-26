---
title: December sysadmin nonsense (I hate email)
tags: discussion
comments: 
---

Click here to skip sysadmin ramblings

I never liked email but now I truly know how horrible it is.

With the recent [cock.li](https://cock.li/) outages I decided to host my own email server and lighten the load a little. In my research I was recommended mailcow which seemed fine, just another docker stack. But then I saw that it requires 7 gib of memory and 20gib storage for one account and I was like, what? You're gonna be recieving a few kB of text per day, not trying to crack your users' pgp encryption! Other servers I checked also had similar requirements, and some of them have bloated features such as built in calendars or virus scanners to scan attachments (How is that the email server's responsibility??). Finally I found [maddy](https://maddy.email/). It's efficient but perhaps too much so, lacking any user interface. Like, I can understand not having a full web email client, but at least let users create an account without an administrator connecting to the server manually adding. It could be done with a single web form that costs almost nothing to run.

And then I started setting it up and realized how janky the technology is. Every other service and and messaging app works fine using https on port 443, but email is so special it needs 4 ports. Couple that with SPF, DKIM, DMARC, and other DNS nonsense for authentication. This really should have just been handled inside the connection.

After some networking confusion I managed to get it running. It's safe to say that email should never be used for sharing confidential information. Your messages are NOT end to end encrypted unless you use pgp which still does not protect the metadata. Try to communicate over another platform such as matrix instead when you can help it. And obviously don't use email to store documents or send files to yourself or send yourself future reminders lol. Get some proper software for that.

## TLS

I now use [acme.sh](https://github.com/acmesh-official/acme.sh) to handle TLS for all my websites and it was easy to set up. No more messing around with various certbot tutorials that don't work.

## 
- christmas?
