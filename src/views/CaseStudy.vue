<template>
  <div>
    <div>
      <h1>Case Study</h1>

      <li v-for="caseStudy in cases" :key="caseStudy">
        <router-link :to="{ name: caseStudy }">{{ caseStudy }}</router-link>
      </li>

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
  data: function () {
    return {
      cases: ["Opogo", "Pikto"]
    }
  }
};

// To add a new case study page, create a new component, add it to data above and on the router paths
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-from {
    transform: translateY(10px)
  }
  .fade-leave-to {
    transform: translateY(-10px)
  }

  .fade-enter-active, .fade-leave-active {
    transition: 
      opacity .2s ease-in,
      transform .2s ease-in;
  }
</style>
