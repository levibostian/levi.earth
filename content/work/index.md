---
title: Work
---

At my core I am a maker, engineer, inventor, or as my partner calls it "a crafter". I have always viewed code as a work of art and I put my heart and soul into the code/apps that I create. I believe quality takes time, work, and failures along the way but the outcome is worth it! 

I have early memories (~4 years old) of asking my parents for a nightstand to put by my bed. When they responded no, I took a card board box, packaging tape, and chop sticks and made myself a nightstand. I spent hundreds of hours with my dad working in his wood shop building things. I am at my best when I am given a problem and I am expected to come up with a solution to that problem and implement it. I am not a *just tell me what to code and I'll code it* type of programmer. I am my most creative when I evaluate a problem, gather information about the problem, design a solution, then implement it and test it. 

## What makes me unique? 

Besides what I have already stated above about being a craftsperson (*Someone who is highly skilled at their trade*), I do have some qualities in my work that I take pride in. 

1. **I care about the process of making code, just as much as the end result.** 

Yes, building software applications has challenges involved. Besides the challenges within the application, there are also challenges in the development process as well. I have fun taking on these challenges to try and make my development workflow better and better. Local development, testing, code reviews, managing releases, and tracking issues. There are many pieces to building software and I find the process enjoyable. 

Some examples of challenges I have faced and how I am (currently) going about fixing them:

