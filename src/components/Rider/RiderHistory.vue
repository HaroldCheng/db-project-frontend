<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/riderHome' }">骑手主页</el-breadcrumb-item>
                <el-breadcrumb-item>本月业绩</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="moneySats">
            <el-card>
            </el-card>
        </div>
    </div>

</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.push('/riderHome')
            }
        }
    }
</script>

<style lang="less" scoped>
    .moneySats {
        margin-left: 40px;
        margin-top: 40px;
        width: 80%;
    }
</style>