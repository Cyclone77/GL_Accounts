<template id="tablepage">
    <div>
        <el-table :data='sourceData' v-loading.body="loading">
            <slot></slot>
        </el-table>
        <div style="height:12px"></div>
        <el-pagination v-show="paginshow" @size-change="handleSizeChange" @current-change="handleIndexChange" :page-size="pageSize" :page-sizes="[5, 10, 20, 50]" :current-page="pageIndex" layout="total,sizes, prev, pager, next" :total="sourceTotal">
        </el-pagination>
    </div>
</template>

<script>
import fetch from '@/utils/fetch'
export default {
    name: 'eltablepage',
    props: {
        url: String,
        params: Object,
        msg: String
    },
    created: function() {
        this.fetch();
    },
    data: function() {
        return {
            sourceData: [],
            allData: [],
            sourceTotal: 100,
            pageIndex: 1,
            pageSize: 5,
            loading: false,
            paginshow: false
        }
    },
    methods: {
        handleSizeChange: function(size) {
            if (this.pageSize === size) return;
            this.pageSize = size;
            this.pageIndex = 1;
            this.structure(this.pageIndex, size);
        },
        handleIndexChange: function(index) {
            if (this.pageIndex === index) return;
            this.pageIndex = index;
            this.structure(index, this.pageSize);
        },
        fetch: function(index, size) {
            if (this.allData && this.allData.length > 0) return;
            this.msg = this.msg || "";
            //取数

            this.loading = true;
            fetch({
                url: this.url,
                method: 'get'
            }).then(data => {
                this.allData = data;
                //this.sourceTotal = 18;
                this.structure();
                this.loading = false;
                this.paginshow = true;
            }).catch(error => {
                this.loading = false;
                console.log(error);
                this.$notify.error({
                    title: '错误',
                    message: `拉取${this.msg}信息失败！`
                });
            })
        },
        structure() {
            if (this.allData.length > this.pageSize) {
                //分页数
                this.sourceTotal = Math.ceil(this.allData.length);
                //通过当前页数筛选出表格当前显示数据
                this.sourceData = this.allData.slice((this.pageSize * (this.pageIndex - 1)), (this.pageIndex * this.pageSize));
            }
        }
    }
}
</script>

