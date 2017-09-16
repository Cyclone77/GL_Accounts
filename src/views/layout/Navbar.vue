<template>
    <div class="nav">
        <el-menu :router="true" :default-active="defaultActive" class="el-menu-vertical-demo" @select="handleOpen">
            <el-menu-item index="/home">
                <icon-svg icon-class="地球"></icon-svg>首页</el-menu-item>
            <el-menu-item index="/credit">
                <icon-svg icon-class="收款账单"></icon-svg>应收账款</el-menu-item>
            <el-menu-item index="/invoice">
                <icon-svg icon-class="申请"></icon-svg>开票申请</el-menu-item>
            <el-menu-item index="/forinvoice">
                <icon-svg icon-class="代开发票"></icon-svg>代开发票</el-menu-item>
            <el-menu-item index="/yetinvoice">
                <icon-svg icon-class="已开发票"></icon-svg>已开发票</el-menu-item>
            <el-menu-item index="/performance">
                <icon-svg icon-class="部门"></icon-svg>部门效绩</el-menu-item>
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
        var routpath = this.$route.path.split("/");
        //console.log(routpath,routpath[1]);
        this.defaultActive = `/${routpath[1]}`;
    },
    methods: {
        handleOpen(key, keyPath) {
        }
    }
}
</script>
<style scoped>
@import '~@/style/common/Leftnav.css'
</style>
