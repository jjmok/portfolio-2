<template>
  <div
    :class="{readmode: readModeStatus}"
    class="main-container">
    <div class="pf-mainview text-white">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    
    <div class="bg-warning pf-navigation">
      <nav class="pf-desktop-nav">
        <router-link 
          v-for="(page, index) in pages" 
          :key="index"
          :to="{ name: page }"> 
          {{ page }}
        </router-link>
      </nav>
      <nav class="pf-mobile-nav">
        <router-link
          class="mr-3"
          v-for="(page, index) in pages" 
          :key="index"
          :to="{ name: page }"> 
          {{ page }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import {readStore} from "@/store/read-store";

export default {
  name: "App",
  props: {
    msg: String,
  },
  data: function () {
    return {
      pages: ["About Me", "Case Study", "Works"],
    }
  },
  computed: {
    readModeStatus() {
      return readStore.state.readmode
    }
  }
};

</script>

<style lang="scss">
  @import "@/assets/prerequisite";
  
  .btn-dropdown {
    display: inline-block;

    @include media-breakpoint-up(md) {
      display: none !important;
    }
  }

  .pf-desktop-nav {
    display: none;

    @include media-breakpoint-up(md) {
      display: inline-flex;
      flex-direction: column;
    }
  }

  .pf-mobile-nav {
    display: flex;
    align-items: center;
    position: relative;
    height: var(--nav-height);
    padding: 0px $spacer-3;

    @include media-breakpoint-up(md) {
      display: none;
    }
  }

  .main-container {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  .pf-navigation,
  .pf-mainview {
    position: absolute;
  }

  .pf-navigation {
    width: 100vw;
    height: var(--nav-height);
    transform: translate(0px, 0px);
    transition: transform var(--trans-speed) ease;

    .router-link-active {
      color: white;
      font-weight: bold;
    }

    .readmode & {
      transform: translateY(calc(var(--nav-height) * -1));
    }

    @include media-breakpoint-up(md) { 
      width: var(--nav-width);
      right: 0;
      top: 0;
      height: 100vh;

      .readmode & {
        transform: translate(var(--nav-width), 0px);
      }
    }
  }

  .pf-mainview {
    width: 100vw;
    height: 100vh;
    background-color: gray;

    @include media-breakpoint-up(md) { 
      transform: translateY(0px);
      height: 100vh;

      .readmode & {
        width: 100vw;
      }
    }
  }
</style>


