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
        <el-table :data="historyList">
          <el-table-column label="订单编号" prop="id" width="150px"> </el-table-column>
          <el-table-column label="订单金额" prop="cost" width="150px"> </el-table-column>
          <el-table-column label="订单平台" prop="plat" width="150px"> </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>

</template>

<script>
export default {
  props:['shopId'],
  data(){
    return{
      historyList:[
        {

        }
      ]
    }
  },
  created() {
    this.getOrderList()
  },
  methods: {
    async getOrderList(){
      const {data:res} = await this.$axios.post('shop/history_list/',[this.shopId])
      if(res.status !== 200) return this.$message.error("刷新失败！")
      this.$message.success("获取成功~")
      this.historyList = res.data.history_list
      console.log(res.data.history_list)
    },
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