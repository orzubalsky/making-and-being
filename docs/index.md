---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

{% capture video %}
{% include_relative EDIT_THIS/video.md %}
{% endcapture %}

{% capture about %}
{% include_relative EDIT_THIS/about.md %}
{% endcapture %}

{% capture links %}
{% include_relative EDIT_THIS/links.md %}
{% endcapture %}

{% include template.html %}
