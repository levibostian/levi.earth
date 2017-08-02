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
    post: await app.$content('/tutorials').getAll() || payload
  }),
  data: function () {
    return {
      page: {
        title: 'Tutorials',
        subheader: 'Tutorials I have created on how to learn something.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
