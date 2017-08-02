# levibostian.com
Personal site

# How to add new content to a section.

* Create a new `.md` file for project. At the top of the file, you can use any or all of the following front-matter to describe the project:

```
---
title: Aplyr
slogan: Your Personal Career Counselor
color: '#24ABE2'
timeline: December 4, 2015 - February 22, 2017
date: 12-04-2015
description: Hire a personal career counselor to find your dream job. Have your counselor help you discover your passions, find and apply for job applications for you.
location: California, USA
status: not-active
website: http://aplyr.com
featureImage: '/img/freelance/aplyr/screenshot.png'
---
```

# How to create new sections for site.

Sections are /freelance, /opensource, /writing, /products, etc.

* Create a new folder under `content` directory with the name you want to use for the section.

* Follow directions [for creating new content under sections](#how-to-add-new-content-to-a-section) to create new content for your new section.

* Under `pages/index.vue`, add a new entry for your new section:

```
+projectSection('Name section', '/namesection', 'project in sortArray(newSectionPosts).slice(0, 3)')

// then, at bottom of page in the `asyncData` function, add a place to fetch the newSectionPosts:

newSectionPosts: await app.$content('/namesection').getAll() || payload
```

* Open the file `nuxtent.config.js` and add an object for the new section:

```
module.exports = {
  content: [
    ['freelance', {
      routeName: 'freelance-slug', // pages/projects/_index.vue
      permalink: 'freelance/:slug', // content/freelance_work/foo.md -> /freelance_work/foo
      isPost: false
    }],
    ["namesection", {
      routeName: "namesection-slug",
      permalink: "namesection/:slug",
      isPost: false
    }]
  ]
}
```

* Copy one of the directories already in the `pages` directory for an existing section. Name it the name of your new section.

Inside of the newly copied directory, you will see 2 files: `_slug.vue` and `index.vue`. Open each up and edit the contents inside to match your new section. 
