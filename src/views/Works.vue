<template>
  <div class="main-view">
    <h1>Past Works</h1>
    
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
  name: 'Works',
  components: {
    CaseStudyCard
  },
  props: {
    msg: String,
  },
  computed: {
    getAllRoutes: function () {
      const routes = this.$router.getRoutes()
      const caseStudies = routes
        .filter(article => article.path.startsWith("/works/"))
        .map(article => article.name)
      return caseStudies
    }
  },
  data: function () {
    return {
      // cases: ["Design System", "Creative", "Training", "Illustrations"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>