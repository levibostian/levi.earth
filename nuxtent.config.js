module.exports = {
  content: [
    // routeName: 'freelance-slug', // pages/projects/_index.vue
    // permalink: 'freelance/:slug', // content/freelance_work/foo.md -> /freelance_work/foo
    // isPost: false
    ["freelance", {
      permalink: ":slug",
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
      permalink: ":slug",
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
      permalink: ":slug",
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
      permalink: ":slug",
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
      permalink: ":slug",
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
      permalink: ":slug",
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
      permalink: ":slug",
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
      permalink: ":slug",
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
      permalink: ":slug",
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
