<template lang="pug">
  .w-100
    .w-100.hero.min-h-100.top-0.ph2
      .f-subheadline-ns.f1.white.tl.pt6.mw7-ns.center Levi Bostian
      .f2-ns.f3.white.tl.mw7-ns.center.pt3.pb3 Indie Android/iOS app developer building and launching apps.
    #about.w-100.bg-white.tc.center.pt4.overflow-auto
        h1.f1-ns.f2.tc.tr-ns.pt5.dib-ns.ph2.w-50.fl.dn(style="transform:rotate(-3deg);") Hello, there! &#x1F44B;
        img.br-100.mw5.pt2.center.mh0-ns.h5.w-50-ns.w-100.fl-ns(src="img/levi.jpg")
    .w-100.w-60-m.w-50-l.bg-white.center.pv4.ph2.bb.b--black-10.tc
        p.tl.f3-ns I'm Levi.
        p.tl.f3-ns I'm an indie app developer building and launching Android/iOS apps.
    #app_dev.w-100.w-60-m.w-50-l.bg-white.tc.center.pt4.overflow-auto
        h1.tl.f3-ns Yup. I'm a geek.
        p.tl.f3-ns I have been building mobile apps over 4 years and writing code since I was 13. I have built mobile apps for #[a(href="/archive/freelance/google") Google] and #[a(href="/archive/freelance/salesforce") Salesforce] as well as #[a(href="/archive/freelance") a dozen startups around the country]. I belong to the #[a(href="https://firebase.google.com/") Firebase] Alpha and #[a(href="https://realm.io/") Realm] MVP programs.
        p.tl.f3-ns As someone with #[i wayyyyy] too many ideas and a freelancer working with multiple clients, my todo list is quite large. With that in mind, I have learned tools, libraries, techniques to write more code with less bugs.
        p.tl.f3-ns To start, check out my highly rated tutorials on #[a(href="http://levibostian.com/blog/create-android-gradle-lib/") how to build an Android library for Gradle] or #[a(href="http://levibostian.com/blog/create-cocoapod/") how to build an iOS library for Cocoapods] so you can reuse your code across multiple projects. Or check out my favorite #[a(href="http://levibostian.com/blog/favorite-android-open-source-libs/") Android] and #[a(href="http://levibostian.com/blog/favorite-ios-open-source-libs/") iOS] open source libraries for mobile app developers.
        img(src='/img/tutorials/gradle_android_library/feedback_1.png')
        img(src='/img/tutorials/gradle_android_library/feedback_5.png')
        script#-clp-1502(async='', src='https://withcoach.com/landing_pages/1502/embed.js')
        a(href="#building")
          h1.tl.f3-ns Check out what I am currently building.
    #founder.w-100.w-60-m.w-50-l.bg-white.tc.center.pt4.overflow-auto
        h1.tl.f3-ns There is 1 thing I love as much as building apps. Launching them.
        p.tl.f3-ns While in college, I worked for a startup for 2 years from 30 employees to when we got acquired. Through this experience, I found that the startup world is where I get excited. I started my first tech business at the age of 13 (by accident!) and ever since I have had at least 1 business going on at any given time.
        p.tl.f3-ns Most recently, #[b I have the exciting news] of sharing that one of my products #[a(href="http://levibostian.com/blog/1-033-days-for-my-first-customer/") got it's first customer]! This is exciting because I have only been working on this project for, you know, only 1,033 days. #[a(href="http://levibostian.com/blog/1-033-days-for-my-first-customer/") Check out part 1 of my story on this project of mine].
        h1#building.tl.f3-ns What am I currently building?
        p.tl.f3-ns I am building an Android and iOS app for a startup #[a(href="/archive/freelance/howfactory") HowFactory], launching my app #[a(href="/archive/products/your-circle") Your Circle] to the app stores, and building #[a(href="https://learn.levibostian.com/levelup_app_dev") online courses for indie Android/iOS devs] to launch more apps with less bugs.
        script#-clp-578(async='', src='https://withcoach.com/landing_pages/578/embed.js')
    .w-100.w-60-m.w-50-l.center
      p.tl.f3-ns If you want to know #[even more] about myself and who I am outside of geeky business stuff, check out my #[a(href="/about") about page] or my #[a(href="/archive") archive of things I have done].
    Contact
</template>

<script>
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Contact
  }
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
