module.exports = {
  content: [
    // routeName: 'freelance-slug', // pages/projects/_index.vue
    // permalink: 'freelance/:slug', // content/freelance_work/foo.md -> /freelance_work/foo
    // isPost: false
    ["freelance", {
      permalink: "/archive/freelance/:slug",
      isPost: false,
      routes: [{
          path: '/archive/freelance/_slug',
          method: 'get'
        }, {
          path: '/archive/freelance',
          method: 'getAll'
        }
      ]
    }],
    ["internships", {
      permalink: "/archive/internships/:slug",
      isPost: false,
      routes: [{
          path: '/archive/internships/_slug',
          method: 'get'
        }, {
          path: '/archive/internships',
          method: 'getAll'
        }
      ]
    }],
    ["mentoring", {
      permalink: "/archive/mentoring/:slug",
      isPost: false,
      routes: [{
          path: '/archive/mentoring/_slug',
          method: 'get'
        }, {
          path: '/archive/mentoring',
          method: 'getAll'
        }
      ]
    }],
    ["opensource", {
      permalink: "/archive/opensource/:slug",
      isPost: false,
      routes: [{
          path: '/archive/opensource/_slug',
          method: 'get'
        }, {
          path: '/archive/opensource',
          method: 'getAll'
        }
      ]
    }],
    ["products", {
      permalink: "/archive/products/:slug",
      isPost: false,
      routes: [{
          path: '/archive/products/_slug',
          method: 'get'
        }, {
          path: '/archive/products',
          method: 'getAll'
        }
      ]
    }],
    ["services", {
      permalink: "/archive/services/:slug",
      isPost: false,
      routes: [{
          path: '/archive/services/_slug',
          method: 'get'
        }, {
          path: '/archive/services',
          method: 'getAll'
        }
      ]
    }],
    ["talks", {
      permalink: "/archive/talks/:slug",
      isPost: false,
      routes: [{
          path: '/archive/talks/_slug',
          method: 'get'
        }, {
          path: '/archive/talks',
          method: 'getAll'
        }
      ]
    }],
    ["tutorials", {
      permalink: "/archive/tutorials/:slug",
      isPost: false,
      routes: [{
          path: '/archive/tutorials/_slug',
          method: 'get'
        }, {
          path: '/archive/tutorials',
          method: 'getAll'
        }
      ]
    }],
    ["writing", {
      permalink: "/archive/writing/:slug",
      isPost: false,
      routes: [{
          path: '/archive/writing/_slug',
          method: 'get'
        }, {
          path: '/archive/writing',
          method: 'getAll'
        }
      ]
    }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
    ? 'http://127.0.0.1:3000'
    : 'http://127.0.0.1:3000'
 }
}
