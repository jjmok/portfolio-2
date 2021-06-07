<template>
  <div class="main-view">
    <h2>Hi! my name is Jee Jin. Welcome to my portfolio site!</h2>
    <p>This is a work in progress</p>

    <p> tests </p>
    <router-link :to="{ name: 'Opogo' }">Opogo</router-link>
    <!-- <router-link :to="{ name: 'Case Study' }">Case Study</router-link> -->

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "AboutMe",
};
</script>