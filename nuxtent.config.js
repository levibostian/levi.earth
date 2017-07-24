module.exports = {
  content: {
    routeName: 'freelance-slug', // pages/projects/_index.vue
    permalink: 'freelance/:slug', // content/freelance_work/foo.md -> /freelance_work/foo
    isPost: false
  //   ['freelance_work', {
  //     routeName: 'freelance_work-slug', // pages/projects/_index.vue
  //     permalink: 'freelance_work/:slug', // content/freelance_work/foo.md -> /freelance_work/foo
  //     isPost: false
  //   }],
  //   ["open_source", {
  //     routeName: "open_source-slug",
  //     permalink: "open_source/:slug",
  //     isPost: false
  //   }]
  //  ]
  }
}
