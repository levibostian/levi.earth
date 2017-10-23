<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import events from '../../../content/writing/events.js'
import health from '../../../content/writing/health.js'
import life from '../../../content/writing/life.js'
import notes from '../../../content/writing/notes.js'
import opinion from '../../../content/writing/opinion.js'
import software from '../../../content/writing/software.js'
import startup from '../../../content/writing/startup.js'

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
