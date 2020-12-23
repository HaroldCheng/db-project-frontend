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
        <el-table-column label="订单店铺" width="150px" prop="shop"> </el-table-column>
        <el-table-column label="所属平台" width="150px" prop="plat"></el-table-column>
      </el-table>
          </el-card>
    </div>
</div>

</template>

<script>
export default {
  data(){
    return {
      platId:1,
      userId:3,
        historyOrder:[
      ]
    }
  },
  created() {
    this.getHistoryOrder()
  },
  methods:{
  goBack() {
    this.$router.push('/userHome')
  },
    async getHistoryOrder(){
    const {data:res} = await this.$axios.post("client/history_order/",[this.platId,this.userId])
      if(res.status !== 200){
       return  this.$message.error("获取历史订单记录失败！")
      }
      this.$message.success("获取历史订单记录成功！")
      this.historyOrder = res.data.history_order
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
