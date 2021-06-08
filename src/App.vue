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
  @import "@/assets/prerequisite";

  .main-container {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  .pf-sidebar,
  .pf-mainview {
    position: absolute;
  }

  .pf-sidebar {
    width: 100vw;
    height: $sidebar-height;

    @include media-breakpoint-up(md) { 
      width: $sidebar-width;
      right: 0;
      top: 0;
      height: 100vh;
    }
  }

  .pf-mainview {
    width: 100vw;
    top: $sidebar-height;
    height: calc(100vh - #{$sidebar-height});
    z-index: 1;

    @include media-breakpoint-up(md) { 
      width: calc( 100vw - #{$sidebar-width} );
      top: 0;
      height: 100vh;
    }
  }
</style>
