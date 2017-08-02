<template lang="pug">
  ProjectPage(v-bind="{post: this.$data.post, parent: this.$data.parent}")
</template>

<script>
import ProjectPage from '~components/ProjectPage.vue'

export default {
  components: {
    ProjectPage
  },
  asyncData: async ({ app, route, payload }) => ({
    post: await app.$content('/writing').get(route.path) || payload
  }),
  data: function () {
    return {
      parent: {
        link: '/writing',
        backTitle: 'Back to all of my writing'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
