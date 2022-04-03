---
to: input/ideas/<%= h.getPostFileName(locals, false) %>.md
---
---
title: <%= title %>
<% if (locals.link_to) { -%>
link_to: <%= link_to %>
<% } -%>
---

<%= content %>
