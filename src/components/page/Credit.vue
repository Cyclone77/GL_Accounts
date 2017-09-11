<template>
    <div class="credit">
        <div class="core">
            <el-button type="primary" icon="plus">增加</el-button>
            <el-button type="primary" icon="upload2">导入</el-button>
        </div>
        <div class="credittbl">
            <div class="tblcontent">
                <eltablepage url="http://localhost:3000/tblpage" msg="应收账款">
                    <el-table-column prop="rowindex" label="序号" fixed>
                    </el-table-column>
                    <el-table-column prop="applicationtime" label="申请时间" width="120">
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
                            <el-button type="text" size="small">审核</el-button>
                            <el-button type="text" size="small">确认</el-button>
                        </template>
                    </el-table-column>
                </eltablepage>
            </div>
        </div>
    </div>
</template>

<script>
import eltablepage from '@/components/common/Table'

export default {
    name: 'Credit',
    data() {
        return {
        }
    },
    components: {
        eltablepage
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~@/css/page/Credit.css';
</style>
