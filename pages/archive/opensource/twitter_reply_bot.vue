<template lang="pug">
  ProjectPage(v-bind="{post: this.post, parent: this.$data.parent, content: this.markdownContent}")
</template>

<script>
import ProjectPage from '~components/ProjectPage.vue'
import MarkdownContent from '../../../contentopensource/twitter_reply_bot.md'
import Data from '../../../contentopensource/twitter_reply_bot.js'

export default {
  components: {
    ProjectPage
  },
  computed: {
    markdownContent () {
      return MarkdownContent
    },
    post () {
      return Data
    }
  },
  data: function () {
    return {
      parent: {
        link: '/opensource',
        backTitle: 'Back to all of my open source projects'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
