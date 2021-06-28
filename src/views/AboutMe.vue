<template>
  <div class="main-view">
    <h3 class="mb-2">Hi! I'm JJ, and I'm currently working as a...</h3>

    <div class="time-block">
      <div class="status">
        <span class="h2">Product Designer in Piktochart</span>
        <!-- <span>2020 - Current</span> -->
      </div>
      <timeline-entry 
        year="Currently"
        position="Product Designer">
        <p>information as Product Designer</p>
      </timeline-entry>
      <timeline-entry 
        year="2020 Dec"
        position="Opogo Case Study">
        <router-link :to="{ name: 'Opogo'}">Experience Haus - Opogo</router-link>
      </timeline-entry>
    </div>

    <div class="time-block">
      <div class="status">
        <span class="h2">UI Developer in Piktochart</span>
        <!-- <span>2016 - 2020</span> -->
      </div>
      <timeline-entry 
        year="2019"
        position="Charles the CSS Corgi">
        <a target="_blank" href="https://codepen.io/JayJay89/full/aNmoYR">Charles the CSS Corgi</a>
      </timeline-entry>
      <timeline-entry 
        year="2018-2019"
        position="Design System">
        <router-link class="mr-2" :to="{ name: 'Design System'}">Design System</router-link>
      </timeline-entry>
      <timeline-entry 
        year="2017"
        position="Training">
        <router-link class="mr-2" :to="{ name: 'Training'}">Training</router-link>
      </timeline-entry>
      <timeline-entry 
        year="2016"
        position="UI Developer">
        <router-link class="mr-2" :to="{ name: 'Training'}">UI Developer Work</router-link>
      </timeline-entry>
    </div>

    <div class="time-block">
      <div class="status">
        <span class="h2">3D Artist/Illustration Artist</span>
        <!-- <span>2016 - 2020</span> -->
      </div>
      <timeline-entry 
        year="2019"
        position="3D Artist/Illustration">
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
        position="New Media Technology">
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