<template lang="pug">
  .w-100
    Navbar
    .w-100.hero.min-h-100.top-0.ph2
      .f-subheadline-ns.f1.white.tl.pt6.mw7-ns.center Levi Bostian
      .f2-ns.f3.white.tl.mw7-ns.center.pt3.pb3 Building the next great app.
    #about.w-100.bg-white.tc.center.pt4.overflow-auto
        h1.f1-ns.f2.tc.tr-ns.pt5.dib-ns.ph2.w-50.fl.dn(style="transform:rotate(-3deg);") Hello, there! &#x1F44B;
        img.br-100.mw5.pt2.center.mh0-ns.h5.w-50-ns.w-100.fl-ns(src="img/levi.jpg")
    .w-100.w-60-m.w-50-l.bg-white.center.pv4.ph2.bb.b--black-10.tc
        p.tl.f3-ns Hello there, I'm Levi.
        p.tl.f3-ns Husband, Internet Entrepreneur, software developer. I make Android, iOS and web apps. Kotlin, Swift, Vuejs, Nodejs, Docker.
        p.tl.f3-ns I am a full-time Internet Entrepreneur and Software Developer with way too many ideas.
          | Because of this, #[b I am obsessed with productivity]. I am always finding ways to improve my development
          | skills and be able to build better apps faster.
        a(href="#")
          .button.bg Mobile app developer looking to build #[i better software faster]?
        p.tl.f3-ns I am passionate about startups, building MVPs, bootstrapping, remote work, and many other topics. #[a(href="#misc") Check out the many topics I love in life].
    #projects.w-100.w-70-l.bg-white.tc.center.overflow-auto.ph2
      h1.f-subheadline-ns.f1 Projects of mine.
      mixin projectSection(titleSection, archiveLink, posts)
        span.tl.f1.pt3.lh-title.fl= titleSection
        .w-100.overflow-auto.pb4-ns
          .db.pa2.w-20-ns.w-50.fl(v-for=posts)
            a(:href="project.permalink")
              .db.h4(:style="{ background: `url('${project.featureImage}') 0% 0% no-repeat`, backgroundSize:`contain`, backgroundPosition:`center top`, backgroundColor:project.color }")
            a(:href="project.permalink")
              h1.dib.f4 {{ project.title }}
            p.f6.mv1  {{ project.slogan }}
            h5.ma0.pa2.white.bg-light-yellow(v-if="project.status === 'paused'") Paused
            h5.ma0.pa2.white.bg-light-green(v-if="project.status === 'in-progress'") In progress
            h5.ma0.pa2.white.bg-light-pink(v-if="project.status === 'not-active'") Not active
            a.db(:href="project.permalink")
              h5.green Read more
          a.dn.dib-ns.f5.fl-ns.center.green.pt6-ns.pl4-ns(href=archiveLink)!=titleSection + ' archive &#8594;'
        a.db.dn-ns.f5.fl-ns.center.green.pt6-ns.pl4-ns.pb4(href=archiveLink)!=titleSection + ' archive &#8594;'
      +projectSection('Freelance', '/freelance', 'project in sortArray(freelancePosts).slice(0, 3)')
      +projectSection('Open source projects', '/opensource', 'project in sortArray(opensourcePosts).slice(0, 3)')
    #contact.w-100.bg-white.tc
      .tc.w-80-m.w-70-l.center.pb4
        h3.f3 Have an idea you want to bounce off someone? #[br] What do you need help with?
        .dib-ns
          a.pr3-l.pb0-l.pb3.dib-l.db(href="mailto:levi@curiosityio.com")
            .button.f5 Email me
          a.pr3-l.pb0-l.pb3.dib-l.db(href="https://twitter.com/levibostian")
            .button.f5 DM me on Twitter
          a(href="https://curiosityio.com")
            .button.f5 Check out freelance services.
</template>

<script>
import Navbar from '~components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  methods: {
    sortArray: function (arrayToSort) {
      return arrayToSort.sort((a, b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date)
      })
    }
  },
  asyncData: async ({ app, route, payload }) => ({
    freelancePosts: await app.$content('/freelance').getAll() || payload,
    opensourcePosts: await app.$content('/opensource').getAll() || payload
  })
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
