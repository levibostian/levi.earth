<template lang="pug">
  .w-100
    Navbar
    .w-100.hero.min-h-100.top-0.ph2
      .f-subheadline-ns.f1.white.tl.pt6.mw7-ns.center Levi Bostian
      .f2-ns.f3.white.tl.mw7-ns.center.pt3.pb3 Startup founder and mobile app developer obsessed with productivity.
    #about.w-100.bg-white.tc.center.pt4.overflow-auto
        h1.f1-ns.f2.tc.tr-ns.pt5.dib-ns.ph2.w-50.fl.dn(style="transform:rotate(-3deg);") Hello, there! &#x1F44B;
        img.br-100.mw5.pt2.center.mh0-ns.h5.w-50-ns.w-100.fl-ns(src="img/levi.jpg")
    .w-100.w-60-m.w-50-l.bg-white.center.pv4.ph2.bb.b--black-10.tc
        p.tl.f3-ns Hello there, I'm Levi.
        p.tl.f3-ns I am a husband, startup founder, and Android and iOS developer. I make Android, iOS and web apps using Kotlin, Swift, Vuejs, Nodejs, and Docker.
        p.tl.f3-ns As a startup founder and freelancer, I am drowning in todo list tasks. I have developed techniques and tools to write better code with less bugs in less time.
        a(href="https://levibostian.withcoach.com/app-dev-productivity")
          .button.bg Get early access to my online courses designed for mobile app developers.
        p.tl.f3-ns I am passionate about startups, building MVPs, bootstrapping, remote work, and many other topics.
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
            ProjectStatusTag(v-bind="{post: project}")
            a.db(:href="project.permalink")
              h5.green Read more
          a.dn.dib-ns.f5.fl-ns.center.green.pt6-ns.pl4-ns(href=archiveLink)!=titleSection + ' archive &#8594;'
        a.db.dn-ns.f5.fl-ns.center.green.pt6-ns.pl4-ns.pb4(href=archiveLink)!=titleSection + ' archive &#8594;'
      //- +projectSection('Products', '/products', 'project in sortArray(productsPosts).slice(0, 3)')
      +projectSection('Freelance projects', '/freelance', 'project in sortArray(freelancePosts).slice(0, 3)')
      //- +projectSection('Services', '/services', 'project in sortArray(servicesPosts).slice(0, 3)')
      //- +projectSection('Open source projects', '/opensource', 'project in sortArray(opensourcePosts).slice(0, 3)')
      //- +projectSection('Writing', '/writing', 'project in sortArray(writingPosts).slice(0, 3)')
      //- +projectSection('Mentoring', '/mentoring', 'project in sortArray(mentoringPosts).slice(0, 3)')
      //- +projectSection('Tutorials', '/tutorials', 'project in sortArray(tutorialsPosts).slice(0, 3)')
      //- +projectSection('Internships', '/internships', 'project in sortArray(internshipsPosts).slice(0, 3)')
      //- +projectSection('Talks', '/talks', 'project in sortArray(talksPosts).slice(0, 3)')
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
    script#-clp-1502(async='', src='https://withcoach.com/landing_pages/1502/embed.js')
</template>

<script>
import Navbar from '~components/Navbar.vue'
import ProjectStatusTag from '~components/ProjectStatusTag.vue'
import HowFactoryData from '../content/freelance/howfactory.js'

export default {
  components: {
    ProjectStatusTag,
    Navbar
  },
  computed: {
    freelancePosts () {
      return [HowFactoryData]
    }
  },
  methods: {
    sortArray: function (arrayToSort) {
      return arrayToSort.sort((a, b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date)
      })
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
