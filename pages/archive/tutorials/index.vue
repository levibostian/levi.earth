<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~/components/ArchivePage.vue'
import addunittestingcocoapodlibrary from '../../../content/tutorials/add_unit_testing_cocoapod_library.js'
import createandroidgradlelibrary from '../../../content/tutorials/create_android_gradle_library.js'
import createcocoapodlibrary from '../../../content/tutorials/create_cocoapod_library.js'
import removespamgoogleanalytics from '../../../content/tutorials/remove_spam_google_analytics.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [addunittestingcocoapodlibrary, createandroidgradlelibrary, createcocoapodlibrary, removespamgoogleanalytics]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Tutorials',
        subheader: 'Tutorials I have created.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
