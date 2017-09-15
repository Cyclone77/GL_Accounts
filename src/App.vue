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
import leftnav from '@/components/layout/Leftnav'
import handle from '@/components/layout/Handle'

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
