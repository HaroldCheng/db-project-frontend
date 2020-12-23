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
                  <el-table-column label="订单编号" prop="id" width="150px"> </el-table-column>
                <el-table-column label="客户姓名" prop="userName" width="150px"></el-table-column>
                  <el-table-column label="客户地址" prop="userAddr" width="150px"> </el-table-column>
                  <el-table-column label="客户电话" prop="userTel" width="150px"> </el-table-column>
                  <el-table-column label="商家地址" prop="shopAddr" width="150px"> </el-table-column>
                  <el-table-column label="商家电话" prop="shopTel" width="150px"> </el-table-column>
                <el-table-column label="操作" width="150px">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" round v-if="scope.row.picked===false" @click="pickOrder(scope.index)">接单</el-button>
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
        orderSet:[
          {
            id:1,
            userName:'干饭人',
            userAddr:"NMB",
            userTel:'110',
            shopAddr:'美国白宫',
            shopTel:'119',
            picked:false
          }
        ]
    }
  },
methods:{
  goBack() {
    this.$router.push('/riderHome')
  },
  pickOrder:async function(index) {
    this.orderSet[index].picked = true
    const {data:res} = this.$axios.post()
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