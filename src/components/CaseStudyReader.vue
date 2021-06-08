<!-- Router.go(-1) to go to previous page -->

<template>
  <div class="case-container bg-dark">
    <div class="article-container">
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

      //Source: https://stackoverflow.com/a/61433761
      //If link is accessed from an outside source, pressing close btn redirects visitors to the home page instead
      if (window.history.length > 2 ) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
      
      //disabled button on click to prevent the event from firing twice, goes back two
      this.isDisabled = true
    },
    hasHistory () { 
      return window.history.length > 2 
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
  @import "@/assets/prerequisite";
  
  $close-placement: 7rem;

  .close {
    position: sticky;
    top: 20px;
    right: 20px;
    font-size: 4.5rem;
    text-shadow: none;
    color: white;
    margin-right: -$close-placement;
    margin-top: -4rem;
  }

  .case-container {
    overflow: scroll;
    position: absolute;
    top: -$sidebar-height;
    left: 0;
    height: 100vh;
    width: 100vw;
    will-change: transform, opacity;

    @include media-breakpoint-up(md) { 
      top: 0;
    }
  }

  .article-container {
    padding: 120px 240px 0;
  }
</style>
