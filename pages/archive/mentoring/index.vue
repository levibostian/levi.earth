<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~/components/ArchivePage.vue'
import iowaicad from '../../../content/mentoring/iowa_icad.js'
import iowajpec from '../../../content/mentoring/iowa_jpec.js'
import iowastartupaccelerator from '../../../content/mentoring/iowa_startup_accelerator.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [iowaicad, iowajpec, iowastartupaccelerator]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Mentoring',
        subheader: 'Programs I mentor startups with.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
