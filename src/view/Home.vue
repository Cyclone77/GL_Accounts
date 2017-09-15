<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <icon-svg :icon-class="iconPath"></icon-svg>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      iconPath: "person",
      msg: '首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
