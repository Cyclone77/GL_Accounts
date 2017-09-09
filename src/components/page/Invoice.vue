<template>
    <div class="invoice">
        <el-row>
            <el-col :span="16">
                <!-- 金额管理 -->
                <div class="moneyopt panel">
                    <div class="paneltitle">
                        <p class="title">金额管理</p>
                    </div>
                    <div class="moneytbl">
                        <el-table :data="tableData" stripe style="width: 100%">
                            <el-table-column prop="date" label="日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <!-- 发票剩余 -->
                <div class="surplus panel">
                    <div class="paneltitle">
                        <p class="title">发票剩余</p>
                    </div>
                    <div class="surplustbl">
                        <el-table :data="tblSurplusData" stripe style="width: 100%">
                            <el-table-column prop="address" label="">
                            </el-table-column>
                            <el-table-column prop="centum" label="百" width="80">
                            </el-table-column>
                            <el-table-column prop="thousand" label="千" width="80">
                            </el-table-column>
                            <el-table-column prop="tenthousand" label="万" width="80">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <!-- 系统入账 -->
                <div class="sysaccount panel">
                    <div class="paneltitle">
                        <p class="title">系统入账</p>
                    </div>
                    <!-- 内容 -->
                    <div class="syschunk">
                        <el-radio-group v-model="radio3">
                            <el-radio-button label="全部"></el-radio-button>
                            <el-radio-button label="系统"></el-radio-button>
                            <el-radio-button label="手填"></el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: '开票申请',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            tblSurplusData: [{
                address: '四川',
                centum: '80',
                thousand: '11',
                tenthousand: '8'
            }],
            radio3: '全部',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~@/css/page/Invoice.css';
</style>
