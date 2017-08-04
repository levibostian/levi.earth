<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import curiosityio from '../../../contentservices/curiosityio.js'
import getinthenet from '../../../contentservices/get_in_the_net.js'
import lbmodsandrepairs from '../../../contentservices/lb_mods_and_repairs.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [curiosityio, getinthenet, lbmodsandrepairs]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Services',
        subheader: 'Past and present services I provide to clients.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
