<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~components/ArchivePage.vue'
import addunittestingcocoapodlibrary from '../../../contenttutorials/add_unit_testing_cocoapod_library.js'
import createandroidgradlelibrary from '../../../contenttutorials/create_android_gradle_library.js'
import createcocoapodlibrary from '../../../contenttutorials/create_cocoapod_library.js'
import removespamgoogleanalytics from '../../../contenttutorials/remove_spam_google_analytics.js'

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
