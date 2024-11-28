---
title: Passwords, passkeys, and 2 factor authentication
tags: discussion
comments: https://matrix.to/#/!MYnIXfdNoeowBWxAvO:matrix.org/$-zDgtWk1FTxCwg-bmS8VmYTspGfuOg1NxZFsI0jEObI?via=matrix.org&via=envs.net
---

We all know we shouldn't use the same password for different accounts. If one service doesn't handle your password properly and gets compromised, then that password can then be used for your accounts on other services. Instead, you take your primary password and derive a secondary password from it, then use that secondary password for the service. That way you prove to the service that you know your primary password without sending the primary password to them.

Effectively this is what a password manager does. It uses your master password along with some public data (your encrypted database) and derives the unencrypted service-specific password.

Passkeys take this a step further and derive a different secondary password not just for every service, but every time you log in to that service. So if your secondary password gets compromised once, it can't be used to log in again.

2 factor authentication does the same thing as passkeys but worse. When you set it up, you store a new password inside your phone or authenticator app. This password is then used to derive new 6 digit codes every minute which you then have to enter manually. Since the code is so short, you still need a regular password to prevent brute force attacks.

Passkeys make 2 factor authentication obsolete. Also, authenticator apps aren't really a second "factor". The password is something you know, the 2fa is something you have... that "thing" being some software storing another password haha.

Anyway notice how none of this has anything to do with biometrics, contrary to how big companies keep advertising passkeys as a way to log in using your face. When using biometrics, you are simply setting your master password to be a measurement of your face... the same face you walk out into public with for everyone to see... yeah, unless you plan on wearing a ski mask or wiping your fingerprints off everywhere you go, not a great idea for anything important.

## Choosing a password

If you are going to be memorizing and typing the password yourself, then choose a list of several random words separated by spaces. For most humans, a single word such as "cat" is easier to remember than "P" or "9", yet there are thousands of words vs only 26 letters. So words are a more efficient way storing information in the brain, taking advantage of all the memorization you already did while learning a language. Technically, images and scenes are [even more efficient](https://en.wikipedia.org/wiki/Method_of_loci), but then you'll have to convert it back into words at some point to type out. With practice you'll be able to type out a couple words/second, much faster than random letters or punctuation.

Use simple words you know how to spell. Do not pick obscure words from languages or topics you are unfamiliar with. The two words "heard clear" are easier to remember, faster to type, and contain more entropy than "anthropogenic". Do not use dashes as separators, this kills your typing speed. Do not try to "trick the attacker" by intentionally adding typos or capitalization. Would you rather remember the exact position and value of 3 typos or just one more word?

If you are on a phone, it's probably best to use only numbers. I've found that in the same time, I can type either one word on the tiny phone keyboard or 4 digits on the numpad while making far fewer typos.

For passwords you will not be memorizing, just choose a string of 50 random uppercase and lowercase letters, numbers, and symbols for 256 bits of security.