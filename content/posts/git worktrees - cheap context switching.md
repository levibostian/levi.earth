---
title: cheap context switching with git worktrees
categories:
  - software
tags:
  - productivity
  - software-tools
date: 2026-02-01T00:00:00+00:00
---
I want to share a productivity tip I’ve been using a lot lately: **git worktrees**. 

I stumbled across git worktrees recently because I’ve seen them popping up all over the place—especially with AI agents and people wanting to work on many different tasks and projects simultaneously. That never really stuck for me, but I still use them because I found a great use case: **cheap context switching**. 

# What are git worktrees? 

Let me explain the typical developer workflow. Imagine you’re focused on building a new feature. You’re using git version control, you're checked out to a feature branch, and you’re in the middle of writing code. Maybe you’re rebasing. Maybe you’re prototyping and have tons of changed files. 

Then all of a sudden, you’re asked to review a pull request, check out a potential production bug, or do some pair programming—something happens where, right in the middle of what you’re working on, you need to context switch and look at a different branch.

The typical workflow is to use something like `git stash` to save your changes, check out the new branch, pull, etc.—all the steps you have to do to get to a clean slate on a different branch. Sometimes this context switch isn’t expensive; sometimes it’s quite expensive. In general, it’s annoying and not that fun, and it’s something you might have to do multiple times per day.

This is where the `git worktree` command comes in. With git worktrees, changing branches becomes as easy as changing directories. You don’t have to stash anymore - you just change to a different directory. 

And it's all built-in to git! No extra tools to install! You can try it right now!
- Create a new worktree - `git worktree add ../quick-fix`
- `cd` to the folder - `cd ../quick-fix`
- Make that quick fix.
- Stage, commit, push the changes, open pull request, etc. 
- `cd` back to what you were doing before - `cd ../new-feature` 

# Great use cases for git worktreees

Some really good use cases I’ve found for worktrees are any kind of context switching. 

**Quick bug fixes or docs change.** Those tiny tasks you know will be fast. Sometimes it’s more work to delegate it or create a ticket in your issue tracker than it is to just do it. But you still might not do it because context switching feels too expensive for a quick task. With worktrees, I don’t procrastinate those tasks anymore: I create a worktree, make the pull request, and move on.

**Reviewing someone's pull request**. Create a new git worktree for your teammates branch, review code, then delete the worktree. All without having to touch what you're currently working on. 

**Run an ai agent on a side task.** I previously said that I don't personally use git worktrees as a way to work on multiple tasks and projects in parallel. While that is true, I will however create a new git worktree and ask an ai agent to begin working on something while I am (1) waiting on a CI server to finish running (2) doing some final cleanup on code and opening a pull request and I want to ask an agent to jumpstart working on my next task. When the ai agent is done, I have a new branch just sitting there waiting for me, ready to go. 


# Give them a try! 

Here is a very brief Getting Started section to give worktrees a shot today, if you're interested. 

When you are just about to perform one of the use cases such as starting a new feature, fixing a bug, reviewing a pull request, try creating a worktree instead of creating a branch! 

### 1. Create your first worktree

All you need to do to get started is run the command: 
```bash
# This command creates a new branch (`fix/typo`),
# creates a new worktree in the directory ../fix-typo,
# and says you want to create this new branch off `main`. 
git worktree add -b fix/typo ../fix-typo main

# for creating a worktree from a remote branch 
# use case: reviewing a pull request 
git worktree add ../pr-123 origin/their-branch
```

### 2. Use it this new worktree 

Now switching tasks is just switching folders! 

```bash
cd ../fix-typo
cd ../pr-123
# Yup! By just changing directories, you have just changed branches! 

# Now, get to work! 
# edit files, run tests, etc.
# It's just a branch like any other. Make commits, pushes, merges, pull requests.
git status
git commit -am "Quick fix"
git push -u origin HEAD
```

When you’re done, go back to your original work:

```bash
cd ../new-feature   # or whatever directory you were in before
```

### 3. Remove the worktree when you’re done

First, **leave the directory** (don’t remove a worktree while your shell is inside it):

```bash
cd ..
# Remove (unregister) the worktree at this path and delete that worktree directory.
# This does NOT delete the branch, but any uncommitted changes in that worktree
# will be lost because the directory is removed.
git worktree remove ../quick-fix
```

