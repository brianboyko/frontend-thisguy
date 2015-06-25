---
layout: post
title:  Pulling some 'strings'
date:   2015-06-20 22:10:25
categories: javascript stripe
stylesheet: page.css
author: Brian Boyko
---

I got Stripe Checkout working, but for the life of me, I couldn't figure out how to get Stripe Checkout working with more than one potential amount.  It's very easy for you to put a button on your web site with Stripe Checkout which charges a fixed amount - but not one which charges an amount based on user input. 

For the longest time I was beating myself over the head trying to change the value of the "amount=" attribute in the script that calls Stripe Checkout.  That's when I realized I had it all backwards, like the man who moans about locking his keys in his car - and his car is a convertable with the top down.  

I could just dynamically generate the script *around* the amount the user enters.  That is, I grab a value from the user for the amount, then call a function using a simple "onClick=function();" that calls a Javascript that sets the .innerHTML of a div to the fully formed form.  
Taking this track also means that I don't have to worry about the user forgetting to enter an amount - or paying the wrong amount, because they'll be able to visually confirm 
BEFORE the Stripe Checkout pops up.  

As the Kiwis say, I'm chuffed!  Proper chuffed! 

All of this is very simple string manupulation and concatination.  You know how to concatinate a string in Javascript>  It's +. Just +. But that plus can work wonders. 

This means I don't need to use the complex custom stripe form at all, saving a lot of headaches.  

I want to thank the people in #stripe on Freenode - they didn't come up with this solution but they helped me see it by batting back my own wacky ideas at me. Now... to **PULL THE STRINGS!!!**

---

Update: Well, that didn't work. Quelle suprise.

Here's the problem. I was able to do exactly what I thought I could. I can generate a string containing the exact form with the right amount.  And I can set a div's "outerHTML" or "innerHTML" to become that string.  The problem is that it won't execute the script inside that form, because the document's already loaded... meaning no button. 

Hmm, maybe there's a way to tell Javascript to execute any script in an element... 

---

Hmm.  I never did figure out a solution to that problem, but instead I found some other code that I could deploy on Heroku. [This code](https://github.com/thoughtpolice/heroku-stripe-donate), written by [Austin Seipp](https://github.com/thoughtpolice) is actually designed for donation forms - it allows users to enter in any amount they wish.  

There is still some hacking to do on it - I'd like to add some buttons for pre-determined dollar amounts (mostly for mobile users.)  But this is a much simpler problem. 