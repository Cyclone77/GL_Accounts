<template id="tablepage">
    <div>
        <el-table :data='sourceData' v-loading.body="loading">
            <slot></slot>
        </el-table>
        <div style="height:12px"></div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleIndexChange" :page-size="pageSize" :page-sizes="[5, 10, 20, 50]" :current-page="pageIndex" layout="total,sizes, prev, pager, next" :total="sourceTotal">
        </el-pagination>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'eltablepage',
    props: {
        url: String,
        params: Object
    },
    created: function() {
        this.fetch();
    },
    data: function() {
        return {
            sourceData: [],
            sourceTotal: 100,
            pageIndex: 1,
            pageSize: 5,
            loading: false
        }
    },
    methods: {
        handleSizeChange: function(size) {
            if (this.pageSize === size) return;
            this.pageSize = size;
            this.pageIndex = 1;
            this.fetch(this.pageIndex, size);
        },
        handleIndexChange: function(index) {
            if (this.pageIndex === index) return;
            this.pageIndex = index;
            this.fetch(index, this.pageSize);
        },
        fetch: function(index, size) {
            var send = this.params || {};
            send.pageIndex = index || 1;
            send.pageSize = size || 5;
            //取数

            this.loading = true;
            axios.get(this.url + "?_start=" + ((send.pageIndex - 1) * send.pageSize) + "&_limit=" + send.pageSize, {
                timeout: 5000
            }).then(response => {
                this.loading = false;
                this.sourceData = response.data;
                this.sourceTotal = 18;
                console.log("执行了表格取数");
            }).catch(error => {
                console.log(error);
                this.$notify.error({
                    title: '错误',
                    message: '拉取\'发票剩余\'信息超时！'
                });
            })
        }
    }
}
</script>

