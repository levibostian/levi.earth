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
    post: await app.$content('/products').getAll() || payload
  }),
  data: function () {
    return {
      page: {
        title: 'My products',
        subheader: 'Current and past products I have built and launched (or failed).'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
