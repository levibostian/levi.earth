<template lang="pug">
  ProjectPage(v-bind="{post: this.post, parent: this.$data.parent, content: this.markdownContent}")
</template>

<script>
import ProjectPage from '~/components/ProjectPage.vue'
import MarkdownContent from '../../../content/writing/notes.md'
import Data from '../../../content/writing/notes.js'

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
        link: '/archive/writing',
        backTitle: 'Back to all of my writing'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