If you want to delete the branch too, do it *after* removing the worktree:

```bash
git branch -d quick-fix
```

That’s it—create a worktree, `cd` into it, do the work, then remove it when you’re finished.

At any time, you can view what worktrees that you have: 

```bash
git worktree list
```

# Gotchas 

Worktrees are pretty sweet. I think I’ve explained it well, but I’ll warn you: there are some gotchas. Nothing is a deal-breaker—just things you tend to learn the hard way I want to mention to you earlier. 

**My tip on how to avoid all these gotchas**. You can use the built-in `git worktree` command on your machine right now with no extra tools or scripts to install. However, you will have to get used to these gotchas listed above on your own. There are a lot of great open source CLI wrappers/scripts out there that help you easily get around these gotchas. I suggest that after you start to get the hang of git worktrees, try out some tools and find one that you like. Later on in this article I'll share my favorite tools. 

**Added step when deleting branches**: if you create a worktree and later want to delete a branch, you can’t delete that branch until you delete the worktree that has it checked out. That can be a little annoying when you’re cleaning up old branches and git tells you it can’t delete a branch because a worktree exists for it. You have to delete the worktree first, then delete the branch. 

My tip to get around this gotcha: Use a tool/script that automates this task for you. 

**Running multiple commands to start working on a new worktree**. Another gotcha you’ll see mentioned in beginner articles like this one is that it takes a small handful of commands to create a new worktree, check it out, `cd` into it, run some setup commands, and finally get to work. 

My tip to get around this gotcha: Use a tool/script that automates this task for you. 

**Some files do not get copied over**. git worktrees do not copy over files that are in your `.gitignore`. So for you javascript/typescript developers, that means if you have a `node_modules` folder, you’ll likely need to run `npm install` whenever you create a brand-new worktree. For some people, `npm install` takes a lot of time! 

My tip to get around this gotcha: Use a tool/script that automates this task for you. You will want to perform a `cp` from the parent worktree into your new one for the folders/files that you want, like `.node_modules`. By copying over, you will save yourself a ton of time as compared to generating these files again with `npm install`. In Linux/macOS there’s a feature called copy-on-write that's built-in to `cp` as an added command line arg. Use it if your directory you're copying over is very large and it will dramatically speed-up the copy. 

**Don't create worktrees as sub-directories of existing worktrees**. Avoid doing this... 
```
WeatherApp/ <-- let's say you're checked out to a git branch in this dir
  src/ <-- which means that you have all your source code in that dir
  lib/
  docs/
  index.js
  bug-fix-worktree/ <-- you decided to create worktrees as sub-directories 
  cool-feature-worktree/
```

Instead, I suggest doing: 
```
WeatherApp/
  main/ <-- notice how every sub-directory is a git worktree. Including main!
    src/ 
    lib/
    docs/
    index.js
  bug-fix/ <-- a worktree 
    src/ 
    lib/
    docs/
    index.js
  cool-feature/ <-- a worktree 
    src/ 
    lib/
    docs/
    index.js
```
> I got this tip from [this article](https://notes.billmill.org/blog/2024/03/How_I_use_git_worktrees.html). 

Biggest reason why you should avoid the sub-directory route is the next time you use your IDE (like VS Code) and do a code search, the IDE will look through all the code in your directory plus all the worktrees which result in your search results finding N number of the same file. 
# My favorite git worktree tools 

Finally, I want to give a little pitch for my current favorite worktree tool, called [autowt](https://github.com/irskep/autowt). It addresses all of the [gotchas](#gotchas) for you and adds some convenient productivity features. It’s a newer tool compared to others out there, but I find `autowt` to be the perfect mix of not doing too much or too little for me. It was quick to learn and includes everything I need. 

In my workflow, anytime I want to switch to a different branch, it’s as simple as:

`autowt switch <branch-name>`

Done. It doesn’t matter if it’s a new branch or one I’ve already created. It automatically creates a new worktree and branch if it doesn’t exist, switches to it, opens a new terminal tab in that directory, and even runs commands I tell it such as `cp` or `npm install`. 

If you start using git worktrees, finding a CLI tool you like is worth your while.

---

Thanks for your time! I hope this inspires you to give this hidden git feature a try! 