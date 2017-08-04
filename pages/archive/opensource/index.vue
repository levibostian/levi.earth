<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import donttouchmyscroll from '../../../contentopensource/dont_touch_my_scroll.js'
import learnxinyminutes from '../../../contentopensource/learnxinyminutes.js'
import lifefeedandroid from '../../../contentopensource/lifefeed_android.js'
import shutterandroid from '../../../contentopensource/shutter_android.js'
import staticproj from '../../../contentopensource/static.js'
import twitterreplybot from '../../../contentopensource/twitter_reply_bot.js'

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
