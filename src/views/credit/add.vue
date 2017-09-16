<template>
    <div class="creditadd">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/credit' }">应收账款首页</el-breadcrumb-item>
                <el-breadcrumb-item>增加收款</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="formpanel">
            <div class="headline">
                <p class="title" v-text="title"></p>
            </div>
            <div class="fromlist">
                <el-form ref="form" :model="form" label-width="8rem">
                    <el-form-item label="收款渠道：">
                        <el-col :span="10">
                            <el-radio-group v-model="form.channel" @change="channelChange">
                                <el-radio label="1">广力行</el-radio>
                                <el-radio label="2">成都</el-radio>
                                <el-radio label="3">四川</el-radio>
                                <el-radio label="4">支付宝</el-radio>
                                <el-radio label="5">农行</el-radio>
                                <el-radio label="6">微信</el-radio>
                                <el-radio label="7">现金</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-form-item>
                </el-form>
                <el-form ref="form" :model="form" label-width="8rem" v-if="payway">
                    <el-form-item label="汇款单位账号：">
                        <el-col :span="6">
                            <el-input v-model="form.Customer"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="汇款单位名称：">
                        <el-col :span="6">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                        <el-col :span="1">&ensp;</el-col>
                        <el-col :span="6">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                        <el-col :span="1">
                            <el-button type="text" class="puttbtn">查看</el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="汇款金额：">
                        <el-col :span="6">
                            <el-col :span="11">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-col>
                        <el-col :span="1">&ensp;</el-col>
                        <el-col :span="4">
                            <el-col class="line" :span="8">差额</el-col>
                            <el-col :span="16">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="到款时间：">
                        <el-col :span="6">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="备注：">
                        <el-col :span="12">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="影印件：">
                        <el-col :span="6">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="1">
                            <el-button type="text" class="puttbtn">拍摄</el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button>取消</el-button>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                    </el-form-item>
                </el-form>

                <el-form ref="form" :model="form" label-width="8rem" v-if="!payway">
                    <el-form-item label="收款人：">
                        <el-col :span="6">
                            <el-input v-model="form.customer"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="收款说明：">
                        <el-col :span="6">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="收款金额：">
                        <el-col :span="6">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="收款金额说明：">
                        <el-col :span="12">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="缴款时间：">
                        <el-col :span="6">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="打印：">
                        <el-col :span="6">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="1">
                            <el-button type="text" class="puttbtn">打印</el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="微信确认信息：">
                        <el-col :span="6">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="1">
                            <el-button type="text" class="puttbtn">查看</el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="影印件：">
                        <el-col :span="6">
                            <el-input></el-input>
                        </el-col>
                        <el-col :span="1">
                            <el-button type="text" class="puttbtn">拍摄</el-button>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button>取消</el-button>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                    </el-form-item>
                </el-form>
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
                //收款渠道
                channel: '1',
                //收款人
                customer:'',
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                desc: ''
            },
            title: "新建录入"
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
