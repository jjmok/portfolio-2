<template>
  <div class="main-container">
    <h1>Opogo</h1>
    <p>Opogo Stuff</p>
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

</style>