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
    post: await app.$content('/talks').getAll() || payload
  }),
  data: function () {
    return {
      page: {
        title: 'Talks',
        subheader: 'Current and past talks I have given.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
