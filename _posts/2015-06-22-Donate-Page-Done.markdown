---
layout: post
title:  Donate Page is Done
date:   2015-06-22 06:29:25
categories: javascript
stylesheet: page.css
author: Brian Boyko
---

Well the donate page - arguably the hardest part of this whole mess - is done. Yay!

![Image](http://i.imgur.com/rAsrKG7.jpg)

I got it working on my own, but I was using onclick="function()" events. There's nothing wrong with that, but it's considered the "incorrect" way to do things, according to the principle of "unobtrusive Javascript" - i.e., "don't put javascript in your HTML code."

I had a bit of trouble with "addEventListener" events - the correct way - as the code was executing before I pressed the button.  On Freenode, in ##programming, [Twey](https://github.com/Twey/) ended up helping me figure out that doing .addEventListener("click", function()); executes the function right away, so if I wanted it to work, I had to addEventListener("click", function);

Of course, since I needed to pass an integer, and the only way I knew how to do that was with parentheticals, I was out of luck.  But apparently, if you use a function to create a function, then that function won't get executed immediately. 

In the meantime, the donate page is up, and of right now you can test it out with the fake Visa card in test mode: just enter 4242 4242 4242 4242. 

There's a couple of other things I need to get done: setting up e-mail responses to donations, getting facebook and twitter integrated, making the projects page, figuring out how to do a progress bar, etc.  
But you know what?  That should be a breeze.  What could possibly go wrong?

![What could possibly go wrong](http://i.imgur.com/elI0roy.gif)


