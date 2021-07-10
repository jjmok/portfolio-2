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
import {readStore} from "@/store/read-store";

export default {
  name: 'CaseStudyReader',
  props: {
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

      //disabled button on click to prevent the event from firing twice, goes back two pages
      this.isDisabled = true
      readStore.readModeOff()
    }
  },
  data: function () {
    return {
      isDisabled : false
    }
  },
  mounted(){
    readStore.readModeOn()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/prerequisite";

  .close {
    --close-placement: 7rem;
    z-index: var(--zindex-close-button);
    position: sticky;
    top: 20px;
    right: 20px;
    font-size: 4.5rem;
    text-shadow: none;
    color: white;
    // margin-right: calc(var(--close-placement) * -1);
    // margin-top: -4rem;
  }

  .case-container {
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    will-change: opacity, transform;
  }

  .article-container {
    padding: 25px;
    @include media-breakpoint-up(md) {
      padding: 120px 60px 0;
    }
  }
</style>
