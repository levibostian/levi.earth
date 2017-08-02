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
    ["internships", {
      routeName: "internships-slug",
      permalink: "internships/:slug",
      isPost: false
    }],
    ["mentoring", {
      routeName: "mentoring-slug",
      permalink: "mentoring/:slug",
      isPost: false
    }],
    ["opensource", {
      routeName: "opensource-slug",
      permalink: "opensource/:slug",
      isPost: false
    }],
    ["products", {
      routeName: "products-slug",
      permalink: "products/:slug",
      isPost: false
    }],
    ["services", {
      routeName: "services-slug",
      permalink: "services/:slug",
      isPost: false
    }],
    ["talks", {
      routeName: "talks-slug",
      permalink: "talks/:slug",
      isPost: false
    }],
    ["tutorials", {
      routeName: "tutorials-slug",
      permalink: "tutorials/:slug",
      isPost: false
    }],
    ["writing", {
      routeName: "writing-slug",
      permalink: "writing/:slug",
      isPost: false
    }]
  ],
  api: {
    baseURL: (isProd) => isProd ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000'
  }
}
