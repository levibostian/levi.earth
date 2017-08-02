---
title: bashUtil
slogan: Perform tedious/hard to remember bash tasks with 1 command.
color: '#00a9eb'
website: https://github.com/levibostian/bashUtil
date: 03-18-2014
timeline: March 18, 2014 - January 16, 2017
description: Collection of bash scripts that perform tedious/hard to remember tasks to make you more efficient.
status: graveyard
featureImage: '/img/opensource/bashutil/bashutil.png'
---

# bashUtil

## How bashUtil came to be.

I created this project back in 2014 when I was starting to really get into git and mobile app development. I was pretty comfortable with the terminal by this point as I was using Linux as my primary desktop OS for a couple of years now.

As I was working in bash (mostly git) I was finding myself hitting this point where I would say, "what is that bash command again"? Then, I would have to somehow work to find it again. Look in my bash history, my browser history, some googling, until finally I found it.

I wanted to fix that by creating a collection of bash commands so that I no longer needed to copy/paste a few hard to remember bash commands into my terminal but instead I could simply run `git-local-sweep`, for example, to perform the task I wished (in this case with `git-local-sweep`, I want to delete all local git branches that are already merged into master).

## Why bashUtil is no more.

I have been using the collection of `bashUtil` bash commands ever since 2014. While using the bash scripts in `bashUtil`, I found myself only using ~2 of the bash commands in the collection: (1) `merge-into-master.sh` and (2) `gitForgetAllFromGitignore.sh` with the occasional `git-local-sweep`. All of the other commands I used probably once.

This year of 2017, I found *better* ways of running these tedious bash commands.

With all of my git commands, I have begun to use git alias commands. I have since created git alias commands for my popular bash commands. `merge-into-master.sh` is now `git mim` for example.

With my Android development command to compile Android apps and give myself a macOS notification when my app would compile, I have since started to use fastlane to perform this task.

For all other tasks, I use them so little that I end up googling for them anyway since I even forget they are in my bashUtil project.

With this in mind, R.I.P. bashUtil.
