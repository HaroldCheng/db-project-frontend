<template>
<div>
    <div class="navi">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userHome' }"
          >用户主页</el-breadcrumb-item
        >
        <el-breadcrumb-item>历史订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
        <div class="historyTable">
          <el-card>
      <el-table :data="historyOrder">
        <el-table-column label="订单编号" width="150px" prop="id"> </el-table-column>
        <el-table-column label="订单金额" width="150px" prop="cost"> </el-table-column>
        <el-table-column label="订单内容" width="150px" prop="detail"> </el-table-column>
        <el-table-column label="订单日期" width="150px" prop="date"> </el-table-column>
      </el-table>
          </el-card>
    </div>
</div>

</template>

<script>
export default {
  data(){
    return {
        historyOrder:[
        {
          id:1,
          cost:100,
          detail:"西红柿炒鸡蛋不要鸡蛋和西红柿",
          date:"2020-12-2"
        },
          {
            id:2,
            cost:100,
            detail:"兰州拉面不要兰州的",
            date:"2020-12-2"
          },
          {
            id:3,
            cost:0.01,
            detail:"蛋炒苗家赫不要蛋",
            date:"2020-11-11"
          },
          {
            id:4,
            cost:-200,
            detail:"冀晓青炒青小鸡",
            date:"2020-12-17"
          }
      ]
    }
  },
methods:{
  goBack() {
    this.$router.push('/userHome')
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
