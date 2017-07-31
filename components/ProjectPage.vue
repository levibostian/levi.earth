<template lang="pug">
  .w-100
    .w-100.min-h-100.top-0.ph2(v-bind:style="{ backgroundColor: $props.post.color }")
      .f-subheadline-ns.f1.white.tl.pt6.mw7-ns.center  {{ $props.post.title }}
      .f2-ns.f3.white.tl.mw7-ns.center.pt3.pb4  {{ $props.post.slogan }}
    a(v-bind:href="this.$props.parent.link")
      h4.w-100.w-70-ns.center.dark-gray.pl3 &#8592; {{ $props.parent.backTitle }}
    .project-content-body.w-100.w-50-ns.bg-white.center.pa3.bb.b--black-10
      h1.f-headline.lh-solid.mv5-ns.mv3 {{ $props.post.title }}
      h3.fr-ns.dib.pa2.white.bg-light-yellow(v-if="$props.post.status === 'paused'") Paused
      h3.fr-ns.dib.pa2.white.bg-light-green(v-if="$props.post.status === 'in-progress'") In progress
      h3.fr-ns.dib.pa2.white.bg-light-pink(v-if="$props.post.status === 'not-active'") Not active
      h1.f4.mb1 Worked on: {{ $props.post.timeline }}
      div.f5 Based out of: {{ $props.post.location }}
      a(:href="$props.post.website" v-if="$props.post.website")
        h3.green Website
      hr
      div(v-html="post.body")
</template>

<script>
export default {
  props: ['post', 'parent']
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
