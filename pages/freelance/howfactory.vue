<template lang="pug">
  ProjectPage(v-bind="{post: this.post, parent: this.$data.parent, content: this.markdownContent}")
</template>

<script>
import ProjectPage from '~components/ProjectPage.vue'
import MarkdownContent from '../../content/freelance/howfactory.md'
import HowFactoryData from '../../content/freelance/howfactory.js'

export default {
  components: {
    ProjectPage
  },
  computed: {
    markdownContent () {
      return MarkdownContent
    },
    post () {
      return HowFactoryData
    }
  },
  data: function () {
    return {
      parent: {
        link: '/freelance',
        backTitle: 'Back to all freelance work'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
