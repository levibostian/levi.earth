<template lang="pug">
  ProjectPage(v-bind="{post: this.post, parent: this.$data.parent, content: this.markdownContent}")
</template>

<script>
import ProjectPage from '~/components/ProjectPage.vue'
import MarkdownContent from '../../../content/mentoring/iowa_jpec.md'
import Data from '../../../content/mentoring/iowa_jpec.js'

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
        link: '/archive/mentoring',
        backTitle: 'Back to all of my mentoring'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
