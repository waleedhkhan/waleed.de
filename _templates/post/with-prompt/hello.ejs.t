---
to: input/posts/<%= h.getPostFileName(locals) %>.md
---
---
<%- include (`${templates}/_includes/front-matter.ejs.t`) -%>
excerpt: "<%= excerpt || "TODO: Write an excerpt" %>"
<% if (locals.tags.length) { -%>
tags: ["<%- tags.join('\", \"') %>"]
<% } -%>
<% if (locals.link_to) { -%>
link_to: <%= link_to %>
<% } -%>
<% if (locals.canonical_link) { -%>
canonical_link: <%= canonical_link %>
<% } -%>
<% if (locals.isDraft === "yes") { -%>
eleventyExcludeFromCollections: true
<% } -%>
hn_link:
---

<%- include (`${templates}/_includes/formatting.ejs.t`) %>
