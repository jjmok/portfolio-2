<template>
  <router-link 
    class='case-study-card bg-info m-3' 
    :to="{ name: studyName, query: {readmode: 'true'} }">
    <h1>{{ studyName }}</h1>  
  </router-link>
</template>

<script>
export default {
  name: 'CaseStudyCard',
  props: {
    studyName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .case-study-card {
    display: inline-block;
    width: 200px;
    height: 100px;
    border-radius: 8px;
  }
</style>
