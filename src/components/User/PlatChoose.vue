<template>
<div>
  <h2>我们是一个多平台的外卖系统，请选择你想要的平台</h2>
  <el-row :gutter="10">
    <el-col span="12">
      <el-card class="card1">
        <h2 class="title">饿没饿</h2>
        <el-button class="btns" type="warning" @click="toOrder">进入</el-button>
      </el-card>
    </el-col>
    <el-col span="12">
      <el-card class="card2">
        <h2 class="title">镁团</h2>
        <el-button class="btns" type="primary" @click="toOrderMT">进入</el-button>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
name: "PlatChoose",
  methods:{
  toOrder() {
    this.$router.push("/order")
  },
    toOrderMT() {
    this.$router.push("/orderMt")
    }
  }
}
</script>

<style lang="less" scoped>
.card1,.card2{
  width: 50%;
  margin-left: 60px;
  margin-top: 50px;
  border-radius: 20px;
}
.title{
  display: flex;
  justify-content: center;
}
.btns{
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
</style>
