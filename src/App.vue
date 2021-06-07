<template>
  <div class="main-container">
    <div class="bg-secondary text-white pf-mainview">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <div class="bg-warning d-inline-flex flex-column pf-sidebar">
      <router-link 
        v-for="(page, index) in pages" 
        :key="index"
        :to="{ name: page }"> 
        {{ page }}
      </router-link>

      <!-- <router-link :to="{ name: 'About Me' }">About Me</router-link>
      <router-link :to="{ name: 'Case Study' }">Case Study</router-link>
      <router-link :to="{ name: 'Developer' }">Developer</router-link>
      <router-link :to="{ name: 'Training' }">Training</router-link>
      <router-link :to="{ name: 'Creative' }">Creative</router-link> -->
    </div>
  </div>
  
</template>

<script>
export default {
  name: "App",
  props: {
    msg: String,
  },
  data: function () {
    return {
      pages: ["About Me", "Case Study", "Developer", "Training", "Creative"]
    }
  }
};

</script>

<style lang="scss">
  $sidebar-width: 200px;

  .main-container {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  .pf-sidebar,
  .pf-mainview {
    height: 100vh;
    transition: transform 0.4s;
    position: absolute;
  }

  .pf-sidebar {
    transition: transform 0.3s ease-out;
    transform: translate(0px, 0px);
    width: $sidebar-width;
    right: 0;
    top: 0;
  }

  .pf-mainview {
    width: calc( 100vw - #{$sidebar-width} );
    left: 0;
    top: 0;
    will-change: width;
    transition: 
      width 0.3s ease-out,
      transform 0.3s ease-out,
      opacity 0.3s ease-out;
    transform: translate(0px, 0px);
    z-index: 1;
  }
  
  .read-mode {
    .pf-mainview {
      width: 100vw;
    }
    .pf-sidebar {
      transform: translate(#{$sidebar-width}, 0px);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease-in-out;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
