<template>
    <div>
        <h2 class="title">欢迎您，这是我们的店铺主页，您在这里可以进行如下操作</h2>
        <div class="collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="查看店铺基本信息" name="1">
                    <div>您可以在这里查看您的店铺的基本信息</div>
                    <div>包括店名、地址、电话等信息</div>
                    <div>如果您需要的话，您也可以对店铺的信息进行修改，比如你们搬家了</div>
                </el-collapse-item>
                <el-collapse-item title="管理您店铺的菜品" name="2">
                    <div>您可以对您的菜单进行编辑，如果您有开发了什么优秀的菜品，可以在这里将他填入菜单中</div>
                    <div>如果某道菜品不再得宠了，或是季节性的菜品，您也可以从这里将它们下架</div>
                    <div>当然，您还可以调整菜品的价格</div>
                </el-collapse-item>
                <el-collapse-item title="查看店铺的订单" name="3">
                    <div>如有客户点单，我们会为帮助您自动接单</div>
                    <div>如果您要查看都接了哪些订单，您可以从这里查看</div>
                    <div>当然，您不能查看未来的订单</div>
                </el-collapse-item>
                <el-collapse-item title="分析您的收益情况" name="4">
                    <div>一个优秀的店长要会分析自己的盈亏情况，这里可以查看店铺本月的收益情况</div>
                    <div>从这里，我们给你提供了多种不同的统计形式</div>
                    <div>无论是柱状图，还是扇形图，或者是饼状图，多种选，择一定会满足你的需求</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .collapse {
        width: 60%;
        margin-left: 40px;
    }

    .title {
        margin-left: 40px;
    }
</style>