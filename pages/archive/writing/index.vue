<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import events from '../../../contentwriting/events.js'
import health from '../../../contentwriting/health.js'
import life from '../../../contentwriting/life.js'
import notes from '../../../contentwriting/notes.js'
import opinion from '../../../contentwriting/opinion.js'
import software from '../../../contentwriting/software.js'
import startup from '../../../contentwriting/startup.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [events, health, life, notes, opinion, software, startup]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Writing',
        subheader: 'Topics I write about.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
