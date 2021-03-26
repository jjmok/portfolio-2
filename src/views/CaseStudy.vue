<template>
  <div>
    <div>
      <h1>Case Study</h1>
      <router-link :to="{ name: 'Opogo' }">Opogo</router-link>
      <router-link :to="{ name: 'Pikto' }">Pikto</router-link>
      
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

    </div>
  </div>
</template>

<script>
export default {
  name: "CaseStudy",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease-in-out;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
