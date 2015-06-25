---
layout: post
title:  PostgreSQL and Ruby
date:   2015-06-22 15:45:25
categories: javascript
stylesheet: page.css
author: Brian Boyko
---

Today was a day of strange sensations and frustrations.  The Stripe backend code was written in Ruby, a language I have no familiarity at all in. (At least Javascript kinda looked like the C++ I attempted back in the 1990s). 

To really make the page work, I wanted to include a running total of donations. I figured this would have been something provided by stripe - but no - I would have to log every transaction manually. 

I thought about logging them to a CSV file, but the problem is - what happens when two people donate at the same time? Data corruption is no fun. 

So that meant installing a PostgreSQL database. 

Joy. 

PostgreSQL, actually, wasn't that difficult once I was able to access it via the terminal with psql.  I didn't need to do all that much. Create a table, and just gather e-mails and donations (mostly to write thank-you notes and keep track of unique donors.)

![Postgres](http://i.imgur.com/MxrHEIv.png) 

I can pretty much write whatever I'd like to get the data out of the database, but the trick was passing the information out of the Ruby-based backend program into PostgreSQL.  And since I didn't know Line One of Ruby, I needed expert guidance. 

![Ruby](http://imgur.com/fbtLx7zl.png)

[Jhass](https://github.com/jhass) over in #ruby on freenode had the patience of a saint, and we pretty much pair-coded (well, okay, it was mostly his ideas) and got the thing working, finally.  Now, running totals and progress-bars are possible. YAY!

![logs](http://i.imgur.com/lq6Rlfu.png)