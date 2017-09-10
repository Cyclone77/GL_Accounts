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
                            <el-table-column prop="centum" label="百" width="60">
                            </el-table-column>
                            <el-table-column prop="thousand" label="千" width="60">
                            </el-table-column>
                            <el-table-column prop="tenthousand" label="万" width="60">
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
                        <el-radio-group v-model="ccountradio" @change="barchange">
                            <el-radio-button label="全部"></el-radio-button>
                            <el-radio-button label="系统"></el-radio-button>
                            <el-radio-button label="手填"></el-radio-button>
                        </el-radio-group>
                        <div class="syschunktbl">
                            <eltablepage :params="params" url="http://localhost:3000/tblpage">
                                <el-table-column prop="rowindex" label="序号" fixed>
                                </el-table-column>
                                <el-table-column prop="applicationtime" label="申请时间" :filters="chunkTime" :filter-method="filterTag" width="120">
                                </el-table-column>
                                <el-table-column prop="applicationpsn" label="申请人">
                                </el-table-column>
                                <el-table-column prop="tickettime" label="要求票面时间" width="140">
                                </el-table-column>
                                <el-table-column prop="ticketunit" label="开票单位" width="100">
                                </el-table-column>
                                <el-table-column prop="comeunit" label="出票单位" width="100">
                                </el-table-column>
                                <el-table-column prop="ticketcon" label="开票内容" width="100">
                                </el-table-column>
                                <el-table-column prop="Subprime" label="贷品">
                                </el-table-column>
                                <el-table-column prop="gathering" label="收款">
                                </el-table-column>
                                <el-table-column prop="area" label="地区">
                                </el-table-column>
                                <el-table-column prop="source" label="来源">
                                </el-table-column>
                                <el-table-column prop="way" label="方式">
                                </el-table-column>
                                <el-table-column fixed="right" label="操作" width="100">
                                    <template scope="scope">
                                        <el-button @click="handleClick" type="text" size="small">审核</el-button>
                                        <el-button type="text" size="small">确认</el-button>
                                    </template>
                                </el-table-column>
                            </eltablepage>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import axios from 'axios'
import eltablepage from '@/components/common/Table'

export default {
    name: 'hello',
    components: {
        eltablepage
    },
    mounted() {
        axios.get('http://localhost:3000/SurplusData', {
            timeout: 5000
        }).then(response => {
            this.tblSurplusData = response.data;
        }).catch(error => {
            console.log(error);
            this.$notify.error({
                title: '错误',
                message: '拉取\'发票剩余\'信息超时！'
            });
        })
    },
    methods: {
        handleClick: function() {
            this.$notify({
                title: '审批结果',
                message: '审批已通过！',
                type: 'success'
            });
        },
        filterTag: function(value, row) {
            return row.applicationtime > value;
        },
        barchange: function(value) {
            console.log('选中了', value);
        }
    },
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
            tblSurplusData: [],
            loading: true,
            chunkTime: [{
                text: '2010年以后',
                value: '2010-01-01'
            }],
            ccountradio: '全部',
            params: {}
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~@/css/page/Invoice.css';
.title {
    font-weight: bold;
}
</style>
