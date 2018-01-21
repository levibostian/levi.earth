---
title: Twitter-ReplyBot
path: twitter-reply-bot
layout: project
slogan: Twitter bot that watches for certain tweets and replies to them.
color: '#00a9eb'
website: https://github.com/levibostian/Twitter-ReplyBot
date: 2016-11-15
timeline: November 15, 2016
description: Twitter bot that watches for certain tweets and replies to them. I ran this in production once to sell t-shirts. The bot got banned from Twitter within hours.
status: graveyard
---
One night late in 2016 while watching an episode of Last Week Tonight on YouTube, John Oliver had [this message to say](https://youtu.be/-rSDUsMwakI?t=1341) where he repeated "This is not normal". He went on to say that American's need to post notes on their fridge, get a tattoo, whatever is needed to continuously remind themselves that the past election in the United States is not normal.

With that, I had an idea. I wanted to try an experiment.

> Are people interested in purchasing a t-shirt during this tough time?

When this YouTube video was released, it was a tough time for many Americans, including myself, so I was wondering if people would react to that by purchasing a product. A simple experiment where I would donate all of the profits to the non-profits that John put in his show to support.

So, I created a Twitter bot that listened for when people tweeted out the John Oliver YouTube video ([You can view the source for the bot here](https://github.com/levibostian/john-oliver-bot)). Whenever anyone would tweet our the URL to the Last Week Tonight YouTube video, I would respond with one of the following messages:

* "if you liked John Oliver's video, check out this shirt for charity https://teespring.com/new-this-is-not-normal"
* "I love John Oliver's video! Seen this shirt inspired by it for charity? https://teespring.com/new-this-is-not-normal"

I would reply with my own personal Twitter account so people would not think it was spam.

Then, I had [a buddy of mine](https://twitter.com/willlenzenjr/) create a t-shirt design for the t-shirt. Pretty quickly, we had a Teespring page up selling the t-shirt.

![Screenshot of t-shirt will designed](/img/opensource/twitter_reply_bot/not_normal_shirt.png)
> If you still want one of these shirts, you can purchase one [here](https://teespring.com/new-this-is-not-normal#pid=6&cid=614&sid=front)

I cannot pull up the Analytics on Teespring for some reason, but to sum it up, this is how the experiment went:

* I ~50 page views on the Teespring page from the bot. There were ~50 page views from >100 tweets sent that night.
* Only 2 people signed up to purchase the shirt from the ~50 page views. Not super terrible I suppose but my hypothesis was telling me otherwise.
* Analytics was showing ~100 page views from Facebook. It seemed that at least 1 person shared the teespring link on their Facebook account that drove traffic to it. No one bought from it, however.
* The remaining 4 orders for the shirt were all from Teespring.com browsers. People simply browsing the website. I had <40 page views from Teespring but the most orders here.
* The Twitter bot got banned within a couple of hours of being out in the wild.

To sum it up, here is what I got from the experiment.

* I bet my bot got banned because I was sending tweets out immediately once the bot found the tweet. This meant that when someone would tweet out the URL to the YouTube video, I instantly had the bot reply to them. This would sound spammy to me too. I bet the bot got reported. I don't know the exact reason because Twitter does not tell you why you get shut down. They simply say, "you broke the terms and conditions". If I tried this again, I would have a few minutes delay before the tweet sends out.
* If I was selling something other then a t-shirt I may have had more success. The most success that I had was from people shopping on the Teespring website. Those people were browsing the site *to buy a t-shirt*. I was offering a shirt because it was easy.

I may experiment again in the future, but the way this bot stands for now, it will get banned from Twitter easily. With that in mind, it was fun and it remains in the graveyard.
