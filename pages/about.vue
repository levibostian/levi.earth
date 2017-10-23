<template lang="pug">
  .w-100
    .w-100.hero.min-h-100.top-0.ph2
      .f-subheadline-ns.f1.white.tl.pt6.mw7-ns.center About me
    #about.w-100.bg-white.tc.center.pt4.overflow-auto
        h1.f1-ns.f2.tc.tr-ns.pt5.dib-ns.ph2.w-50.fl.dn(style="transform:rotate(-3deg);") Hello, there! &#x1F44B;
        img.br-100.mw5.pt2.center.mh0-ns.h5.w-50-ns.w-100.fl-ns(src="/img/levi.jpg")
    .w-100.w-60-m.w-50-l.bg-white.center.pv4.ph2.bb.b--black-10.tc
        h1.tl Who am I?
        p.tl.f3-ns I'm Levi. I'm a startup founder and Android/iOS app developer. I love building things.
        p.tl.f3-ns #[b More about me:] I am born and raised in the Midwest of the United States (specifically Iowa). I am a husband, a freelancer, an environmentalist, minimalist, vegan, rock climber, outdoors lover.
        p.tl.f3-ns #[b More about my geeky side:] I am pretty obsessed with writing software. I have a hard time getting to bed at night because I think about writing code. I spend most of my time building native Android and iOS mobile app. Along with that, I also build APIs for my mobile apps using Nodejs. I used to be a web developer from age 13 to 20 when I then got involved with mobile app development. As of a year ago, I am getting back into web development with Vuejs, Pugjs, Tachyons CSS, Nodejs. My favorite programming language to use at this exact moment is Kotlin with Swift as a close second place.
        p.tl.f3-ns #[b More about me as a startup founder:] I am a startup founder who is passionate about bootstrapping and launching products nice and lean. I find starting businesses this way to be very resourceful, efficient, and very fun from the challenge. I started my first business at the age of 13 by accident where I got talked into building a website for a small business in my hometown (at the time, I had never built a website before but I really wanted to learn). Ever since, I have always had at least 1 business going at any given moment. Currently, I am building SaaS products, mobile apps, and online courses for business products as well as my #[a(href="https://curiosityio.com") freelancing services].
        p.tl.f3-ns I am passionate about startups, building MVPs, bootstrapping, remote work, and many other topics.
        a(href="/archive")
          .button.bg Check out my archive of things I have done.
        script#-clp-578(async='', src='https://withcoach.com/landing_pages/578/embed.js')
    Contact
</template>

<script>
import Contact from '~components/Contact.vue'

export default {
  components: {
    Contact
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
