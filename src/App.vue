<template>
  <div id="app" class="clearfix">
    <handle></handle>
    <div class="locaabs bottom-panel">
      <div class="left">
        <leftnav></leftnav>
      </div>
      <div class="right">
        <div class="right-content">
          <div class="area">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftnav from '@/view/layout/Leftnav'
import handle from '@/view/layout/Handle'

export default {
  name: 'app',
  components: {
    leftnav,
    handle
  }
}
</script>

<style>
@import '~@/css/common.css'
</style>
