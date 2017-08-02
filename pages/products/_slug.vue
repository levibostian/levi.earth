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
    post: await app.$content('/products').get(route.path) || payload
  }),
  data: function () {
    return {
      parent: {
        link: '/products',
        backTitle: 'Back to all of my products'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
