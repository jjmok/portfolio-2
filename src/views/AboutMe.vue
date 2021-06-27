<template>
  <div class="main-view">
    <h2>Hi! my name is Jee Jin. Welcome to my portfolio site!</h2>
    <p>This is a work in progress</p>

    <div class="time-block">
      <div class="status">
        <span>2020 - Current</span>
        <span class="h3">Product Designer</span>
      </div>
      <div class="timeline">
        <div class="timeline-entry">
          <p class="h5">Product Designer - More info with it</p>
          <p>sadasd a asd asd as</p>
        </div>
        <div class="timeline-entry">
          <router-link class="h5" :to="{ name: 'Opogo'}">Experience Haus - Opogo</router-link>
          <p>asdasd</p>
        </div>
        <div class="timeline-entry">
          <p>asdasd</p>
          <p>asdasd</p>
        </div>
      </div>
    </div>

    <div class="time-block">
      <div class="status">
        <span>2016 - 2020</span>
        <span class="h3">UI Developer</span>
      </div>
      <div class="timeline">
        <div class="timeline-entry">
          <p class="h5">
            2019 - <a target="_blank" href="https://codepen.io/JayJay89/full/aNmoYR">Charles the CSS Corgi</a>
          </p>
          <p>asdas jhkas dhjk haksd</p>
        </div>
        <div class="timeline-entry">
          <p class="h5">
            2017 - <router-link class="mr-2" :to="{ name: 'Training'}">Training</router-link>
          </p>
        </div>
        <div class="timeline-entry">
          <p class="h5">
            2018 - <router-link class="mr-2" :to="{ name: 'Design System'}">Design System</router-link>
          </p>
        </div>
        <div class="timeline-entry">
          2016 - <router-link class="mr-2" :to="{ name: 'Pikto'}">UI Developer Work</router-link>
        </div>
      </div>
    </div>

    <div class="time-block">
      <div class="status">
        <span>2009 - 2012</span>
        <span class="h3">Education</span>
      </div>
      <div class="timeline">
        <div class="timeline-entry">
          USM
        </div>
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
  $timeline-circ-width: 20px;
  $timeline-side-padding: $spacer-3;
  $timeline-top-padding: $spacer-3;
  $line-width: 2px;

  .time-block {
    display: flex;
    flex-direction: column;
    margin-bottom: $spacer-5;
    background-color: grey;

    @include media-breakpoint-up(md) {
      display: inline-flex;
      flex-direction: row;
      width: 100%;
    }
  }

  .timeline-entry {
    padding: $timeline-top-padding 0 $timeline-top-padding calc( #{$timeline-circ-width * 3});
    position: relative;

    &::after,
    &::before {
      content: "";
      display: flex;
      position: absolute;
    }

    &::after {
      width: $timeline-circ-width;
      height: $timeline-circ-width;
      border-radius: 50%;
      background-color: red;
      left: $timeline-side-padding;
      top: calc(#{$timeline-top-padding} + #{$timeline-circ-width} / 2);
      transform: translateY(-50%);
    }

    &::before {
      background-color: yellow;
      width: $line-width;
      height: 100%;
      left: calc(#{$timeline-circ-width / 2} - #{$line-width / 2} + #{$timeline-side-padding});
      top: calc(#{$timeline-top-padding} + #{$timeline-circ-width} / 2);
    }

    &:last-child {
      //hide the last line
      &::before {
        display: none;
      }
    }
  }

  .status {
    display: flex;
    flex-direction: column;

    @include media-breakpoint-up(md) {
      width: $status-width;
      padding-top: $timeline-top-padding;
    }
  }

  .timeline {
    width: calc(100%);
    position: relative;
  }
</style>