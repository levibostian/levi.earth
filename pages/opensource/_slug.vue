<template lang="pug">
  .w-100
    h1  {{ post.title }}
    nuxtent-body.mt5(:body="post.body")
    Navbar
</template>

<script>
import Navbar from '~components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  asyncData: async ({ app, route, payload }) => ({
    post: await app.$content('/opensource').get(route.path) || payload
  })
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
