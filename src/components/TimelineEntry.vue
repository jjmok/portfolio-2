<template>
  <router-link
    :to="{ name: LinkTo}"
    class="timeline-entry">
    <div class="timeline-year">
      {{ year }}
    </div>
    <div class="timeline-position">
      <p class="h4">
        {{ title }}
      </p>
      <p>
        <slot/>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'TimelineEntry',
  props: {
    year: String,
    title: String,
    LinkTo: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/prerequisite";

  .timeline-entry {
    --timeline-year-width: 0px;
    --line-width: 2px;
    --timeline-circ-width: 16px;
    --timeline-padding: #{$spacer-3};

    @include media-breakpoint-up(sm) {
      --timeline-year-width: 125px;
      --timeline-circ-width: 20px;
      --line-width: 3px;
    }

    margin-bottom: $spacer-3;
    position: relative;
    display: flex;
    color: white;
    flex-direction: column;
    transform: translateY(0px);
    transition: 
      background-color 0.2s ease,
      transform 0.2s ease;
    text-decoration: none;
    
    @include media-breakpoint-up(sm) {
      flex-direction: row;
    }


    &:hover {
      text-decoration: none;
      // background-color: lightgrey;
      transform: translateY(-4px);
    }

    &::after,
    &::before {
      content: "";
      display: flex;
      position: absolute;
    }

    &::after {
      width: var(--timeline-circ-width);
      height: var(--timeline-circ-width);
      border-radius: 50%;
      background-color: blue;
      left: var(--timeline-year-width);
      top: 4px;
      // left: 0;
      // top: 0;
      @include media-breakpoint-up(sm) {
        top: calc(var(--timeline-padding) + 4px);
      }
    }

    &::before {
      background-color: red;
      width: var(--line-width);
      height: calc(100%);
      left: calc(var(--timeline-circ-width) / 2 - (var(--line-width) / 2) + var(--timeline-year-width));
      top: calc(var(--timeline-padding) + var(--timeline-circ-width) / 2);

      @include media-breakpoint-up(sm) {
        height: calc(var(--timeline-padding) + 100%);
      }
    }

    &:last-child {
      //hide the last line
      &::before {
        display: none;
      }
    }
  }

  .timeline-year {
    margin-left: calc(var(--timeline-circ-width) + #{$spacer-3});
    width: 100%;
    display: flex;

    @include media-breakpoint-up(sm) {
      margin: 0;
      width: var(--timeline-year-width);
      padding-right: $spacer-3;
      padding-top: var(--timeline-padding);
      justify-content: flex-end;
    }
  }

  .timeline-position {
    padding: $spacer-3;
    padding-left: calc(var(--timeline-circ-width) + #{$spacer-3});
    background-color: $gray-600;

    @include media-breakpoint-up(sm) {
      width: calc(100% - var(--timeline-year-width));
      margin-left: calc(var(--timeline-circ-width) + #{$spacer-3});
      padding: var(--timeline-padding);
    }  
  }
</style>