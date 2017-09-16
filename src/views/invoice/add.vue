<template>
    <div class="invoiceadd">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/credit' }">开票申请首页</el-breadcrumb-item>
                <el-breadcrumb-item>新增开票申请</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="formpanel">
            <div class="headline">
                <p class="title" v-text="title"></p>
            </div>
            <div class="fromlist">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="一致性 Consistency" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 Feedback" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreditAdd',
    data() {
        return {
            payway: true,
            form: {
            },
            title: "发票信息",
            activeNames: ['1']
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!', this.form);
        },
        channelChange(val) {
            if (val === '7') {
                this.payway = false;
            } else {
                this.payway = true;
            }
        },
        handleChange() {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.creditadd {
    overflow: hidden;
    height: 100%;
}

.breadcrumb {
    background-color: #fff;
    padding: 1.5rem;
}

.formpanel {
    position: absolute;
    top: 4.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #fff;
    padding-top: 0;
    overflow: auto;
}

.fromlist {
    /* width: 35rem; */
    padding: 1.5rem;
}

.el-radio-group .el-radio {
    float: left;
    width: 7.5rem;
    padding-right: 1rem;
    margin: 0.25rem 0;
    padding: 0;
}

.line {
    text-align: center;
}

.putt {
    width: 17rem;
}

.puttbtn {
    margin-left: 0.5rem;
}
</style>
