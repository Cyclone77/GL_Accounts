<template>
    <div class="handle">
        <div class="logo">
            <img :src="logoUrl" alt="">
        </div>
        <div class="title">广力应收账款管理系统</div>
        <div class="corebtn">
            <el-button type="text" icon="circle-cross">注销</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Handle",
    data() {
        return {
            logoUrl: require('@/other/images/logo.png')
        }
    }
}
</script>

<style scoped>
@import '~@/css/common/Handle.css';
.logo img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
</style>

