<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import iowaicad from '../../../contentmentoring/iowa_icad.js'
import iowajpec from '../../../contentmentoring/iowajpec.js'
import iowastartupaccelerator from '../../../contentmentoring/iowa_startup_accelerator.js'

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
