---
title: A cloud-based code snippet library with automation
---

I&#39;ve been thinking about this for a while but it only really gelled recently. I&#39;d like a way to write and store code snippets that a run against custom formatting and linting. I&#39;d also like to write tests against the code that will run on each change. These snippets could be grouped in whatever way and wrapped with additional code that makes testing simple. The snippets would be available, checked and tested, via API to be imported from anywhere. Groups of snippets could have an index of snippets along with their hash so checking for changes wouldn&#39;t require many individual HTTP requests. Maybe also an option to compose Markdown exportable Markdown documents using snippets.  
