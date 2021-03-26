<template>
  <div class="case-container bg-info">
    <h1>Opogo</h1>
    <p>Opogo Stuff</p>
    <router-link :to="{ name: 'Case Study' }">Close</router-link>
    <!-- <button 
      @click="emit('close')" 
      type="button" 
      class="close" 
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button> -->
  </div>
</template>

<script>
export default {
  name: 'Opogo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .case-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
</style>