<template lang="pug">
  footer.w-100.bt
    .pv4.ph3.ph5-ns
      .center.pt3.tc
        mixin socialLink(href, image)
          a(href=href target="_blank")
            img.mw2.pa2(src=image)
        +socialLink('https://twitter.com/levibostian', '/img/twitter.svg')
        +socialLink('https://medium.com/@levibostian', '/img/medium.svg')
        +socialLink('https://www.producthunt.com/@levibostian', '/img/product_hunt.svg')
        +socialLink('https://soundcloud.com/levibostian', '/img/soundcloud.svg')
        +socialLink('https://github.com/levibostian', '/img/github.svg')
      .mt4.tc
        mixin footerLink(href, name)
          a.f6.dib.mr3.mr4-ns(href=href)= name
        +footerLink('/products/online_courses', 'Courses')
        +footerLink('/#about', 'About')
        +footerLink('/#contact', 'Contact')
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
