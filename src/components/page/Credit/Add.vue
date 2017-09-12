<template>
    <div class="creditadd">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/credit' }">应收账款首页</el-breadcrumb-item>
                <el-breadcrumb-item>增加收款</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="formpanel">
            <div class="fromlist">
                <el-form ref="form" :model="form" label-width="140px">
                    <el-form-item label="收款渠道">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="广力行" name="type"></el-checkbox>
                            <el-checkbox label="成都" name="type"></el-checkbox>
                            <el-checkbox label="四川" name="type"></el-checkbox>
                            <el-checkbox label="支付宝" name="type"></el-checkbox>
                            <el-checkbox label="农行" name="type"></el-checkbox>
                            <el-checkbox label="微信" name="type"></el-checkbox>
                            <el-checkbox label="现金" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="汇款单位账号">
                        <el-input v-model="form.Customer"></el-input>
                    </el-form-item>
                    <el-form-item label="汇款单位名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="汇款金额">
                        <el-col :span="6">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="6">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                        <el-col class="line" :span="4">差额</el-col>
                        <el-col :span="6">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="到款时间">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="影印件">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                        <el-button>取消</el-button>
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
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
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
    padding: 24px;
}

.formpanel {
    position: absolute;
    top: 72px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #fff;
    padding: 24px;
    overflow: auto;
}

.fromlist {
    width: 520px;
}

.el-checkbox-group .el-checkbox {
    float: left;
    width: 120px;
    padding-right: 20px;
    margin: 0;
    padding: 0;
}

.line {
    text-align: center;
}
</style>
