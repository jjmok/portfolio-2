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
  @import "@/assets/custom-variables";

  .timeline-entry {
    --timeline-year-width: 100px;
    --line-width: 2px;
    --timeline-circ-width: 20px;
    --timeline-padding: #{$spacer-3};
    --timeline-margin: #{$spacer-3};

    @include media-breakpoint-up(md) {
      --timeline-year-width: 125px;
    }

    margin-bottom: $spacer-3;
    position: relative;
    display: flex;
    color: white;
    transform: translateY(0px);
    transition: 
      background-color 0.2s ease,
      transform 0.2s ease;
    text-decoration: none;
    
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
      top: calc(var(--timeline-padding) + 4px) ;
    }

    &::before {
      background-color: red;
      width: var(--line-width);
      height: calc(100% + var(--timeline-margin) + var(--timeline-padding));
      left: calc(var(--timeline-circ-width) / 2 - (var(--line-width) / 2) + var(--timeline-year-width));
      top: calc(var(--timeline-padding) + var(--timeline-circ-width) / 2);
    }

    &:last-child {
      //hide the last line
      &::before {
        display: none;
      }
    }
  }

  .timeline-year {
    width: var(--timeline-year-width);
    display: flex;
    justify-content: flex-end;
    padding-right: $spacer-3;
  }

  .timeline-position {
    width: calc(100% - var(--timeline-year-width));
    padding: var(--timeline-padding) 0;
    padding-left: calc(var(--timeline-circ-width) + #{$spacer-3});
    background-color: $gray-300;
  }
</style>