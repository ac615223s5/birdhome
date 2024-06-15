---
author: nieve
---
Abstract art using intersecting lines that divide the image into many sections.

The program first generates random lines and finds their intersections. 
Then, it converts the lines and intersections into a graph, sorting each edge in clockwise order.
Next, it starts at an unvisited node and traverses the graph, choosing the rightmost edge every time. When it arrives back at the starting location, a loop has been formed.
These loops form the sections of the image, which are then colored.


[Make your own](https://fairylands.stellar.agew.tech/widgets/2021-04-12-abstract-art.html)

## Gallery
{% capture images1 %}

{% include image.html src='/assets/images/abstract-art-1.svg' alt="preview" %}
{% include image.html src='/assets/images/abstract-art-2.svg' alt="preview" %}
{% include image.html src='/assets/images/abstract-art-3.svg' alt="preview" %}
{% include image.html src='/assets/images/abstract-art-4.svg' alt="preview" %}
{% include image.html src='/assets/images/abstract-art-5.png' alt="preview" %}
{% include image.html src='/assets/images/abstract-art-6.png' alt="preview" %}

{% endcapture %}

{% include gallery.html cols=4 images=images1 %}
