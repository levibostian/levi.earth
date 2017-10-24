<template lang="pug">
  ProjectPage(v-bind="{post: this.post, parent: this.$data.parent, content: this.markdownContent}")
</template>

<script>
import ProjectPage from '~/components/ProjectPage.vue'
import MarkdownContent from '../../../content/tutorials/create_cocoapod_library.md'
import Data from '../../../content/tutorials/create_cocoapod_library.js'

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
        link: '/archive/tutorials',
        backTitle: 'Back to all of my tutorials'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
