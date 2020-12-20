<template>
    <div>
        <h2 class="title">欢迎您，这是我们的骑手主页，您在这里可以进行如下操作</h2>
        <div class="collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="查看您的基本信息" name="1">
                    <div>您可以在这里查看您作为一个勤劳的骑手的基本信息。</div>
                    <div>包括姓名、地址、电话、性别等信息。</div>
                    <div>当然您也可以对自己的信息进行修改，做一位匿名的送饭英雄，为成百上千的干饭人们送上温暖的饭菜。</div>
                </el-collapse-item>
                <el-collapse-item title="接受新的订单" name="2">
                    <div>没有困难的工作，只有勤劳的打工人，您可以在这里接受当前可接受的订单。</div>
                    <div>但也不要太挑战人体的极限，请合理接单，保证食物可以尽快到达客户手中，也给其他骑手留点工作吧。</div>
                    <div>如果订单超时，可能会影响绩效哦，不要盲目接单阿</div>
                </el-collapse-item>
                <el-collapse-item title="查看您正在配送中的订单" name="3">
                    <div>接单太多怕记不清，没关系，这里可以查看正在进行中的订单。</div>
                    <div>当然，您可以查看未来的订单，请您选择上一服务。</div>
                </el-collapse-item>
                <el-collapse-item title="查看您的本月绩效" name="4">
                    <div>送人外卖，手留余香，您是美食的搬运工，是干饭人们的超人。</div>
                    <div>从这里您可以查看本月接过的所有订单，看看您这个月给多少干饭人送去了让人幸福的美食，奖金稳了！</div>
                    <div>我们为您提供了多种统计结果，柱状图，还是扇形图，或者是饼状图，多种选择一定会满足您的需求。</div>
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