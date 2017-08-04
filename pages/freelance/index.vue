<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import HowFactoryData from '../../content/freelance/howfactory.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [HowFactoryData]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Freelance work',
        subheader: 'Current and past projects I have built for clients.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
