<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~/components/ArchivePage.vue'
import fabric from '../../../content/publications/fabric.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [fabric]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Publications',
        subheader: 'Articles, blogs featuring myself.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
