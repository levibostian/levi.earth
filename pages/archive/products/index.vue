<template lang="pug">
  ArchivePage(v-bind="{page: this.$data.page, projects: this.projects}")
</template>

<script>
import ArchivePage from '~/components/ArchivePage.vue'
import onlinecourses from '../../../content/products/online_courses.js'
import yourcircle from '../../../content/products/your_circle.js'

export default {
  components: {
    ArchivePage
  },
  computed: {
    projects () {
      return [onlinecourses, yourcircle]
    }
  },
  data: function () {
    return {
      page: {
        title: 'Products',
        subheader: 'Products I have built and launched (or in the process of).'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
