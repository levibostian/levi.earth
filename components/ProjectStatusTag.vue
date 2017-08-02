<template lang="pug">
  div
    h3.f5.fr-l.dib.pa2.white.bg-light-green(v-if="$props.post.status === 'active'") Active
    h3.f5.fr-l.dib.pa2.white.bg-gold(v-if="$props.post.status === 'in-dev'") In development
    h3.f5.fr-l.dib.pa2.white.bg-orange(v-if="$props.post.status === 'paused'") Paused
    h3.f5.fr-l.dib.pa2.white.bg-pink(v-if="$props.post.status === 'not-active'") Not active
    h3.f5.fr-l.dib.pa2.white.bg-gray(v-if="$props.post.status === 'graveyard'") Graveyard
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
