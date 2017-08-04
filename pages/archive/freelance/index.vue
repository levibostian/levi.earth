<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import altspacevr from '../../../contentfreelance/altspacevr.js'
import aplyr from '../../../contentfreelance/aplyr.js'
import beratek from '../../../contentfreelance/beratek.js'
import dollup from '../../../contentfreelance/dollup_beauty.js'
import earmashin from '../../../contentfreelance/earmashin.js'
import google from '../../../contentfreelance/google.js'
import howfactory from '../../../contentfreelance/howfactory.js'
import salesforce from '../../../contentfreelance/salesforce.js'
import seatboost from '../../../contentfreelance/seatboost.js'

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
