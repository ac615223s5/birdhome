---
layout: base-nowrapper
title: Images
permalink: /images
---

{%- for img in site.static_files-%}
  {%- if img.extname==".png" or img.extname==".jpg" or img.extname==".jpeg" or img.extname==".webp" or img.extname==".ico" or img.extname==".svg" or img.extname==".gif" -%}
    <img src="{{img.path | relative_url}}" class="h-40 max-w-full inline">
  {%- endif -%}
{%- endfor -%}