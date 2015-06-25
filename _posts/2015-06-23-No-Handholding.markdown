---
layout: post
title:  No Handholding with PG and Sinatra
date:   2015-06-23 20:50:25
categories: sinatra ruby json
stylesheet: page.css
author: Brian Boyko
---

As it turns out, it took twice as long to figure out how to get the donation data out of the database in a usable form than it did to get the data in there.  

Allow me to explain - Heroku is an app development platform - NOT a webserver. This isn't Dreamhost, this is just raw iron running raw code.  So while I could login to the database itself and run a query to export to a CSV file or somesuch, I would have to do this manually every time I wanted to update the progress bar. 

After researching Ruby's file/io stuff, I got to the point where I could create a little program that automated the CSV file generation, but the file it created wasn't actually hosted anywhere. 

Finally, I figured out I could generate the new totals after every update (instead of using a cron job) throw them into global variables.  

**Yes,** yes, I know, global variables are evil.  But they worked and I'm not entirely sure how to pass local variables around with Ruby.  There's a lot of differences between languages that evolved from C, but they all share C as a common ancestor.  Like Latin, when trying to learn French or Spanish.

Ruby, on the other hand, is Greek to me. 

Anyway, armed with the data, I served up a new Sinatra page with a JSON, and Bob's your uncle. 

This one I didn't have much handholding on, except for some people who pointed me to some docs.  This one was pure google-fu.  

It makes you wonder - how did the people who wrote google write google without having google to google the things you'd need to write google? 

There's probably a better way to do this than in global variables, so I'm putting the code here in case anyone wants to [email me](mailto:brian@sendthisguytocodecamp.com) and tell me how to take a whack at it. 

{% highlight ruby %}
def log_donation(email, amount)
  uri  = URI.parse(ENV["DATABASE_URL"])
  conn = PG.connect(
    :dbname   => uri.path[1..-1],
    :user     => uri.user,
    :password => uri.password,
    :host     => uri.host,
    :port     => uri.port
  )

  conn.exec_params("INSERT INTO donors VALUES ($1, $2)", [email, amount.to_i])
  $global_money_total = conn.exec("SELECT SUM(amount) AS total FROM donors").getvalue( 0, 0 )
  $global_num_donors = conn.exec("SELECT COUNT(*) AS number FROM donors").getvalue( 0, 0 )
end


get '/count_serve.json' do
  response['Access-Control-Allow-Origin'] = settings.cors_domain
  content_type :json
    { :money => $global_money_total, :donors => $global_num_donors }.to_json
end
{% endhighlight %}