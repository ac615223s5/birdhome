---
date: 9999-01-01
title: How to upscale movies using frame generation
tags: discussion
---

You can use frame generation/interpolation to upscale your videos and make movement appear more smooth.

Requirements
- A computer connected to a monitor/TV. Not some garbage on a smart TV.
- The video as a playable file. Not some streaming service that only lets you access videos in their proprietary app.
- A powerful graphics card from Nvidia.
  - Nvidia 3060 is more than enough for 1080p resolution. 3080 or stronger is needed for watching 4k videos on a 1440p monitor. For 4k video on a 4k monitor, you will need 4080 or above.
  - Sadly, AMD cards will be about 1.5x weaker than you'd normally expect relative to nvidia due to software support. Also, I don't know to set it up, you'll have to look on the [github repository](https://github.com/AmusementClub/vs-mlrt)
- Windows operating system. There might be a way on linux but I couldn't find clear instructions on github ☹
- Basic knowledge of the following
  - MPV, the [best](https://thewiki.moe/guides/playback/) video player (it's free).
  - [Python](https://www.python.org/) and [vapoursynth](https://pypi.org/project/VapourSynth/#files).

Instructions
1. Download `VSTRT-Windows-x64` from [here](https://github.com/AmusementClub/vs-mlrt/releases/tag/v15.2).
2. Extract the archive to your [vapoursynth plugins directory](https://www.vapoursynth.com/doc/installation.html#plugin-autoloading)
3. Store the following code as file somewhere and name it `rife-upscale.vpy`:
{% highlight python %}

import vapoursynth as vs
import sys
sys.path.append("C:\Program Files\VapourSynth\plugins")
from vsmlrt import RIFE, RIFEModel, Backend

core = vs.core
clip = video_in

upscaleFactor=2
widescreenAspectRatio=False
screenHeight=1440
screenWidth=2560

dst_fps = container_fps*upscaleFactor

print(clip.format.id)
print(container_fps,dst_fps,display_fps)

if widescreenAspectRatio:
    crop=clip.height*(1080-816)/2/1080
    clip=vs.core.std.Crop(clip,top=crop,bottom=crop)

if dst_fps<=display_fps:
    fmt_fin = clip.format.id
    colorlv = clip.get_frame(0).props._ColorRange
    resize_scale=1
    resize_scale=max(clip.width/screenWidth,clip.height/screenHeight)
    if resize_scale>1:
        clip = vs.core.resize.Bicubic(clip, format=vs.RGBH, matrix_in_s='709',width=clip.width/resize_scale,height=clip.height/resize_scale)
    else:
        clip = vs.core.resize.Bicubic(clip, format=vs.RGBH, matrix_in_s='709')

    scale=1 #doesnt improve performance for some reason
    blockSize=32/scale
    paddingX=(blockSize-clip.width%blockSize)%blockSize
    paddingY=(blockSize-clip.height%blockSize)%blockSize
    clip=vs.core.std.AddBorders(clip,left=paddingX,top=paddingY)
    #print(clip.width,clip.height)

    clip = RIFE(clip, model=RIFEModel.v4_4, multi=upscaleFactor, scale=scale, backend=Backend.TRT(fp16=True, num_streams=2))

    clip=vs.core.std.Crop(clip,left=paddingX,top=paddingY)
    clip=vs.core.resize.Bicubic(clip,format=fmt_fin, matrix_s="709", range=1 if colorlv==0 else None)

clip.set_output()

{% endhighlight%}

4. In the file, change `screenHeight` and `screenWidth` to be the resolution of your display. Also, make sure the path in `sys.path.append` is your vapoursynth plugin directory.

5. `upscaleFactor` is set to 2, meaning it will double the framerate from 24 to 48. You can set it higher if you want and your graphics card is strong enough.

6. In your `input.conf` file for mpv, add this line: `KEYBIND vf toggle vapoursynth="PATH/rife-upscale.vpy"`. Replace `PATH` with the location of your `rife-upscale.vpy` file. Replace `KEYBIND` with whatever key you want to press to enable frame interpolation.

7. Open your video in mpv and press the keybind you chose.

