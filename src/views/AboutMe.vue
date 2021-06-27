<template>
  <div class="main-view">
    <h2>Hi! my name is Jee Jin. Welcome to my portfolio site!</h2>
    <p>This is a work in progress</p>

    <div class="pf-timeline-entry">
      <div class="pf-status">
        <span>2020 - Current</span>
        <span>Product Designer</span>
      </div>
      <div class="pf-timeline">
        <p>Product Designer</p>
        <p><router-link class="mr-2" :to="{ name: 'Opogo'}">Experience Haus - Opogo</router-link></p>
      </div>
    </div>

    <div class="pf-timeline-entry">
      <div class="pf-status">
        <span>2016 - 2020</span>
        <span>UI Developer</span>
      </div>
      <div class="pf-timeline">
        <p>
          2019 - <a target="_blank" href="https://codepen.io/JayJay89/full/OKOdma">Charles the CSS Corgi</a>
        </p>
        <p>
          2017 - <router-link class="mr-2" :to="{ name: 'Training'}">Training</router-link> 
        </p>
        <p>
          2018 - <router-link class="mr-2" :to="{ name: 'Design System'}">Design System</router-link>
        </p>
        <p>
          2016 - <router-link class="mr-2" :to="{ name: 'Pikto'}">UI Developer Work</router-link>
        </p>
      </div>
    </div>

    <div class="pf-timeline-entry">
      <div class="pf-status">
        <span>2009 - 2012</span>
        <span>Education</span>
      </div>
      <div class="pf-timeline">
        <p>USM</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "AboutMe",
};
</script>

<style lang="scss">
  @import "@/assets/prerequisite";
  $status-width: 220px;

  .pf-timeline-entry {
    display: flex;
    flex-direction: column;

    margin-bottom: $spacer-5;
    @include media-breakpoint-up(md) {
      display: inline-flex;
      flex-direction: row;
    }
  }

  .pf-status {
    background: red;
    display: flex;
    flex-direction: column;
    width: $status-width;
  }

  .pf-timeline {
    background: blue;
    width: calc(100%)
  }
</style>