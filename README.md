# levi.earth

My personal site. 

# Requirements for a personal site

* Not a pain to update. This allows me to focus on writing content and not updating the site. 
* As fast as possible. No one likes slow sites and I take pride in small, fast sites. 
* Static with no javascript required. This is a small one that's not a deal breaker but for a personal site, I do enjoy not requiring javascript. 
* Generate a RSS feed link, with full content. 
* The ability to generate static pages. Some personal site building tools are made to only create blog posts but I want to be able to create /about as well as /blog/*
* A menu on the site so I can link to certain things I care about: an about me page, github repo, etc. 
* On mobile, I prefer not to have a hamburger icon for navigation. 
* Way to tag blog posts. That way I can easily list out all of my gardening blog posts, for example. 
* Syntax highlighting for code blocks.

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

# Obsidian writing setup 

Steps to setup Obsidian for writing blog posts.

- Open folder content/posts/ in Obsidian. It will use this existing folder as a vault. 

Change these settings 
- Files and Links: 
  - Disable "Use [[Wikilinks]]"
  - "Default location for attachments" to "in subfolder under current folder"
- Templates:
  - Set the folder to "templates". That's it. You can now crete new posts from template that includes the front matter.

## Theme (match blog visuals)

A custom Obsidian theme lives in `obsidian-setup/theme/`. It mirrors the current hugo theme so reading/writing in Obsidian looks like the live site.

Install:

1. Copy the two files into your vault's themes directory:
   ```
   mkdir -p content/posts/.obsidian/themes/yugo
   cp obsidian-setup/theme/theme.css content/posts/.obsidian/themes/yugo/theme.css
   cp obsidian-setup/theme/manifest.json content/posts/.obsidian/themes/yugo/manifest.json
   ```
2. In Obsidian: Settings → Appearance → Themes → select **yugo**.
3. Set Base color scheme to **Adapt to system** so dark/light matches the blog (which also follows the OS preference).
