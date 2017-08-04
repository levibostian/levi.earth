module.exports = {
  content: [
    // routeName: 'freelance-slug', // pages/projects/_index.vue
    // permalink: 'freelance/:slug', // content/freelance_work/foo.md -> /freelance_work/foo
    // isPost: false
    ["freelance", {
      permalink: "/freelance/:slug",
      isPost: false,
      routes: [{
          path: '/freelance/_slug',
          method: 'get'
        }, {
          path: '/freelance',
          method: 'getAll'
        }
      ]
    }],
    ["internships", {
      permalink: "/internships/:slug",
      isPost: false,
      routes: [{
          path: '/internships/_slug',
          method: 'get'
        }, {
          path: '/internships',
          method: 'getAll'
        }
      ]
    }],
    ["mentoring", {
      permalink: "/mentoring/:slug",
      isPost: false,
      routes: [{
          path: '/mentoring/_slug',
          method: 'get'
        }, {
          path: '/mentoring',
          method: 'getAll'
        }
      ]
    }],
    ["opensource", {
      permalink: "/opensource/:slug",
      isPost: false,
      routes: [{
          path: '/opensource/_slug',
          method: 'get'
        }, {
          path: '/opensource',
          method: 'getAll'
        }
      ]
    }],
    ["products", {
      permalink: "/products/:slug",
      isPost: false,
      routes: [{
          path: '/products/_slug',
          method: 'get'
        }, {
          path: '/products',
          method: 'getAll'
        }
      ]
    }],
    ["services", {
      permalink: "/services/:slug",
      isPost: false,
      routes: [{
          path: '/services/_slug',
          method: 'get'
        }, {
          path: '/services',
          method: 'getAll'
        }
      ]
    }],
    ["talks", {
      permalink: "/talks/:slug",
      isPost: false,
      routes: [{
          path: '/talks/_slug',
          method: 'get'
        }, {
          path: '/talks',
          method: 'getAll'
        }
      ]
    }],
    ["tutorials", {
      permalink: "/tutorials/:slug",
      isPost: false,
      routes: [{
          path: '/tutorials/_slug',
          method: 'get'
        }, {
          path: '/tutorials',
          method: 'getAll'
        }
      ]
    }],
    ["writing", {
      permalink: "/writing/:slug",
      isPost: false,
      routes: [{
          path: '/writing/_slug',
          method: 'get'
        }, {
          path: '/writing',
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
