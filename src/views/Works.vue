<template>
  <div class="main-view">
    <h1>Works</h1>
    
    <div v-for="(caseStudy, index) in cases" :key="index">
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
  data: function () {
    return {
      cases: ["Design System", "Creative", "Training"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>