<template>
    <div>
        <h2 class="title">欢迎您，这是我们的平台管理者主页，您在这里可以进行如下操作</h2>
        <div class="collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="查看平台基本信息" name="1">
                    <div>您可以在这里查看平台的基本信息</div>
                    <div>包括平台名称、骑手数量、商家数量、用户数量等信息</div>
                    <div>当然，您有权力对这些信息进行修改</div>
                </el-collapse-item>
                <el-collapse-item title="查看本平台入驻的商家" name="2">
                    <div>在这里您可以查看平台上所有商家的具体信息</div>
                    <div>包括他们的地址，电话，菜品及菜品价格等信息</div>
                    <div>您有权力关闭某些不合规矩的商家的店铺</div>
                </el-collapse-item>
                <el-collapse-item title="查看本平台的骑手" name="3">
                    <div>在这里您可以查看平台上所有骑手的具体信息</div>
                    <div>包括他们的姓名，电话，性别等信息</div>
                    <div>您有权力开除某些不合规矩的骑手</div>
                </el-collapse-item>
                <el-collapse-item title="查看本平台的用户" name="3">
                    <div>在这里您可以查看平台上所有用户的具体信息</div>
                    <div>包括他们的姓名，电话，地址等信息</div>
                    <div>您有权力将某些过分的用户拉入黑名单</div>
                </el-collapse-item>
                <el-collapse-item title="分析平台的收入情况" name="4">
                    <div>一个优秀的董事长要清楚的知道自己平台的收入情况，在这里您可以直接查看</div>
                    <div>从这里，我们给您提供了多种不同的统计形式</div>
                    <div>无论是柱状图，还是扇形图，或者是饼状图，多种选择一定会满足您的需求</div>
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