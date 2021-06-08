<template>
  <div class="main-container">
    <div class="bg-secondary text-white pf-mainview">
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
        <router-link :to="{ name: 'About Me' }">About Me</router-link>

        <button
          @click="activeNav"
          class="btn btn-primary btn-dropdown">
          Nav
        </button>

        <nav 
          v-show="dropdownActive"
          class="menu-dropdown">
          <router-link 
            v-for="(page, index) in miniPage" 
            :key="index"
            :to="{ name: page }"> 
            {{ page }}
          </router-link>
        </nav>
      </nav>
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
      pages: ["About Me", "Case Study", "Developer", "Training", "Creative"],
      miniPage: ["Case Study", "Developer", "Training", "Creative"],
      dropdownActive: false
    }
  },
  methods: {
    activeNav: function () {
      this.dropdownActive = !this.dropdownActive
      console.log ('asdsad');
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
    justify-content: space-between;
    position: relative;

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

  .menu-dropdown {
    display: flex;
    flex-direction: column;
    background-color: red;
    position: absolute;
    top: $nav-height;
    right: 20px;
    padding: 20px;
    z-index: 1;
  }

  .pf-navigation,
  .pf-mainview {
    position: absolute;
  }

  .pf-navigation {
    width: 100vw;
    height: $nav-height;

    .router-link-active {
      color: white;
      font-weight: bold;
    }

    @include media-breakpoint-up(md) { 
      width: $nav-width;
      right: 0;
      top: 0;
      height: 100vh;
    }
  }

  .pf-mainview {
    width: 100vw;
    top: $nav-height;
    height: calc(100vh - #{$nav-height});
    z-index: 1;
    @include media-breakpoint-up(md) { 
      width: calc( 100vw - #{$nav-width} );
      top: 0;
      height: 100vh;
    }
  }

// @include media-breakpoint-up(xs) { ... }
// @include media-breakpoint-up(sm) { ... }
// @include media-breakpoint-up(md) { ... }
// @include media-breakpoint-up(lg) { ... }
// @include media-breakpoint-up(xl) { ... }
</style>


