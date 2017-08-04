<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import sideprojectmarketing from '../../../contenttalks/side_project_marketing.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [sideprojectmarketing]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Talks',
        subheader: 'Talks I have given.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
