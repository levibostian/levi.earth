<template lang="pug">
  ProjectPage(v-bind="{post: this.post, parent: this.$data.parent, content: this.markdownContent}")
</template>

<script>
import ProjectPage from '~/components/ProjectPage.vue'
import MarkdownContent from '../../../content/internships/banno.md'
import Data from '../../../content/internships/banno.js'

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
        link: '/archive/internships',
        backTitle: 'Back to all of my internships'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
