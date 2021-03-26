<template>
  <div class="case-container bg-dark">
    <router-link :to="{ name: 'Case Study' }" 
      tag="button" 
      type="button" 
      class="close" 
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </router-link>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyReader',
  props: {
    studyName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .close {
    position: sticky;
    top: 0;
    left: 0;
    font-size: 4.5rem;
    text-shadow: none;
    float: none;
  }
  .case-container {
    overflow: scroll;
    position: absolute;
    padding-left: 48px;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    will-change: transform, opacity;
  }
</style>
