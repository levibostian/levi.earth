<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import banno from '../../../content/internships/banno.js'
import johndeere from '../../../content/internships/john_deere.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [banno, johndeere]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Internships',
        subheader: 'Past internships I have the privilege of enjoying.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
