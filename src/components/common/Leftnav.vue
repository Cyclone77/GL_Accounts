<template>
    <div class="nav">
        <el-menu :router="true" :default-active="defaultActive" class="el-menu-vertical-demo" @select="handleOpen">
            <el-menu-item index="/">
                <i class="el-icon-document"></i>首页</el-menu-item>
            <el-menu-item index="/credit">
                <i class="el-icon-date"></i>应收账款</el-menu-item>
            <el-menu-item index="/invoice">
                <i class="el-icon-star-off"></i>开票申请</el-menu-item>
            <el-menu-item index="/forinvoice">
                <i class="el-icon-edit"></i>代开发票</el-menu-item>
            <el-menu-item index="/yetinvoice">
                <i class="el-icon-share"></i>已开发票</el-menu-item>
            <el-menu-item index="/performance">
                <i class="el-icon-setting"></i>部门效绩</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "Leftnav",
    data() {
        return {
            defaultActive: "/"
        }
    },
    created() {
        this.defaultActive = this.$route.path;
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>
@import '~@/css/common/Leftnav.css'
</style>
