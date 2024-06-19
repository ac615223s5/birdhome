---
layout: base
title: Wormhole
permalink: /wormhole
mainStyle: dark:bg-zinc-900
footerStyle: dark:bg-black !dark:border-0
headerStyle: dark:bg-zinc-950 !dark:border-0
services:
  - name: searxng
    icon: searxng.svg
    link: https://stellar.agew.tech
  - name: redlib
    icon: redlib.png
  - name: piped
    icon: piped.svg
  - name: proxitok
    icon: proxitok.png
  - name: proxigram
    icon: proxigram.ico
  - name: quetre
    icon: quetre.png
  - name: rimgo
    icon: rimgo.png
---
<a href="https://www.glitter-graphics.com/myspace/text_generator.php" target=_blank>
  <img src="{{"/assets/images/w.gif"|relative_url}}">
  <img src="{{"/assets/images/o.gif"|relative_url}}">
  <img src="{{"/assets/images/r.gif"|relative_url}}">
  <img src="{{"/assets/images/m.gif"|relative_url}}">
  <img src="{{"/assets/images/h.gif"|relative_url}}">
  <img src="{{"/assets/images/o.gif"|relative_url}}">
  <img src="{{"/assets/images/l.gif"|relative_url}}">
  <img src="{{"/assets/images/e.gif"|relative_url}}">
</a>

Select your destination
- Internal
  - [Blogs]({{"/"|relative_url}})
  - [Algorithm]({{"/algorithm"|relative_url}})
  - [Art]({{"/art"|relative_url}})
  - [Coding]({{"/coding"|relative_url}})
  - [Games]({{"/games"|relative_url}}){% for game in site.data.game-pages %}{%unless game.title=="Games"%}
    - [{{game.title}}]({{game.url}}){%endunless%}{%endfor%}
  - [Music]({{"/music"|relative_url}})
  - [Wormhole]({{"/wormhole"|relative_url}}) (You are here)
  - [About]({{"/about"|relative_url}})
  - [Credits]({{"/credits"|relative_url}})
  - [Images]({{"/images"|relative_url}})
- nieve space
  - [Birdhome](https://birdhome.stellar.agew.tech/) (You are here)
  - [Stellar search (SearXNG)](https://stellar.agew.tech/)
  - [Redlib](https://redlib.agew.tech/)
  - [Piped](https://piped.agew.tech/)
  - [Proxitok](https://proxitok.stellar.agew.tech/)
  - [Proxigram](https://proxigram.agew.tech/)
  - [Quetre](https://quetre.agew.tech/)
  - [Rimgo](https://rimgo.agew.tech/)
  - [Fairylands](https://fairylands.stellar.agew.tech/)
    - [Sorting](https://sorting.stellar.agew.tech/)
    - [Maze Simulator](https://maze-simulator/.stellar.agew.tech/)
    - [Speedforces](https://speedforces.stellar.agew.tech/)
    - [Solar System](https://SolarSystem.stellar.agew.tech/)
  - [Herriot](https://herriot.stellar.agew.tech/)

<div class="grid grid-cols-3 gap-8 w-64 border rounded border-zinc-500 border-solid p-8 shadow">
  {%for service in page.services %}
    <a href={%if service.link%}"{{service.link}}"{%else%}"https://{{service.name}}.agew.tech"{%endif%} class="text-center !text-inherit text-sm">
      <div class="h-16 content-center">
        <img src="/assets/images/services/{{service.icon}}" class="w-full">
      </div>
      {{service.name|capitalize}}
    </a>
  {%endfor%}
</div>

<style>
  @media (prefers-color-scheme: dark) {
    body {
      background: url({{"/assets/images/backgrounds/stars.gif"|relative_url}});
    }
  }
</style>