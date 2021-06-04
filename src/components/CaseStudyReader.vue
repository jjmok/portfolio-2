<!-- Router.go(-1) to go to previous page -->

<template>
  <div class="case-container bg-dark">
    <button
      @click="$router.go(-1)" 
      tag="button" 
      type="button" 
      class="close" 
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <slot/>
  </div>
</template>

<script>
// import VueRouter from 'vue-router'
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
    right: 0;
    font-size: 4.5rem;
    text-shadow: none;
    color: white;
  }
  .case-container {
    overflow: scroll;
    position: absolute;
    padding: 120px 240px 0;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    will-change: transform, opacity;
  }
</style>
