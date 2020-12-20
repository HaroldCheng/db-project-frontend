<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/shopHome' }">店铺主页</el-breadcrumb-item>
                <el-breadcrumb-item>收益情况</el-breadcrumb-item>
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
methods:{
  goBack() {
    this.$router.push('/userHome')
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