<template>
    <div class="handle">
        <div class="logo noselect">
            <img :src="logoUrl" alt="">
        </div>
        <div class="title noselect" :style="{backgroundImage: 'url(' + img + ')'}"></div>
        <div class="corebtn">
            <div class="device">
                <img :src="userpath" class="userimg" alt="">
                <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">{{ username }}
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="editinformation">修改信息</el-dropdown-item>
                        <el-dropdown-item command="logout">注销</el-dropdown-item>
                        <el-dropdown-item command="gobackhome" divided>返回主页</el-dropdown-item>
                        <el-dropdown-item command="tickling">建议反馈</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Handle",
    methods: {
        handleCommand(command) {
            console.log(command);
        }
    },
    data() {
        return {
            username: "张三",
            userpath: require('@/assets/basic/user.png'),
            logoUrl: require('@/assets/basic/logo.png'),
            img: require('@/assets/basic/title.png'),
        }
    }
}
</script>

<style scoped>
@import '~@/style/common/Handle.css';
.logo img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.corebtn .device {
    margin: 0 1rem;
    float: left;
    position: relative;
}

.device .el-dropdown {
    margin-left: 2rem;
}

.userimg {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
}
</style>

