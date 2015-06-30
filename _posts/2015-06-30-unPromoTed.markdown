---
layout: post
title:  unPromoTed
date:   2015-06-29 10:44:25
categories: imgur javascript
stylesheet: page.css
author: Brian Boyko
---

I'm mostly a lurker on Imgur, though I was there from its beginnings as a humble image filesharing service to the community that it is today.  

I'm also not a fan of promoted content.  I mean, it was *annoying* when it was just those stupid ads for Ted 2; but the ads for the Scream TV show are tasteless.  I really don't want to see them. 

Don't get me wrong - Imgur can run ads if it wants, but when it disrupts the user "flow" - when advertising masquerades as content - that's what I have a problem with.  

Imgur succeeds because it shows you the content vetted by other members of the community.  When stuff comes up that hasn't been vetted by members of the community - when you can "jump the queue" by spending money, you're going to get crap. Because, if it wasn't crap, they wouldn't have to pay for it.  

There's a right way and a wrong way to do viral marketing - MTV's doing it the wrong way - and imgur is helping them do it the wrong way.  

Anyway, I thought it would be really easy to check to see if a post was a "promoted post" and if so, replace the content of the post with a short message. 

It was tricky, but I was able to get it done this morning.  

[You can download it (or fork it!) on Github!](https://github.com/brianboyko/unPromoTed)

I also made the announcement to imgur in true imgur fashion - with an image. 

![unPromoTed](http://i.imgur.com/lX1Lhoc.jpg)

---

# [unPromoTed](https://github.com/brianboyko/unPromoTed)

[unPromoTed](https://github.com/brianboyko/unPromoTed) is a simple user script for Chrome which replaces promoted images on Imgur with a small text script. 

It only runs on pages on imgur.com domain, and checks to see if the page contains a meta tag with an attribute of "content" which must equal "promoted."  

If this is true, unPromoTed replaces the imgur with a notification that the content was removed by the script.  

## About the author

The author of this script is Brian Boyko, and he's currently crowdfunding the money to go to code camp - and he'll pay the money he raises forward after graduation. Find out more at [http://sendthisguytocodecamp.com](http://sendthisguytocodecamp.com).

## Installation

1. Download the zip file with the little cloud icon raining the little downvote that you see over on the right there. It'll download "unPromoTed-master.zip"

2. Unzip that file wherever you feel comfortable, but it should be someplace that won't get deleted or overwritten.  

3. Go to <a href="chrome://extensions">chrome://extensions</a> in your Chrome browser. 

4. Click the checkmark for "developer mode" so that you can install this extension. (later on, I'll get this in the Chrome Web Store, but for right now, this is an experimental extension). 

5. Drag the unPromoTed-master *folder* you unzipped to the extensions page, and approve permissions.  

---