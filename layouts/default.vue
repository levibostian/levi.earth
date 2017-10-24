<template lang="pug">
  .w-100
    nuxt
    Navbar
    SiteFooter
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    Navbar,
    SiteFooter
  }
}
</script>

<style>
</style>
