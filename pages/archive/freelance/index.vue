<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~/components/ArchivePage.vue'
import altspacevr from '../../../content/freelance/altspace_vr.js'
import aplyr from '../../../content/freelance/aplyr.js'
import beratek from '../../../content/freelance/beratek.js'
import dollup from '../../../content/freelance/dollup_beauty.js'
import earmashin from '../../../content/freelance/earmashin.js'
import google from '../../../content/freelance/google.js'
import howfactory from '../../../content/freelance/howfactory.js'
import salesforce from '../../../content/freelance/salesforce.js'
import seatboost from '../../../content/freelance/seatboost.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [altspacevr, aplyr, beratek, dollup, earmashin, google, howfactory, salesforce, seatboost]
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
