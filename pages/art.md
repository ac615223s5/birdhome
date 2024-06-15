---
layout: page
title: Art
permalink: /art
images:
  - path: "/assets/images/art/1.jpg"
  - path: "/assets/images/art/2.jpg"
  - path: "/assets/images/art/3.jpg"
  - path: "/assets/images/art/4.jpg"
  - path: "/assets/images/art/5.jpg"
  - path: "/assets/images/art/6.jpg"
---

## Mine

-

{%- for image in page.images -%}
![image]({{image.path | relative_url}})
{%- endfor -%}

-

## Not mine

...