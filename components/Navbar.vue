<template lang="pug">
  nav.db.dt-l.w-100.border-box.pa3.ph5-l.fixed.top-0.bg-white.bb.z-max
    span.fl
      a(href="/")
        span.green.f5.f4-l.mr3.mr4-l Levi Bostian
    span.fr
      mixin link(href, name)
        a(href=href)
          span.dark-gray.f6.f5-l.mr3.mr4-l= name
      +link('/#about', 'About')
      +link('/#contact', 'Contact')
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
