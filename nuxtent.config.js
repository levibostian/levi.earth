module.exports = {
  content: [
    // routeName: 'freelance-slug', // pages/projects/_index.vue
    // permalink: 'freelance/:slug', // content/freelance_work/foo.md -> /freelance_work/foo
    // isPost: false
    ["freelance", {
      page: '/archive/freelance/_slug',
      permalink: ':slug',
      isPost: false,
      generate: ['getAll', 'get']
    }],
    ["internships", {
      page: "/archive/internships/_slug",
      permalink: ':slug',
      isPost: false,
      generate: ['getAll', 'get']
    }],
    ["mentoring", {
      page: "/archive/mentoring/_slug",
      permalink: ':slug',
      isPost: false,
      generate: ['getAll', 'get']
    }],
    ["opensource", {
      page: "/archive/opensource/_slug",
      permalink: ':slug',
      isPost: false,
      generate: ['getAll', 'get']
    }],
    ["products", {
      page: "/archive/products/_slug",
      permalink: ':slug',
      isPost: false,
      generate: ['getAll', 'get']
    }],
    ["services", {
      page: "/archive/services/_slug",
      permalink: ':slug',
      isPost: false,
      generate: ['getAll', 'get']
    }],
    ["talks", {
      page: "/archive/talks/_slug",
      permalink: ':slug',
      isPost: false,
      generate: ['getAll', 'get']
    }],
    ["tutorials", {
      page: "/archive/tutorials/_slug",
      permalink: ':slug',
      isPost: false,
      generate: ['getAll', 'get']
    }],
    ["writing", {
      page: "/archive/writing/_slug",
      permalink: ':slug',
      isPost: false,
      generate: ['getAll', 'get']
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
    ? 'https://levibostian.com'
    : 'http://127.0.0.1:3000'
 }
}
