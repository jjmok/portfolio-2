<template>
  <div class="main-container">
    <h1>Opogo</h1>
    <p>Opogo Stuff</p>
    <button 
      @click="emit('close')" 
      type="button" 
      class="close" 
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script setup>
  import { defineEmit } from 'vue'

  const emit = defineEmit(['close'])
</script>

<style lang="scss" scoped>
  .main-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: blue;
    padding: 50px
  }

  .close {
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 25px;
  }
</style>