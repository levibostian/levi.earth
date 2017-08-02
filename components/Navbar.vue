<template lang="pug">
  nav.db.dt-l.w-100.border-box.pa3-ns.pa2.ph5-l.fixed.top-0.bg-white.bb.z-999.tl-ns.tc
    span.fl-ns.db.dib-ns.pb2.pb0-ns
      a(href="/")
        span.green.f5.f4-l.mr3.mr4-l Levi Bostian
    span.fr-ns.db.dib-ns
      mixin link(href, name)
        a(href=href)
          span.dark-gray.f6.f5-l.mr3.mr4-l= name
      +link('/products/online_courses', 'Courses')
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
