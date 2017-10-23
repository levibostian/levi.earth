<template lang="pug">
  .w-100
    .w-100.hero.min-h-100.top-0.ph2
      .f-subheadline-ns.f1.white.tl.pt6.mw7-ns.center Archive
      .f2-ns.f3.white.tl.mw7-ns.center.pt3.pb3 Collection of stuff I have done.
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
      +projectSection('Products', '/archive/products', 'project in sortArray(productsPosts).slice(0, 3)')
      +projectSection('Freelance projects', '/archive/freelance', 'project in sortArray(freelancePosts).slice(0, 3)')
      +projectSection('Services', '/archive/services', 'project in sortArray(servicesPosts).slice(0, 3)')
      +projectSection('Publications', '/archive/publications', 'project in sortArray(publicationsPosts).slice(0, 3)')
      +projectSection('Open source projects', '/archive/opensource', 'project in sortArray(opensourcePosts).slice(0, 3)')
      +projectSection('Writing', '/archive/writing', 'project in sortArray(writingPosts).slice(0, 3)')
      +projectSection('Mentoring', '/archive/mentoring', 'project in sortArray(mentoringPosts).slice(0, 3)')
      +projectSection('Tutorials', '/archive/tutorials', 'project in sortArray(tutorialsPosts).slice(0, 3)')
      +projectSection('Internships', '/archive/internships', 'project in sortArray(internshipsPosts).slice(0, 3)')
      +projectSection('Talks', '/archive/talks', 'project in sortArray(talksPosts).slice(0, 3)')
    Contact
</template>

<script>
import Contact from '~components/Contact.vue'
import ProjectStatusTag from '~components/ProjectStatusTag.vue'

import altspacevr from '../../content/freelance/altspace_vr.js'
import aplyr from '../../content/freelance/aplyr.js'
import beratek from '../../content/freelance/beratek.js'
import dollup from '../../content/freelance/dollup_beauty.js'
import earmashin from '../../content/freelance/earmashin.js'
import google from '../../content/freelance/google.js'
import howfactory from '../../content/freelance/howfactory.js'
import salesforce from '../../content/freelance/salesforce.js'
import seatboost from '../../content/freelance/seatboost.js'

import onlinecourses from '../../content/products/online_courses.js'
import yourcircle from '../../content/products/your_circle.js'

import curiosityio from '../../content/services/curiosityio.js'
import getinthenet from '../../content/services/get_in_the_net.js'
import lbmodsandrepairs from '../../content/services/lb_mods_and_repairs.js'

import fabric from '../../content/publications/fabric.js'

import donttouchmyscroll from '../../content/opensource/dont_touch_my_scroll.js'
import learnxinyminutes from '../../content/opensource/learnxinyminutes.js'
import lifefeedandroid from '../../content/opensource/lifefeed_android.js'
import shutterandroid from '../../content/opensource/shutter_android.js'
import staticproj from '../../content/opensource/static.js'
import twitterreplybot from '../../content/opensource/twitter_reply_bot.js'

import events from '../../content/writing/events.js'
import health from '../../content/writing/health.js'
import life from '../../content/writing/life.js'
import notes from '../../content/writing/notes.js'
import opinion from '../../content/writing/opinion.js'
import software from '../../content/writing/software.js'
import startup from '../../content/writing/startup.js'

import iowaicad from '../../content/mentoring/iowa_icad.js'
import iowajpec from '../../content/mentoring/iowa_jpec.js'
import iowastartupaccelerator from '../../content/mentoring/iowa_startup_accelerator.js'

import addunittestingcocoapodlibrary from '../../content/tutorials/add_unit_testing_cocoapod_library.js'
import createandroidgradlelibrary from '../../content/tutorials/create_android_gradle_library.js'
import createcocoapodlibrary from '../../content/tutorials/create_cocoapod_library.js'
import removespamgoogleanalytics from '../../content/tutorials/remove_spam_google_analytics.js'

import banno from '../../content/internships/banno.js'
import johndeere from '../../content/internships/john_deere.js'

import sideprojectmarketing from '../../content/talks/side_project_marketing.js'

export default {
  components: {
    Contact,
    ProjectStatusTag
  },
  computed: {
    freelancePosts () {
      return [altspacevr, aplyr, beratek, dollup, earmashin, google, howfactory, salesforce, seatboost]
    },
    productsPosts () {
      return [onlinecourses, yourcircle]
    },
    servicesPosts () {
      return [curiosityio, getinthenet, lbmodsandrepairs]
    },
    publicationsPosts () {
      return [fabric]
    },
    opensourcePosts () {
      return [donttouchmyscroll, learnxinyminutes, lifefeedandroid, shutterandroid, staticproj, twitterreplybot]
    },
    writingPosts () {
      return [events, health, life, notes, opinion, software, startup]
    },
    mentoringPosts () {
      return [iowaicad, iowajpec, iowastartupaccelerator]
    },
    tutorialsPosts () {
      return [addunittestingcocoapodlibrary, createandroidgradlelibrary, createcocoapodlibrary, removespamgoogleanalytics]
    },
    internshipsPosts () {
      return [banno, johndeere]
    },
    talksPosts () {
      return [sideprojectmarketing]
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
