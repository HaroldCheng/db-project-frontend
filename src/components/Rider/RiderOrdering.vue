<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/riderHome' }">骑手主页</el-breadcrumb-item>
                <el-breadcrumb-item>进行中的订单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="historyTable">
            <el-card>
              <el-table :data="orderingSet">
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
                    <el-button type="primary" round size="small" @click="finishOrder(scope.$index,scope.row.id)" v-if="scope.row.finished===false">完成派单</el-button>
                    <el-button type="info" round size="small" disabled v-if="scope.row.finished===true">已完成</el-button>
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
      riderId:3,
        orderingSet:[
          {
            id:1,
            userName:'',
            userAddr:'',
            userTel:'12',
            shopName:'',
            shopAddr:'',
            shopTel:'',
            platName:'',
            finished:false
          },
          {
            id:1,
            userName:'',
            userAddr:'',
            userTel:'12',
            shopName:'',
            shopAddr:'',
            shopTel:'',
            platName:'',
            finished:false
          }
        ]
    }
  },
  created() {
    this.getOrderingSet()
  },
  methods:{
  goBack() {
    this.$router.push('/riderHome')
  },
  async getOrderingSet(){
    const {data:res} = await this.$axios.post('rider/ordering_list/',[this.riderId])
    if(res.status !== 200) return this.$message.error("获取进行中的订单失败")
    this.$message.success("获取进行中的订单成功")
    this.orderingSet = res.data.ordering_list
  },
  finishOrder:async function(index,id){
    const {data:res} = await this.$axios.post('rider/finish_order/',[id])
    if(res.status !== 200) return this.$message.error("网络错误!")
    this.$message.success("派送成功!")
    this.orderingSet[index].finished = true
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