---
author: nieve
---
Some news from the rest of the world

## Youtube injects ads server side
After months of attempts to prevent adblocker use, youtube has started experimenting with server-side ad injection. Since these advertisements are being directly added into the video data coming from youtube, current adblockers which block html elements or content coming from ad domains (well, ad domains other than youtube itself) will not be effective without blocking the video itself. Even videos downloaded or proxied through piped will have the ads contained in them. So yeah, that sucks.

## Google and Microsoft add artificial intelligence
Firstly, I avoid using 2 letter acronymns unless I am having a conversation with someone about a specific technical topic we are both experienced in. 


What happens next? For the first months after youtube decides to implement this feature, there will probably be many workarounds to trick youtube into not giving the ads. Maybe by switching to a video codec/resolution that is not supported yet, or finding some unintended API. Once these methods become too well-known and youtube finds out, they won't last long. We could also try pretending to be in russia, where advertisements can't be shown due to political reasons. This may or may not be successful, but in the end I wouldn't count on it.

At some point, it will be very difficult to obtain a video stream without ads. What can we do then? Well, ads embedded in the video have existed for a long time, in the form of sponsorships. So we might start using Sponsorblock to manually mark youtube ads in addition to the sponsored ads from the creator. After that, they might decided to randomize the position of the ads. Of course, it can't be *too* random, otherwise these ads can be detected by streaming two copies of the same video and removing any segments that change position. Worst case, they show the exact same ad in the exact same position for a particular video, but every hour each ad has a 1% chance of changing position or being replaced with another ad. That way, the video appears identical for anyone watching at the same time but changes too quickly for something like Sponsorblock.

Adding ads at random positions will probably mess up the flow and timing of many videos, and people will start getting interrupted mid-sentence with an ad, but why would youtube care about that? When this happens, we will have to start verifying the integrity of the videos ourselves. Building off sponsorblock, we could calculate and store a hash for every few seconds of video (maybe between every keyframe). Then, when someone watches a video, the program can check whether each checksum matches a known good (non-ad) hash and discard any foreign segments. If we use an 64 bit checksum for every 1 second segment, then 1 hour of video would take 28.8 kb*8 of video, which is very reasonable (in comparison, the video itself might have a bitrate up to 24mb/s). Still, it could cause some problems for an open source project funded by donations that is responsible for verifying millions of videos.

The next step for youtube would be to modify the actual video content to break our checksums. Of course this would be insane, massively increasing computing power and energy usage to reencode all the videos while ruining the video quality. If they're willing to do that, we could switch to fuzzy hashes or possibly incorporate segment matching based on neural networks.

Instead of trying to blend the ads into the video, what if youtube simply refuses to provide the rest of the video for the duration of the ad? Firstly, that would make ads very easy to detect, as you can skip forward in the video until stopped by an ad. Secondly, it would mean that anyone who reloads a video and tries to resume would have to wait through every ad up to that point all over again. Youtube videos have a buffer, and any part of the buffer past the ad would be already downloaded to your computer. So they would have to keep lowering the buffer speeds until it is just slightly above the video's bitrate. As someone who regularly watches videos at 3x or 4x speed, I would be one of the first ones affected. When they do that, we would have no choice but to wait a few minutes after opening the video for all the time alloted to ads to pass. However, we could still make a program to automatically download videos from subscriptions in advance, or download several videos in parallel.



