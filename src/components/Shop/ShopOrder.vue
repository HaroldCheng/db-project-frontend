<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: 'shopHome' }">店铺主页</el-breadcrumb-item>
                <el-breadcrumb-item>历史订单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="historyTable">
            <el-card>
                <el-table>
                    <el-table-column label="订单编号" width="150px"> </el-table-column>
                    <el-table-column label="订单金额" width="150px"> </el-table-column>
                    <el-table-column label="订单内容" width="150px"> </el-table-column>
                    <el-table-column label="订单日期" width="150px"> </el-table-column>
                </el-table>
            </el-card>
        </div>
    </div>

</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.push('/shopHome')
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