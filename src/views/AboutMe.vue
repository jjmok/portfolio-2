<template>
  <div class="main-view">
    <h2 class="mb-2">Hi! I'm JJ, and I'm currently working as a...</h2>

    <div class="time-block">
      <div class="status">
        <span class="h2">Product Designer in Piktochart</span>
      </div>
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
        Color Scheme is the next version of the Piktonext App
      </timeline-entry>
      <timeline-entry 
        year="2020 Dec"
        title="Opogo"
        LinkTo="Opogo">
        Opogo is a full case study
      </timeline-entry>
    </div>

    <div class="time-block">
      <div class="status">
        <span class="h2">UI Developer in Piktochart</span>
      </div>
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
      <div class="status">
        <span class="h2">3D Artist/Illustration Artist</span>
      </div>
      <timeline-entry 
        year="2019"
        title="3D/Illustration"
        LinkTo="Graphical">
        To be worked on...
      </timeline-entry>
    </div>

    <div class="time-block">
      <div class="status">
        <span class="h2">Education</span>
        <!-- <span>2016 - 2020</span> -->
      </div>
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


export default {
  name: "AboutMe",
  components: {
    TimelineEntry
  },
};
</script>

<style lang="scss">
  @import "@/assets/prerequisite";

  .time-block {
    display: flex;
    flex-direction: column;
    margin-bottom: $spacer-5;

    @include media-breakpoint-up(md) {
      display: inline-flex;
      width: 100%;
    }
  }

  .status {
    display: flex;
    flex-direction: column;
  }

</style>