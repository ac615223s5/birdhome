---
layout: page
title: Art
permalink: /art
images:
  - path: "pages/art/1.jpg"
  - path: "pages/art/2.jpg"
  - path: "pages/art/3.jpg"
  - path: "pages/art/4.jpg"
  - path: "pages/art/5.jpg"
  - path: "pages/art/6.jpg"
---

## Mine

{% for image in site.static_files %}
    {% if image.path contains 'pages/art' %}
<img src="{{image.path | relative_url}}" alt="image" />
    {% endif %}
{% endfor %}

-

## Not mine

...