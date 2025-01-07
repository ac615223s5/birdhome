---
title: Sysadmin confusion (I hate email)
tags: internal-news
comments: 
---
<details markdown="1">

<summary>warning: boring</summary>

I never liked email but now I truly know how horrible it is.

With the recent [cock.li](https://cock.li/) outages I decided to host my own email server and lighten the load a little. In my research I was recommended mailcow which seemed fine, just another docker stack. But then I saw that it requires 7x8gib of memory and 20x8gib storage for one account and I just thought, "what? You're gonna be recieving a few kb of text per day, not trying to crack your users' pgp encryption!" Other servers I checked also had similar requirements, and some of them have bloated features such as built in calendars or virus scanners to scan attachments (How is that the email server's responsibility??). Finally I found [maddy](https://maddy.email/). It's efficient but perhaps too much so, lacking any user interface. Like, I can understand not having a full web email client, but at least let users create an account without an administrator connecting to the server manually adding. It could be done with a single web form that costs almost nothing to run.

And then I started setting it up and realized how scuffed the technology is. Every other service and and messaging app works fine using on port 443. But email is such a spoiled child that it needs 4 ports, coupled with SPF, DKIM, DMARC, and other DNS crap for authentication. All of this really should just have been handled inside an https connection.

Also, don't expect to send any email from your server because most recipients' email provider (such as gmail) will simply block it (it won't even show up in the spam filter).

After some confusion I managed to get it running. I'm going to keep it private for myself. It's safe to say that email should never be used for sharing confidential information. Your messages are NOT end to end encrypted unless you use pgp which still does not protect the metadata. Communicate over another platform such as matrix when you can help it. And obviously don't use email to store documents or send files to yourself or send yourself future reminders lol. Get yourself some proper software for that.

Also, I now use [acme.sh](https://github.com/acmesh-official/acme.sh) to handle TLS for all my websites. It was easy to set up, no more messing around with various certbot tutorials that don't work.

Also, if you noticed several hours of downtime in ~~the past month~~ November, that's because the laptop's power brick spontaneously stopped charging until it was replugged. Now that I've replaced it with a WORKING one it should not happen any more.
</details>