---
layout: post
title:  Transitions and Completions
date:   2015-06-24 21:51:25
categories: Heroku Github Pass
stylesheet: page.css
author: Brian Boyko
---

Well, I'm more or less done with the "feature set" of the site.  There are a couple of pages that have to be written - the privacy policy (which is basically, I don't keep any info but your e-mail and how much you donated), the security policy (SSL prevents most Man-in-the-middle attacks, and your CC data never hits my server - it goes directly to Stripe, the payment processor), and my list of projects - basically my digital resume and how it relates to why I'd be a good pro developer. 

I also need to move this site off of Github Pages onto Heroku.  I thought about just moving the donation page onto Heroku, but the more I thought about it, it's nice to have your entire codebase in the same place.  Whether or not this is a good decision, time will tell, but I think it's relatively easy, especially since a jekyll Heroku Button is available from [Jonas Brusman](http://jonas.brusman.se/2014/08/16/deploy-a-unicorn-powered-jekyll-site-to-heroku-with-a-single-button-click/). 

I also need to move from a "free" to "hobby" level server on Heroku. Right now, my Heroku node spins down after some lack of use. Which means that the progress bar erroniously reads "0" if no donations have been made recently.  I'll need to put in some keep-alive code, and upgrade so that I can use the node for more than 18 hours a day. (You never know when that big donation's going to come in from friends in Tauranga, NZ.)

As soon as this is done, I'll be ready to take donations.  Maybe even by July 4th. 

Hopefully. 