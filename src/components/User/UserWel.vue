<template>
<div>
<h2 class="title">欢迎您，这是我们的客户主页，您在这里可以进行如下操作</h2>
<div class="collapse">
  <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="查看您的基本信息" name="1">
    <div>您可以在这里查看您作为一个干饭人的基本信息</div>
    <div>包括姓名、地址、电话、性别等信息</div>
    <div>如果您感兴趣，您也可以对自己的信息进行修改，这样你的小伙伴就不知道你能吃这么多了</div>
  </el-collapse-item>
  <el-collapse-item title="创建新的订单" name="2">
    <div>想干饭了？您可以在这里创建新的订单来填饱您的肚子</div>
    <div>这里有成千上万的商家供你选择，每个商家提供了不同的菜品，您可以根据自己的喜欢来选择它们</div>
    <div>如果你喜欢某个菜品，那就将它加入你的订单吧，我们将自动给你配送</div>
  </el-collapse-item>
  <el-collapse-item title="查看您的历史订单" name="3">
    <div>每一顿干过的饭就像一首诗歌，想知道曾经干过的饭？</div>
    <div>从这里你可以查看历史订单，可以快速知道您一年前的第45个星期三下午吃的是什么味道的螺蛳粉</div>
    <div>当然，您不能查看未来的订单</div>
  </el-collapse-item>
  <el-collapse-item title="分析您的消费情况" name="4">
    <div>想看自己的干饭战绩？</div>
    <div>从这里，我们给你提供了多种不同的统计形式</div>
    <div>无论是柱状图，还是扇形图，或者是饼状图，多种选择一定会满足你的需求</div>
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
.collapse{
  width: 60%;
  margin-left: 40px;
}
.title{
  margin-left: 40px;
}
</style>