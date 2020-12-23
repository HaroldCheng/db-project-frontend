<template>
<div>
    <div class="navi">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/riderHome' }"
          >骑手主页</el-breadcrumb-item
        >
        <el-breadcrumb-item>可接收的订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
        <div class="historyTable">
          <el-card>
              <el-table :data="orderSet">
                  <el-table-column label="#" prop="id" width="80px"> </el-table-column>
                <el-table-column label="客户姓名" prop="userName" width="150px"></el-table-column>
                  <el-table-column label="客户地址" prop="userAddr" width="150px"> </el-table-column>
                  <el-table-column label="客户电话" prop="userTel" width="150px"> </el-table-column>
                <el-table-column label="商家姓名" prop="shopName" width="100px"></el-table-column>
                  <el-table-column label="商家地址" prop="shopAddr" width="150px"> </el-table-column>
                  <el-table-column label="商家电话" prop="shopTel" width="150px"> </el-table-column>
                <el-table-column label="订单平台" prop="platName" width="100px"></el-table-column>
                <el-table-column label="操作" width="150px">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" round v-if="scope.row.picked===false" @click="pickOrder(scope.$index)">接单</el-button>
                    <el-button type="primary" size="small" round v-if="scope.row.picked===true" disabled>已接单</el-button>
                  </template>
                </el-table-column>
              </el-table>
          </el-card>
    </div>
</div>

</template>

<script>
export default {
  data(){
    return{
      platId:1,
      riderId:5,
        orderSet:[
          {
            id:1,
            userName:'干饭人',
            userAddr:"NMB",
            userTel:'110',
            shopName:'sd',
            shopAddr:'美国白宫',
            shopTel:'119',
            platName:1,
            picked:false
          }
        ]
    }
  },
  created() {
    this.getOrderList()
  },
  methods:{
  goBack() {
    this.$router.push('/riderHome')
  },
  pickOrder:async function(index) {
    const {data:res} = await this.$axios.post('rider/pick_order',index)
    if(res.status !== 200) {
      return this.$message.error("接单失败!")
    }
    this.$message.success("接单成功!")
    this.orderSet[index].picked = true
  },
    async getOrderList() {
    const {data:res} = await this.$axios.post("rider/order_list",this.riderId)
      if(res.status !== 200) {
        return this.$message.error("获取订单列表失败!")
      }
      this.$message.success("获取订单列表成功!")
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