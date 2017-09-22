<template>
    <div class="credit">
        <div class="core">
            <el-button type="primary" icon="plus" @click="add">增加</el-button>
            <el-button icon="upload2">导入</el-button>
            <el-button icon="edit">对应开票申请</el-button>
            <el-button icon="check">确认收款</el-button>
        </div>
        <div class="credittbl">
            <div class="tblcontent">
                <gl-table :url="tblUrl" msg="应收账款">
                    <el-table-column prop="Id" label="序号">
                    </el-table-column>
                    <el-table-column prop="ApplicationDate" label="申请时间" width="120">
                    </el-table-column>
                    <el-table-column prop="Applicant" label="申请人">
                    </el-table-column>
                    <el-table-column prop="RequiredDate" label="要求票面时间" width="140">
                    </el-table-column>
                    <el-table-column prop="Customer" label="开票单位" width="100">
                    </el-table-column>
                    <el-table-column prop="ChuPiaoDanWei" label="出票单位" width="100">
                    </el-table-column>
                    <el-table-column prop="KaiPiaoNeiRong" label="开票内容" width="100">
                    </el-table-column>
                    <el-table-column prop="WuPing" label="贷品">
                    </el-table-column>
                    <el-table-column prop="ShouKuanZhuangTai" label="收款">
                    </el-table-column>
                    <el-table-column prop="Area" label="地区">
                    </el-table-column>
                    <el-table-column prop="source" label="来源">
                    </el-table-column>
                    <el-table-column prop="way" label="方式">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template scope="scope">
                            <el-button type="text" size="small">审核</el-button>
                            <el-button type="text" size="small">确认</el-button>
                        </template>
                    </el-table-column>
                </gl-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'credit',
    data() {
        return {
            tblUrl: 'receivables'
        }
    },
    methods: {
        add: function() {
            this.$router.push("/credit/add");
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~@/style/page/Credit.css';
</style>