* Database backups - I asked myself a while back, how can I create a production database backup method that is...easily scalable, affordable, does not impact infrastructure performance, and secure? I came up with the idea of spinning up a cloud virtual machine (VM), performing a database dump onto the VM, upload the dumped data to a S3 bucket, then destroy the cloud VM after complete. I do this using [a CLI tool](https://github.com/levibostian/purslane/) I created that gets executed via crontab and [a docker image](https://github.com/levibostian/Dockerfiles/tree/master/pgdump-s3) to perform the dumping and uploading of data. 

* Deploying applications - I have been the project owner/lead of 25+ mobile apps. Writing all of the code and managing their releases is a lot of work. There are many steps to it. A couple of years ago, I realized that my deployment process was tedious. I followed the same steps for every app of mine. To me, tedious tasks are a waste of time and are also error prone to human error. 

I looked around looking for ways to help me automate some of my deployment flow. One glorious day I stumbled across this tool [semantic-release](https://github.com/semantic-release/semantic-release). Semantic-release uses the idea of [conventional commit messages](https://gist.github.com/levibostian/71afa00ddc69688afebb215faab48fd7) to perform automated deployment of your software. No tool is perfect, but this tool does a lot of things right. 

Semantic-release does not perform the deployment of your software for you. With it's plugin system, you enable plugins that do whatever you need to do including deployment. Semantic-release was originally intended to automatically package and deploy nodejs modules. With it's customization capabilities I have been using it for all of my development (Android, iOS, Go, Docker, node, etc). 

This tool solves one part of my problem and that is managing releases. Now, my next challenge that I am working on is [making my deployment process more stable](https://github.com/levibostian/AndroidBlanky/issues/77) with improved tooling that is more reliable. 

* Zero downtime deployment - Kubernetes has helped a ton with this. It has the functionality built-in. Kubernetes does it right with readiness checks. I take advantage of these checks in that I verify API keys are valid, connections to databases are good, etc. I only start the server if I can feel confident that the pod will run successfully. 

* Generate screenshots for app stores - Sure, you can do this manually but (1) it's a pain because you need to populate the app with good fake data, take the screenshot, upload it to your computer, make edits, etc. (2) if you support multiple languages then that's not good. 

I am not perfect at this yet. But, I am thinking of an automated setup where a CI server does the work and delivers the images to you. I then manually upload them which is not a big deal. 

* Sharing secrets, API keys, secret files with teams and deployment - I use cici. 

## My values with work 

> I want to preface the information below by saying that I do not under value organizations who do not cross all of these items off the list. In teams that I have managed in the past, I did not cross all of them off. No one is perfect and we are all learning as we go. 

* **Honesty & transparency** - *Lead with honesty within your organization. Be transparent with your customers as much as you can.*

When I say transparency, I am talking about practices that gain trust. Within your organization, it's important that secrets are not kept from one another. Especially between leadership and non-leadership roles. Simple practices such as one-on-one meetings or sending monthly memos to everyone sharing future plans for the company can be great ways to start. I am also open to big ideas such as [public emails within your team](https://buffer.com/resources/buffer-transparent-email/). Everyone in a team deserves to be valued and one way you can show value is to be honest with them in every since of the word. 

Another form of transparency in the work-place is to be transparent with your customers. Keeping a blog with updates on the team, signing all social media posts with an employee's name, having a company webpage showing all of your employees are all simple ways to show the world who your company is. I am also open to big ideas such as [public revenue dashboards](https://buffer.com/revenue) or [public salaries](https://docs.google.com/spreadsheets/d/11s9VSyf4yaYUsqBKLaVH78NL8wdl8gXoj5BGAzjIFuc/edit#gid=671465451). 

* **Fully-remote work, asynchronous communication** - *Be a fully-remote company where everyone works remotely and communicates in an asynchronous way.* 

Remote-friendly companies *can* do remote work well but it is more difficult. I more prefer fully-remote companies where everyone is remote. If you are new to remote work or have questions, I recommend [this book](https://basecamp.com/books/remote). 

* **Carbon neutral** - *Every company puts carbon into the Earth's atmosphere. Making changes to reduce these emissions as well as offsetting what you do emit is a responsibility for everyone.*

There are many ways to help your organization's carbon footprint. To help you, you can become a member of [1% for the Planet](https://www.onepercentfortheplanet.org/) or [Climate Neutral](https://www.climateneutral.org/) or you can [take the responsibility upon yourself](https://wildbit.com/blog/2020/06/30/measuring-wildbits-environmental-impact). At it's core, it's about finding ways in your organization to reduce emissions and offset what you can't. 

We are all in this world together and it's everyone's responsibility to take care of it. 

* **Show gratitude** - *Your organization would not exist without it's members. You know that and so do they. Show them you are all a part of this.*

We have all said, "The customer is always right". Sure, I see meaning in that. However, I can see how that phrase can become toxic within an organization. If your top priority is the customer, do you begin ignoring your team members? 

To show gratitude, there are simple steps you can take such as giving each other a shout-out but I personally believe the simple steps don't go far enough. If you truly care about your employees, you would make sure everyone is working 40 hours of less per week, has plenty of time off, and does not get bothered while away from work. You can go the extra mile and become an employee-owned business or practice profit sharing. 

* **Challenge each other and remove the red tape** - **

* **Inclusion** - **

Everyone on your team deserves a seat at the table. 

* **Listen, first** - **

* **Quality of quantity** - **

Give everyone time to take a step back and come back to it. Creativitiy takes time. 

* **Work smarter, not harder** - **

The only way to make your todo list smaller is to remove things from it. 

Make your work day calm. Work is not a sprint, it's a lifetime marathon. 

* **Little to no meetings** - **

...I am barely scratching the surface here with everyone I have above. Honestly, this calm type of working is relatively new to me. I have been working for startup companies since 2013 and it's unfortunately more rare to find these practices within a high-growth startup company. It would be fun for me to write about each of these topics above in greater detail. I'll add links above if I spend some time on that in the future. 

* **Open source by default** - ** 

## My tech stack 

I don't spend a ton of time talking about tech stacks because I believe that at the end of the day, use whatever tool works for you. I choose not to spend my time arguing MongoDB vs MySQL or Node vs PHP. Use what you and your team enjoy. Below are the tech stacks that I currently love spending my time on.

* Android - Native Android development. See my [boilerplate/template project to learn more](https://github.com/levibostian/androidblanky/).
* iOS - Native iOS development. See my [boilerplate/template project to learn more](https://github.com/levibostian/iosblanky/).
* Nodejs - Typescript and expressjs for Rest APIs. Developed and deployed using Kubernetes. See my [boilerplate/template project to learn more](https://github.com/levibostian/expressjsblanky/)
* Go - I am new to Go but so far I have been really enjoying it. I mostly use it as my go-to language for building system tools (CLI, continuous integration tools) but I am interested in exploring more uses of this language. 

## My setup 

I find it funny that people care about each other's work space. This is for all of you workspace nerds. 

##### My desk 

Desk: Homemade desk made of 2x4s
Keyboard: ErgodoxEZ. Black, naked keys, cherry clear switches (thinking about going with more clicky browns...)
Computer: 2019 MacBook Pro
Mouse: Bluetooth trackpad
Monitor: HP Z something
Misc: Hand warmers

##### My software

Android: Android Studio 
iOS: XCode
All other dev (Go, Nodejs, etc): VSCode 
Browser of choice: Firefox 

Other common tools: 1Password, iTerm2, Dropbox Paper

