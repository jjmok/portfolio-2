<template>

  <div class="timeline-entry">
    <div class="timeline-year">
      {{ year }}
    </div>
    <div class="timeline-position">
      <p class="h4">
        {{ position }}
      </p>
      <p>
        <slot/>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineEntry',
  props: {
    year: String,
    position: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/prerequisite";


  .timeline-entry {
    --timeline-year-width: 100px;
    --line-width: 2px;
    --timeline-circ-width: 20px;
    --timeline-top-padding: #{$spacer-3};

    @include media-breakpoint-up(md) {
      --timeline-year-width: 125px;
    }

    padding: var(--timeline-top-padding) 0;
    position: relative;
    display: flex;

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
      top: calc(var(--timeline-top-padding) + var(--timeline-circ-width) / 2);
      transform: translateY(-50%);
    }

    &::before {
      background-color: red;
      width: var(--line-width);
      height: 100%;
      left: calc(var(--timeline-circ-width) / 2 - (var(--line-width) / 2) + var(--timeline-year-width));
      top: calc(var(--timeline-top-padding) + var(--timeline-circ-width) / 2);
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
    padding-left: calc(var(--timeline-circ-width) + #{$spacer-3});
  }
</style>