<template>
  <div>
    <span class="h2">
      {{ job }}
    </span>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'TimelineStatus',
  props: {
    job: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>