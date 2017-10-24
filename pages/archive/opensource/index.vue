<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~/components/ArchivePage.vue'
import donttouchmyscroll from '../../../content/opensource/dont_touch_my_scroll.js'
import learnxinyminutes from '../../../content/opensource/learnxinyminutes.js'
import lifefeedandroid from '../../../content/opensource/lifefeed_android.js'
import shutterandroid from '../../../content/opensource/shutter_android.js'
import staticproj from '../../../content/opensource/static.js'
import twitterreplybot from '../../../content/opensource/twitter_reply_bot.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [donttouchmyscroll, learnxinyminutes, lifefeedandroid, shutterandroid, staticproj, twitterreplybot]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Open source projects',
        subheader: 'Open source projects I have created and contributed to.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
