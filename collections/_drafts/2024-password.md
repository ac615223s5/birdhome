---
title: December sysadmin nonsense (I hate email)
tags: discussion
comments: 
---
## Difference between password, passkeys, and 2 factor authentication

Some random thoughts about passwords:

We all know we shouldn't use the same password for different accounts. If one service doesn't handle your password properly and gets compromised, then that password can then be used for your accounts on other services. Instead, you take your primary password and derive a secondary password from it, then use that secondary password for the service. That way you prove to the service that you know your primary password without sending it to them.

Effectively this is what a password manager does. It uses your master password along with some public data (your encrypted database) and derives the unencrypted service-specific password.

Passkeys take this a step further and derive a different secondary password not just for every service, but every time you log in to that service. So if your secondary password gets compromised once, it can't be used to log in again.

2 factor authentication does the same thing but worse, since you have to type in the code manually. Since the code is so short you need to enter yet another password. But passkeys make them redundant. The distinction between having two "factors" never made sense to me. The password is something you know, the 2fa is something you have... that "thing" being an app containing another password haha. 

Anyway notice how none of this has anything to do with biometrics, contrary to how big companies keep advertising passkeys as a way to log in using your face. When using biometrics, you are simply setting your master password to be a measurement of your face... the same face you walk out into public with... yeah, unless you plan on wearing a ski mask or wiping your fingerprints off everywhere you go, not such a great idea (for anything important).
