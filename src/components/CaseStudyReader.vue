<!-- Router.go(-1) to go to previous page -->

<template>
  <div class="case-container bg-dark">
    <button
      @click="goBack"
      :class="{disabled: isDisabled}"
      :disabled="isDisabled"
      tag="button" 
      type="button" 
      class="btn close" 
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
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
      
      //disabled button on click to prevent the event from firing twice, goes back two pages
      this.isDisabled = true
    }
  },
  data: function () {
    return {
      isDisabled : false
    }
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
