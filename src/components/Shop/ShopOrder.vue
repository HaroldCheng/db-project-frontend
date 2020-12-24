<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: 'shopHome' }">店铺主页</el-breadcrumb-item>
                <el-breadcrumb-item>当前订单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="historyTable">
            <el-card>
                <el-table>
                    <el-table-column label="订单编号" width="150px"> </el-table-column>
                    <el-table-column label="订单金额" width="150px"> </el-table-column>
                    <el-table-column label="订单内容" width="150px"> </el-table-column>
                    <el-table-column label="订单平台" width="150px"> </el-table-column>
                  <el-table-column label="操作" width="150px">
                    <template slot-scope="scope">
                      <el-button type="primary" round size="small" @click="finishOrder(scope.row.id)">完成订单</el-button>
                    </template>
                  </el-table-column>
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
          orderList:[
            {

            }
          ]
        }
      },
      created() {

      },
      methods: {
        async getOrderList(){
          const {data:res} = await this.$axios.post('shop/order_list/',[shopId])
          if(res.status !== 200) return this.$message.error("刷新失败！")
          this.$message.success("获取成功")
          this.orderList = res.data.order_list
        },
        finishOrder:async function(id){
          const {data:res}= await this.$axios.post('shop/finish_order/',[id])
          if(res.status !== 200) return this.$message.error("网络错误")
          this.$message.success("完成订单")
          this.orderList = res.data.order_list
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