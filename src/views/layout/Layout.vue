<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container clearfix">
      <navbar class="left"></navbar>
      <div class="right">
        <div class="right-content">
          <app-main class=" area"></app-main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/views/layout'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~@/style/common.css';
.app-wrapper,
.main-container {
  height: 100%;
}
</style>
