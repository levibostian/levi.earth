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
    post: await app.$content('/mentoring').getAll() || payload
  }),
  data: function () {
    return {
      page: {
        title: 'Mentoring',
        subheader: 'Current and past groups I have worked with to mentor startups.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
