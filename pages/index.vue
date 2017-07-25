<template lang="pug">
  .w-100
    Navbar
    .w-100.hero.min-h-100.top-0.ph2
      .f-subheadline-ns.f1.white.tl.pt6.mw7-ns.center Levi Bostian
      .f2-ns.f3.white.tl.mw7-ns.center.pt3.pb3 Building the next great app.
    #about.w-100.w-70-ns.bg-white.tc.flex.flex-row-ns.flex-column.justify-center.center.pt4
        h1.f1-ns.f2.tc.tr-ns.pt5.dib-ns.ph2(style="transform:rotate(-3deg);") Hello, there!
        img.dib-ns.mw3.pr4-ns.pb3.dn(src="img/wave.svg")
        img.br-100.mw5.pt2.center.mh0-ns.h5(src="img/levi.jpg")
    .w-100.w-50-ns.bg-white.center.pv4.ph2.bb.b--black-10.tc
        p.tl.f3-ns Hello there, I'm Levi.
        p.tl.f3-ns Husband, Internet Entrepreneur, software developer. I make Android, iOS and web apps. Kotlin, Swift, Vuejs, Nodejs, Docker.
        p.tl.f3-ns I am a full-time Internet Entrepreneur and Software Developer with way too many ideas.
          | Because of this, #[b I am obsessed with productivity]. I am always finding ways to improve my development
          | skills and be able to build better apps faster.
        a(href="#")
          .button.bg Mobile app developer looking to build #[i better software faster]?
        p.tl.f3-ns I am passionate about startups, building MVPs, bootstrapping, remote work, and many other topics. #[a(href="#misc") Check out the many topics I love in life].
    #contact.w-100.bg-white.tc
      .tc.w-80-m.w-70-l.center.pb4
        h1 Have an idea you want to bounce off someone? #[br] What do you need help with?
        .dib-ns
          a.pr3-l.pb0-l.pb3.dib-l.db(href="mailto:levi@curiosityio.com")
            .button Email me
          a.pr3-l.pb0-l.pb3.dib-l.db(href="https://twitter.com/levibostian")
            .button DM me on Twitter
          a(href="https://curiosityio.com")
            .button Check out freelance services.
        .center.pt3
          a(href="https://twitter.com/levibostian" target="_blank")
            img.mw2.pa1(src="img/twitter.svg")
          a(href="https://medium.com/@levibostian" target="_blank")
            img.mw2.pa1(src="img/medium.svg")
          a(href="https://www.producthunt.com/@levibostian" target="_blank")
            img.mw2.pa1(src="img/product_hunt.svg")
          a(href="https://soundcloud.com/levibostian" target="_blank")
            img.mw2.pa1(src="img/soundcloud.svg")
          a(href="https://github.com/levibostian" target="_blank")
            img.mw2.pa1(src="img/github.svg")
</template>

<script>
import Navbar from '~components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
