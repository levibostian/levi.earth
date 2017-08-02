<template lang="pug">
  .w-100
    .w-100.hero.min-h-100.top-0.ph2
      .f-subheadline-ns.f1.white.tl.pt6.mw7-ns.center {{ $props.page.title }}
      .f2-ns.f3.white.tl.mw7-ns.center.pt3.pb3 {{ $props.page.subheader }}
    .w-100.bg-white.center.pa2.bb.b--black-10.tl.overflow-auto
      .db.pa4-ns.pa2.w-50-ns.w-100.fl(v-for="project in sortArray($props.projects)")
        a(:href="project.permalink")
          .db.h5(:style="{ background: `url('${project.featureImage}') 0% 0% no-repeat`, backgroundSize:`contain`, backgroundPosition:`center top`, backgroundColor:project.color }" v-if="project.featureImage")
          .db.h5(:style="{ background: `url('${project.featureImage}') 0% 0% no-repeat`, backgroundSize:`cover`, backgroundPosition:`center top`, backgroundColor:project.color }" v-else)
        a(:href="project.permalink")
          h1.dib-ns.f1.mv4-ns.mv2 {{ project.title }}
        ProjectStatusTag(v-bind="{post: project}")
        h5.f4.mv1  {{ project.slogan }}
        p.mv2  {{ project.description }}
        h5.mv2 Worked on: {{ project.timeline }}
        a(:href="project.permalink")
          h5.green Read more
</template>

<script>
import ProjectStatusTag from '~components/ProjectStatusTag.vue'

export default {
  components: {
    ProjectStatusTag
  },
  methods: {
    sortArray: function (arrayToSort) {
      return arrayToSort.sort((a, b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date)
      })
    }
  },
  props: ['page', 'projects']
}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
