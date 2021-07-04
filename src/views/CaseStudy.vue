<template>
  <div class="main-view">
    <h1>Product Designer's Case Studies</h1>

    <div v-for="(caseStudy, index) in getAllRoutes" :key="index">
      <CaseStudyCard 
        :study-name="caseStudy"/>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import CaseStudyCard from '@/components/CaseStudyCard.vue'

export default {
  name: "CaseStudy",
  components: {
    CaseStudyCard
  },
  props: {
    msg: String,
  },
  data: function () {
    return {}
  },
  computed: {
    getAllRoutes: function () {
      const routes = this.$router.getRoutes()
      const caseStudies = routes
        .filter(article => article.path.startsWith("/case-study/"))
        .map(article => article.name)
      return caseStudies
    }
  },
};

// To add a new case study page, create a new component, add it to data above and on the router paths
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
