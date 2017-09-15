<template>
  <img :src="iconName" alt="" class="icon">
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return require(`@/icons/svg/${this.iconClass}.svg`)
    }
  }
}
</script>
<style scoped>
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
