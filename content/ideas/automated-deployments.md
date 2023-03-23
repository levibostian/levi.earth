---
title: Automated deployments
---

One of the tasks that I enjoy least when it comes to writing code is the process of deploying code. Your project's deployment process may be simple or complex but either way, the process is boring, tedious, prone to human error, and can make my computer un-usable while I wait for an upload. I have been using the project [semantic-release]() for a while now and love it, but I have some suggestions on how we can make it better in an attempt to create the dream development workflow. 

# What is the dream workflow for development?

When I think about the process of writing code from idea to deployment, ideally this would be the workflow: 

1. Brainstorm, prototype, design. Plan the code to write. 
2. Write the code. 
3. Repeat. 

It's quite simple, really. The more I can focus on improving my project (planning, designing, actively writing code), the happier I am and the healthier the project is. 

But for some projects, there are more steps involved in the development workflow. Perhaps I need to update the `package.json` file with the latest version of the code? Maybe the code needs compiled and pushed to a production server? Do I need to create a GitHub release notifying users about a new feature? 

The list can be infinite in tasks to do beyond just developing features. The question becomes, how can we prevent ourselves from having to do any of these steps? Can we automate all of the deployment steps so we can spend our energy *just* writing code? 

# What are the steps involved to automate a deployment?

Each technology that you work with is unique. Each team that you work with is unique. Here are some ideas for what steps *could* be involved in your project's deployment process: 

* Determine the next semantic version (some projects might not need this. just use latest)
  update metadata files (some projects might not)
  create changelog (some might not choose to)
  create git tag (I like this idea as it snapshots deployments in a timeline)
  compile code, push to server 

some proejcts like a go module doesn't need this. a commit pushed to github is all you need. but, let's still list all these steps. 

# How do we automate these steps? 

semantic release. great tool that doe3s all of this 

# Problems 

# 1. How do we teach semntic release to the team?

suggest the actiosn I already made that lints PR titles. 

# 2. But what happens if there is an error?

that's where semantic release lacks. I want to use tools that I donu't need to teach to my team. I want tools that work as you would expect them to. we already need to teach you about branches and stuff, if there is a failure it's way more xomplex. 

especially if this scenario happens: server you are trying to upload to fails if that version already exists. 

what I propose is this instead:

determine next version
update metadata files 
create changelog 
create git tag, only if it doesn't exist already. 
check with the server you are pushing to to see if version already exists. if it does, skip deployment. else, try again. 

if any of the steps above fails, fail the entire deployment process. but, that's ok because we should encourage just retrying the CI job on fail. 

# What to try next?

Create custom semantic release plugins for the defaults that dont skip deployment if git tag already exists. 



# jfdfijfidjfe

