---
title: New deployment tool
categories:
  - software
tags:
  - project-announcement
date: 2024-12-12T00:00:00+00:00
lastmod: 2024-12-12T00:00:00+00:00
---
One of the tasks that I enjoy least when it comes to writing code is the process of deploying code. Your project's deployment process may be simple or complex but either way, deploying code is boring, tedious, prone to human error, and can make my computer un-usable while I wait for an upload. 

Luckily, there are great tools today that can be used to automate the entire process, from starting a deployment to determining the next version number to uploading to the production server, all in the background. My favorite tool that I have been using for about 5 years is [semantic-release](https://github.com/semantic-release/semantic-release). 

From this time that I have been using automated deployment tools, I have encountered areas where I believe the tools could be improved. Recently, I began to make these improvements. 

# What is the dream workflow for development?

When I think about the ideal development workflow, it would look something like this: 

1. Do some planning before you write code. 
2. Write the code. 
4. Repeat. 

It's quite simple, really. The more I can focus on improving my project (planning, designing, actively writing code), the happier I am and the healthier the project is. 

But for most projects, there are more steps involved in the development workflow after you write the code: 

1. Planning. 
2. Writing code. 
3. Pull request process. 
4. **Deploy: Increment version, update metadata files, compile & package code, upload to server, create git tag, send notification to your team, etc.**
5. Repeat. 

My question for years has been: How can I completely remove this *Deploy* step so that after I merge my code in, the entire deployment process is done for me? 

# How can you automate a deployment? 

When you perform a deployment, there are multiple steps. Some of them are really easy, such as updating the version in your metadata files (`package.json`, `Package.swift`, `build.gradle`, etc). Uploading to a server is also very easy to automate.

Some parts might feel very complex, such as determining the [next semantic version](https://semver.org/) of your software. The method that I've always seen for how to automate this step is for a human to still be involved. When you create each commit (including when you merge in a pull request) there's a specific format that is used for all of the git commits you create. Arguably the most popular format for git commit messages to aid in determining the next semantic version is [conventional commits](https://www.conventionalcommits.org/). 

By using a specific git commit message format, you the developer are able to give information about the intention of that commit. Is that commit a new feature that has been added? Is that commit simply a documentation update? Is that commit a bug fix? Did you introduce a breaking change in that commit? All of this is determined by the developer who wrote that code, and then they also create that commit.

Once you start using a git commit message format for all of your git commits, the automated deployment tools can quite easily do everything they need to fully automate a deployment. By looking at all of your git commits, they can decide the next version number to use. 

The rest of the steps are quite easy to accomplish with a series of scripts that you can provide to the tools.

# Requirements of these tools 

From my experience of using these tools over the past five years or so, both individually and as part of a team, there are some behaviors that thrive and others that I wish would be improved. Taking all of this experience, here are the requirements that I would define for how these tools should work. 

# 1. Learn Quick 

Team members can be guided through the deployment process of a project, in seconds, without having to "learn a new tool". 

If you install a tool into a project and want people to contribute to the project, you don't want the onboarding experience to be a negative experience. I think it would be ideal if the deployment tool itself was the one that *teaches* the deployment process. So when someone opens a pull request, you don't need to do the onboarding; the tool does the onboarding for you. How is that for a positive experience! 

From my experience working with a team, when the deployment tool has a learning curve, there were 2 results from this: 
1. Harder buy-in from the team to using this new tool and process. 
2. Mistakes are made where the tools actual behavior did not meet the team member's expected behavior. This can have consequences that trickle down to your users/customers. 

Beyond working with a team, when the tool is quick to learn, there are major benefits for OSS maintainers. Any contributor to your codebase can self-serve themselves when they open pull requests. 

> Note: I [created a simple GitHub Action](https://github.com/levibostian/action-conventional-pr-linter) that alerts the pull request author if the pull request does not follow the conventional commit format for the git commit message. This is not the perfect solution, but it has reduced the number of problems caused by team members not understanding the tool. 

# 2. Gracefully handle when a deployment fails 

This is absolutely the number one problem that I've seen across all of the deployment tools that I've used, including but not limited to semantic-release. And that is when a deployment encounters a failure during one of the steps of the automated deployment process, it's somewhat complex to be able to recover from that failure and retry it. 

The ideal solution is that the tool handles this failure for you. So, that way, your team doesn't have to rely on you always being there to help when this scenario happens. If somebody on your team sees a failure, they can simply click the "Rerun" button as many times as they want. And using the logs, they should be able to try to diagnose and resolve this error.

No one on the team should be able to accidentally break something. And they shouldn't have to have knowledge and understanding of this tool and how it behaves to perform a rollback or make it perform a retry.

# 3. Be reliable

Be confident that your software will deploy today, tomorrow, and the next day.

This one might seem like common sense, but it's actually important to call out because I've experienced scenarios using existing tools where it works great for months at a time. Then, one day, you try to deploy your code to customers and encounter the tool crashing because of a random dependency it has having a new update. As a result, we can't make a deployment that day...😓.... It has been from this experience that I've now realized the huge value in having a tool with a very high chance of being able to run exactly the same way well into the future.

# 4. Everything can be customized to fit your team

Whatever workflow you want to follow, this tool can be quickly and easily customized to follow that pattern.

It's amusing how, despite simplifying the deployment process and making common default behaviors straightforward, everyone you talk to wants the process tweaked just a little bit. Workflows are highly personal and often strongly opinionated topics. As such, it's not surprising that teams desire to customize even the smallest details.

The biggest example I've encountered is the format for creating Git commit messages. However, this level of customization can extend far beyond that to also encompass tailoring the actual deployment process itself, so that it accommodates any language, framework, ecosystem, or tech stack. As a result, customization of every aspect becomes a requirement.

# 5. Calm deployments 

No one on the team should be scared for you to go on PTO or to click that merge button.

This requirement I would consider an umbrella over all other requirements. In general, I've seen scenarios where tools can cause people to be nervous when colleagues go on PTO who know the tool really well. I've seen instances where individuals might be apprehensive about clicking the merge button because they're unsure how the deployment tool will actually run. So, my number one vision for a deployment tool is that it creates a calm environment where people feel incredibly confident using this tool. 

# I decided to build my own automated deployment tool 

When I came up with this list of requirements, many of them I felt could be accomplished using the existing tools that I had already used. But there were a couple of requirements that would require some behavioral changes to satisfy them. 

I started online discussions and developed plugins for the existing deployment tools to see if I could make these existing tools meet all of these requirements, but I came up short. From these discussions, I realized that the requirements and design decisions of these other tools are different from mine. It was at this time when I decided that the best way to meet these requirements is to build the tool myself. 

🥁🥁🥁 **Introducing.... [*new deployment tool*](https://github.com/levibostian/new-deployment-tool/)!** (the name is still a work in progress 😉)

As you may expect, the features and vision for this tool align with the requirements I listed above to ultimately create a tool that.... 
- You and your team can learn very quickly
- Is designed in every way to be reliable and customizable. 
- Every design decision is made to ensure calm workflows and deployments for you and all of your team. 

## Features 

At it's core, this new deployment tool operates similarly to existing tools: examine git commit created since the last deployment, determine the next software version, and run scripts to prepare for and perform deployment. While its functionality is comparable to other tools currently available, there are some notable differences I'd like to share with you.

### 1. Write plugins using any programming language that you want

It's important to me that if we have a tool intended to have low friction for being introduced into a team, then I believe it's also essential that your team doesn't need to learn a new programming language to customize and use the tool. 

I've had this idea for years that I have been so eager to try in a project: create a tool that allows you to customize it with plugins, but you can write those plugins using any programming language of your choice. I've worked with teams that are exclusively Android developers, familiar only with Java and Kotlin. On the other hand, I've worked with iOS teams who know Swift but nothing about other languages or tools. Asking these developers to write a plugin in another language adds a lot of bumps to onboard the tool within a team. I would love to go to my team and say, "We can absolutely use Swift or Kotlin!"

This new deployment tool is built in Typescript/[Deno](https://deno.com/), but during my testing, I have been using Python to write all of the plugins! It should be straightforward to use any language you want including compiled languages, not just interpreted. 

### 2. Test your deployment 

Other tools have this capability of performing a dry run to ensure that your configuration and setup for the tool are correct. However, I don't believe these tools go far enough. There are limitations that reduce the value dramatically. 

To test your deployment, here is how this new deployment tool will work. When you open a pull request, the tool will simulate merging the pull request and will then run the full deployment process from start to finish (just without actually pushing code to servers). Not only will you be able to assert that the configuration and plugins don't have any issues, but you will also be able to view the full output of what would happen if you clicked the "Merge" button. This helps you gain confidence the tool will work exactly as you expect it to before you merge. 

### 3. Built with Deno 

The fact that this tool is built using Typescript and the Deno runtime isn't necessarily a feature, but by using Deno you do get some functionality that you may otherwise not receive. 

Besides having a great developer experience creating developer tools, Deno in particular has a couple of features that work exceptionally well with a tool like this.

1. **Security:** 

For this tool to function as intended, it needs to have permission to your GitHub repository, access secrets and access servers. It's crucial that people have fine-grained control over what this tool is able to do. Deno features [built-in security](https://docs.deno.com/runtime/fundamentals/security/) where you can specify exactly which files, web servers, and environment variables a program can access. I plan on leveraging this built-in feature and extending it to users of this tool, so they themselves can customize their setup to have zero trust in it and customize to their liking.

2. **Long-term reliability:** 

A problem that many, including myself, have encountered when using alternative tools is that they may not work the next time that you execute it. Suddenly, due to an update made by some dependency elsewhere, the tool may crash and block you from deployment. There are features built into Deno (or easily added with other tooling) where you can compile the code into a binary or roll it up into one file containing all of code and all dependency code. The idea is that when you run this tool, you can be confident that it will run as long as you have the runtime (nodejs or Deno) installed on your operating system. 

## Current status of this new tool 

At this moment, I'm using this new deployment tool to make all the deployments for the tool itself. So, it's functional enough that it can make deployments. The tool has been a good experience when I have used it. 

Not all the requirements discussed in this document have been met. The project is still in its alpha stage and I'm working on it in my free time as a fun project. Progress has been very positive, and all of the features that I had in mind have been possible to implement!

I suggest [checking out the project's GitHub to see the latest status](https://github.com/levibostian/new-deployment-tool/). 

I love talking about automated deployments! I've had a blast working on this project, and I'm very excited to share it with all of you. I hope you'll consider giving it a try sometime.

