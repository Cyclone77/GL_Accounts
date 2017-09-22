<template>
    <div class="invoice">
        <el-row>
            <el-col :span="18">
                <!-- 金额管理 -->
                <div class="moneyopt panel">
                    <div class="headline">
                        <p class="title">金额管理</p>
                    </div>
                    <div class="moneyList">
                        <el-row :gutter="20">
                            <el-col :span="6" v-for="(item,index) in moneyMsg" :key="index">
                                <div class="classify">
                                    <div class="title" :style="{ borderTop: '0.125rem solid '+ item.theme.fontcolor, backgroundColor: item.theme.titbgcolor }">
                                        <span v-text="item.name" :style="{ color: item.theme.fontcolor }"></span>
                                    </div>
                                    <div class="specific clearfix">
                                        <el-col :span="12">
                                            <p class="usable" v-text="item.usable"></p>
                                            <p>可用金额（元）</p>
                                        </el-col>
                                        <el-col :span="12">
                                            <p class="applyfor" v-text="item.applyfor"></p>
                                            <p>申请金额（元）</p>
                                        </el-col>
                                    </div>
                                    <div class="difference">
                                        <span class="sign"></span>
                                        <span class="explain">金额差值（元）</span>
                                        <span v-text="item.difference"></span>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <!-- 发票剩余 -->
                <div class="surplus panel">
                    <div class="headline">
                        <p class="title">发票剩余</p>
                    </div>
                    <div class="surplustbl">
                        <el-table :data="tblSurplusData" stripe style="width: 100%">
                            <el-table-column prop="CorporateName" label="">
                            </el-table-column>
                            <el-table-column prop="BaiYuanBan" label="百" width="60">
                            </el-table-column>
                            <el-table-column prop="QianYuanBan" label="千" width="60">
                            </el-table-column>
                            <el-table-column prop="WanYuanBan" label="万" width="60">
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
                    <div class="headline">
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
                            <gl-table :allData="chunktblData" msg="系统入账">
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
                            </gl-table>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import { getTable } from '@/api/invoice'
export default {
    name: 'Invoice',
    beforeUpdate() {

    },
    created(){
        getTable().then(data => {
            this.tblSurplusData = data;
        });
        
        this.$axios.get("https://easy-mock.com/mock/59c37dc2e0dc663341b35a80/example/mock", {
            timeout: 5000
        }).then(response => {
            this.chunktblData = response.data.data.projects;
        }).catch(error => {
            console.log(error);
            this.$notify.error({
                title: '错误',
                message: '拉取\'系统入账\'信息超时！'
            });
        })
    },
    methods: {
        barchange(value) {
            console.log('选中了', this);
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        handleClick() {

        }
    },
    data() {
        return {
            iconName: "person",
            chunktblData: [],
            moneyMsg: [{
                name: "四川",
                usable: 101980,
                applyfor: 98765,
                difference: 3215,
                theme: {
                    fontcolor: "#359ff9",
                    titbgcolor: "#eaf6fd"
                }
            }, {
                name: "成都",
                usable: -9981,
                applyfor: 8762,
                difference: -18743,
                theme: {
                    fontcolor: "#f73b42",
                    titbgcolor: "#fdedeb"
                }
            }, {
                name: "广力行",
                usable: 9987,
                applyfor: 19987,
                difference: -10000,
                theme: {
                    fontcolor: "#5dc5a3",
                    titbgcolor: "#edf9f5"
                }
            }, {
                name: "未说明金额",
                usable: -13565,
                applyfor: 100000,
                difference: -23565,
                theme: {
                    fontcolor: "#8083db",
                    titbgcolor: "#f1f3fb"
                }
            }],
            msg: '开票申请',
            tblSurplusData: [],
            chunkTime: [{ text: '家', value: '家' }, { text: '公司', value: '公司' }],
            ccountradio: '全部'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~@/style/page/Invoice.css';
.moneyList {
    overflow-x: auto;
}

.classify {
    border: 0.0625rem solid #bbcce3;
    border-top: none;
    height: 13rem;
    position: relative;
    overflow: hidden;
    font-size: 0.875rem;
}

.classify .title {
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    font-size: 1.125rem;
    font-weight: bold;
}

.classify .specific {
    position: absolute;
    top: 4.375rem;
    bottom: 3.2rem;
    left: 0;
    right: 0;
}

.classify .specific p {
    text-align: center;
}

.classify .specific .usable,
.classify .specific .applyfor {
    font-size: 1.125rem;
}

.classify .difference {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3.2rem;
    line-height: 3.2rem;
    text-align: center;
}

.classify .difference span {
    display: inline-block;
}

.classify .sign {
    height: 0.5rem;
    width: 0.5rem;
    background-color: #bbcce3;
}
</style>
