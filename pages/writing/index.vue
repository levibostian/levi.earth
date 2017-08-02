<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.$data.post}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'

export default {
  components: {
    ArchivePage
  },
  asyncData: async ({ app, route, payload }) => ({
    post: await app.$content('/writing').getAll() || payload
  }),
  data: function () {
    return {
      page: {
        title: 'Writing',
        subheader: 'Topics that I enjoy writing about. My blog: http://levibostian.com/blog/'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
