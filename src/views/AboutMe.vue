<template>
  <div class="main-view">
    <h2 class="mb-2">Hi! I'm JJ, and I'm currently working as a...</h2>

    <div class="time-block">
      <timeline-status job="Product Designer @ Piktochart"/>
      <timeline-entry 
        year="Currently"
        title="Pikto Next"
        LinkTo="Pikto Next">
        Piktonext is the new editor for Piktochart
      </timeline-entry>
      <timeline-entry 
        year="2021"
        title="Color Scheme"
        LinkTo="Color Scheme">
        Color Scheme is the next version of the Piktonext App Color Scheme is the next version of the Piktonext AppColor Scheme is the next version of the Piktonext AppColor Scheme is the next version of the Piktonext AppColor Scheme is the next version of the Piktonext AppColor Scheme is the next version of the Piktonext AppColor Scheme is the next version of the Piktonext AppColor Scheme is the next version of the Piktonext AppColor Scheme is the next version of the Piktonext AppColor Scheme is the next version of the Piktonext App
      </timeline-entry>
      <timeline-entry 
        year="2020 Dec"
        title="Opogo"
        LinkTo="Opogo">
        Opogo is a full case study
      </timeline-entry>
    </div>

    <div class="time-block">
      <timeline-status job="UI Developer @ Piktochart"/>
      <timeline-entry
        href="https://codepen.io/JayJay89/full/aNmoYR"
        target="_blank"
        year="2019"
        title="Charles the CSS Corgi">
        Charles is made from CSS
      </timeline-entry>
      <timeline-entry 
        year="2018-2019"
        title="Design System"
        LinkTo="Design System">
        Working as UI dev I worked with establishing the initial design system
      </timeline-entry>
      <timeline-entry 
        year="2017"
        title="Training"
        LinkTo="Training">
        I've conducted CSS trainings
      </timeline-entry>
    </div>

    <div class="time-block">
      <timeline-status job="3D Artist/Illustration Artist"/>
      <timeline-entry 
        year="2019"
        title="3D/Illustration"
        LinkTo="Graphical">
        To be worked on...
      </timeline-entry>
    </div>

    <div class="time-block">
      <timeline-status job="Education"/>
      <timeline-entry 
        year="2009 - 2012"
        title="New Media Technology">
        to be worked on
      </timeline-entry>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TimelineEntry from '@/components/TimelineEntry.vue'
import TimelineStatus from '@/components/TimelineStatus.vue'


export default {
  name: "AboutMe",
  components: {
    TimelineEntry,
    TimelineStatus
  },
};
</script>

<style lang="scss">
  @import "@/assets/prerequisite";

  .time-block {
    display: flex;
    flex-direction: column;
    margin-bottom: $spacer-5;
  }
</style>