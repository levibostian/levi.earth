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

This repo comes equipped with an Obsidian configuration already created and pushed to this repo (`.obsidian/` folder). So, just open the root directory of this repo in Obsidian and you should be good to go.

What is setup in the Obsidian config:
- a custom theme was created to match the hugo theme. 
- disabled core plugins that are not needed for writing content for this site.
- the "Files and Links" plugin got configured to support hugo page bundles. So, if you are writing a post and you need to add an image or any other file type...
1. Create a folder with the same name as the markdown file you are writing. For example, if you are writing `my-post.md`, create a folder called `my-post/` in the same directory.
2. Create `index.md` inside the `my-post/` folder and move your content from `my-post.md` to `index.md`. This is because hugo page bundles require an `index.md` file. You can delete the original `my-post.md` file after moving the content.
3. When you want to add an image, just add it to that folder. So, if you have an image called `my-image.png`, add it to the `my-post/` folder. 
4. When you want to link to that image in your markdown file, just link to it like this: `[foo](my-image.png)`. Obsidian will automatically know to look for the image in the `my-post/` folder because of the way we configured the "Files and Links" plugin. Hugo knows as well because that's how page bundles work.
- disabled wiki links in the "Files and Links" plugin to use regular markdown links so it's compatible with hugo.


