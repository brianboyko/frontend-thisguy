---
layout: post
title:  Or, alternatively, I could *not* do that... 
date:   2015-06-25 00:45:25
categories: Heroku Github Pass
stylesheet: page.css
author: Brian Boyko
---

I've had a bit of trouble getting Jekyll running correctly on Heroku.  Don't get me wrong - I can get Jekyll up and running but for some reason it is not using Sass to create the CSS pages. I'm also getting an error that says, no joke, "A really lowlevel plumbing error occured. Please contact your local Maytag(tm) repair man." and when something *that* crpytic comes up, maybe it's time to rethink my approach.

Then I thought - wait a minute. I've got a Dreamhost account. The domain's registered on dreamhost. And I can even probably get Jekyll and Git running on Dreamhost with SSH/SFTP access.  Worst case scenario, I can just build locally and deploy the _site that Jekyll creates. 

This is the easy way, sure, but the easy way's... well, easier, and has all the benifits of the hard way. 

So yeah, why re-invent the wheel?

If I do this right, I'll be able to push my code both to my live site and the GitHub repository at the same time. 

If I do it wrong, well, you won't be reading this message. 