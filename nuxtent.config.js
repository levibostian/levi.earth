module.exports = {
  content: [
    // routeName: 'freelance-slug', // pages/projects/_index.vue
    // permalink: 'freelance/:slug', // content/freelance_work/foo.md -> /freelance_work/foo
    // isPost: false
    ['freelance', {
      routeName: 'freelance-slug', // pages/projects/_index.vue
      permalink: 'freelance/:slug', // content/freelance_work/foo.md -> /freelance_work/foo
      isPost: false
    }],
    ["opensource", {
      routeName: "opensource-slug",
      permalink: "opensource/:slug",
      isPost: false
    }]
  ]
}
