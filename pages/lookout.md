---
layout: base
title: Map
permalink: /lookout
---
<div class="absolute inline-block w-3/5 right-0">
  {%include themed-image.html src1="/assets/images/decorations/birds-flying-on-white-590836565.png"
  src2="/assets/images/decorations/a50f9a671f88ba17e5783b980fefacdafc61ec14.png"%}
</div> 

<a href="https://www.glitter-graphics.com/myspace/text_generator.php" target=_blank>
  <img class="inline" src="{{"/assets/images/l.gif"|relative_url}}">
  <img class="inline" src="{{"/assets/images/u.gif"|relative_url}}">
  <img class="inline" src="{{"/assets/images/n.gif"|relative_url}}">
  <img class="inline" src="{{"/assets/images/a.gif"|relative_url}}">
</a>

You can see the world from here.
- [Internal](({{"/"|relative_url}}))
  - [Blogs]({{"/blog"|relative_url}})
  - [Algorithm]({{"/algorithm"|relative_url}})
  - [Art]({{"/art"|relative_url}})
  - [Coding]({{"/coding"|relative_url}})
  - [Games]({{"/games"|relative_url}}){% for game in site.data.game-pages %}{%unless game.title=="Games"%}
    - [{{game.title}}]({{game.url}}){%endunless%}{%endfor%}
  - [Music]({{"/music"|relative_url}})
  - [Lookout]({{"/lookout"|relative_url}}) (You are here)
  - [Credits]({{"/credits"|relative_url}})
  - [Images]({{"/images"|relative_url}})
- [nieve space](https://stellar.afs.ovh)
  - [Birdhome](https://birdhome.stellar.afs.ovh/) (You are here)
  - [Video Hosting (Peertube)](https://vid.stellar.afs.ovh/)
  - [Status Monitor](https://status.stellar.afs.ovh/status/stellar)
  - Imports
    - [Stellar search (SearXNG)](https://stellar.afs.ovh/)
    - [Redlib](https://redlib.stellar.afs.ovh/)
    - [Piped](https://piped.stellar.afs.ovh/)
    - [Proxitok](https://proxitok.stellar.afs.ovh/)
    - [Proxigram](https://proxigram.stellar.afs.ovh/)
    - [Nitter](https://nitter.stellar.afs.ovh/)
    - [Quetre](https://quetre.stellar.afs.ovh/)
    - [Rimgo](https://rimgo.stellar.afs.ovh/)
    - [Scribe](https://scribe.stellar.afs.ovh/)
  - [Fairylands](https://fairylands.stellar.afs.ovh/)
    - [Sorting](https://sorting.stellar.afs.ovh/)
    - [Maze Simulator](https://maze-simulator/.stellar.afs.ovh/)
    - [Speedforces](https://speedforces.stellar.afs.ovh/)
    - [Solar System](https://SolarSystem.stellar.afs.ovh/)
  - [Herriot](https://herriot.stellar.afs.ovh/)

<style>
  main{
    position: relative;
  }
</style>