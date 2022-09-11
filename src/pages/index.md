---
layout: layouts/index.tmpl.js
url: /
title: Waleed H.Khan 
subtitle: I Build stuff for the internet
description: Software engineer based in Berlin, involved in designing and operations of large-scale e-commerce systems for more than a decade
tags: index
---

<header>

# [{{title}}](/)

{{subtitle}}

</header>

<section>
Hey there! My name is Waleed. And this is my little home on the internet.
Sometimes I write about stuff here, but more often I don't to be honest.
I'm always up for a chat though, so feel free to get in touch!
</section><section>

## Writing

<nav>{%- for post in search.pages("post") | reverse -%}
<a  href="{{post.data.url}}">{{ post.data.title }}</a>{%- if loop.index !== loop.length -%}<br />{%- endif -%}
{%- endfor -%}</nav>

</section><section>

## Connect

I'm always up for a chat though, so feel free to get in touch! [LinkedIn](https://www.linkedin.com/in/{{author.x.social.linkedin}}) and [Github](https://github.com/{{author.x.social.github}}). If you like the content I write on my blog you can consider [subscribing](/subscribe/) to my feed. 

## Learn more
Learn more [about](/about/) me or check what i am working on [now](/now/) or check out the tools i [use](/uses/)

</section><section>

## Site

My website is open-source published on [GitHub](https://github.com/{{author.x.social.github}}/{{site.x.domain}}). You can find an overview of all modules I use across the website in my [Styleguide](/styleguide/). Check out my [Colophon](/colophon/) to learn how I created this site. In the [Privacy Policy](/privacy/), you will find information on how this website handles your data. The [Legal Notice](/legal/) includes other important information.

</section>

{% include "links.njk" %}
