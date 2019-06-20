---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

{% capture video %}
{% include_relative video.md %}
{% endcapture %}

{% capture about %}
{% include_relative about.md %}
{% endcapture %}

{% capture links %}
{% include_relative links.md %}
{% endcapture %}

{% include template.html %}
