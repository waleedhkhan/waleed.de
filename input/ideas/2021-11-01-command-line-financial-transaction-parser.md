---
title: Command line financial transaction parser
---

Somewhat in the vein of [plain text accounting](https://plaintextaccounting.org), I want a command line tool to take output CSVs from my banks and push them into a central ledger. It needs to figure out what transactions have already been imported, via ID if there is one or date + amount, and then prompt for a category. Similar to YNAB but stripped down and only stores locally. 
