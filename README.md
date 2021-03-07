# levibostian.com

Personal site for Levi Bostian.

# Requirements for a personal site

* Not a pain to update. I know myself and when sites are a pain to update, I don't update them. Make the site as simple to update as possible to prevent human laziness. 
* As fast as possible. No one likes slow sites and I take pride in small, fast sites. 
* Static with no javascript required. This is a small one that's not a deal breaker but for a personal site, I do enjoy not requiring javascript. 
* Generate a RSS feed link
* The ability to generate static pages. Some personal site building tools are made to only create blog posts but I want to be able to create /about as well as /blog/*
* A menu on the site so I can link to certain things I care about: an about me page, github repo, etc. 
* On mobile, I prefer not to have a hamburger icon for navigation. 
* Way to tag blog posts. That way I can easily list out all of my gardening blog posts, for example. 

# Build

* Install hugo CLI. 
* `hugo serve -D` for development server 

# Update theme

```
git submodule update --remote --merge
```

Check the branch that the submodule (theme) is set to pull from:

```
cat .gitmodules
```

Change the branch the submodule is pulling:

```
git submodule set-branch --branch <branch-name> themes/DigitalGarden
```