---
title: EarMashin
path: earmashin
layout: project
slogan: Your platform for music discovery.
color: '#F36032'
website: http://www.earmashin.com/
date: 2015-09-30
timeline: September 30, 2015 - April 1, 2016
description: Discover new upcoming artists by listening to music live with curators. Broadcast your music for others to listen-in with you. When you pause, your listeners pause. When you skip, your listeners skip. Listen to over 125 million tracks from the SoundCloud library. Purchase tickets to upcoming live events from indie artists.
location: Los Angeles, California, USA
status: not-active
featureImage: /img/freelance/earmashin/now_playing_light.png
---
When Earmashin came to work with me, they already had v1 of of their mobile app in the App Store. As the team began a 90 day startup accelerator, they were ready to build v2 of EarMashin to build the future of the company.

I worked with EarMashin to consult, design, and improve their mobile app to go from v1 to v2.

**What I built:**

* v2 of iOS native app.
* Backend API.
* Events aggregator to crawl ticketing information from external website.
* Mobile app development lead.
* Development consulting.

## What is EarMashin?

EarMashin is on a mission to make upcoming music artists known.

## What does the app do?

The iOS mobile app has lots of functionality.

* Search and stream over 125 million songs from the SoundCloud library.
* Listen to music live with someone streaming their music. They pause, you pause. They skip, you skip. Be your own personal Dj.
* Login to app with Facebook account or email/password.
* Purchase tickets to events in the Las Vegas and Los Angeles area.
* Create playlists of your favorite songs to share with friends.
* Build list of followers to your profile.

## What technologies, tools, libraries did you use to build the app?

iOS app:

* Alamofire
* Swift v1 programming language (v1 of app built using Objective-C. I adapted Swift for new v2 code)
* SwiftyJSON
* Firebase for listen-in functionality

API:

* PhalconPHP (v1 of API built using Phalcon. I built on top of this API and maintained it.)

## Technically, what is impressive about the app?

* **Went from 200 songs to over 125 million songs**

v1 of the EarMashin app had 200 songs. We knew that listeners were not interested in this when they could have access to hundreds of millions of songs elsewhere. With that in mind, I built SoundCloud into the mobile app so the app went from 200 songs to 125 million songs overnight.

* **Fully automated events and ticketing system**

For v2 of the mobile app, the team wanted the ability for users to purchase tickets in the mobile app to live concerts. Users would be able to purchase tickets from an affiliate ticket seller where EarMashin would get a cut of the ticket sale.

I built an aggregator script that ran at 3am CST each day. It would pull down all of the events from the ticket affiliate for the next 1 year of events and dump the data into the EarMashin database to then be able to display to the users in the mobile app to purchase tickets.

* **Maintain v1 codebase from previous developer**

EarMashin already worked with a previous developer overseas to build v1 of the mobile app. I took this backend API and iOS native mobile app codebase to build v2 of the mobile app. This was my first project that I took existing code from a previous developer and built on top of it.

This is a great to learn for any startup team. Developers are all different. We all have different styles with how we build software. Because you already have a code base built by someone else does not mean you can use hand that code to a new developer and expect them to pick it up and build on top of it.

With the existing code base that EarMashin was working with, the app had a handful of loading screens that took 1 - 6 seconds to load in the app with no offline caching, the API backend had vulnerabilities that would allow anyone to view user data and delete data from other users.

By the end of building v2 of the mobile app, I had almost built the mobile app again from scratch from all of the updating done. In some situations, you can indeed take existing code from a previous developer and build on top of it (myself, for example, write my code with the intention that it can be handed to a new developer and they can pick it up an go with it) while other times, it is much better to start from scratch to save time, money, and energy.
