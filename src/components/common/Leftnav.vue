<template>
    <div class="nav">
        <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleOpen">
            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "Leftnav",
  data(){
      return {}
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>
    @import './../../css/common/Leftnav.css'
</style>
