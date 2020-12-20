<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/riderHome' }">骑手主页</el-breadcrumb-item>
                <el-breadcrumb-item>进行中的订单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="historyTable">
            <el-card>
                <el-table>
                    <el-table-column label="订单编号" width="150px"> </el-table-column>
                    <el-table-column label="客户地址" width="150px"> </el-table-column>
                    <el-table-column label="客户电话" width="150px"> </el-table-column>
                    <el-table-column label="商家地址" width="150px"> </el-table-column>
                    <el-table-column label="商家电话" width="150px"> </el-table-column>
                </el-table>
            </el-card>
        </div>
    </div>

</template>

<script>
export default {
methods:{
  goBack() {
    this.$router.push('/riderHome')
  }
}
}
</script>

<style lang="less" scoped>
    .historyTable {
        margin-left: 40px;
        margin-top: 40px;
        width: 80%;
    }
</style>