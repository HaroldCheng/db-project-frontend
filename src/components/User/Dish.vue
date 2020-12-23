<template>
  <div>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/userHome' }"
          >用户主页</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{path:'/platChoose'}">选择平台</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/order'}">商铺列表</el-breadcrumb-item>
        <el-breadcrumb-item>商家菜品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dishTable">
      <el-card>
            <el-table :data="dishList">
              <el-table-column label="#" prop="id"></el-table-column>
              <el-table-column label="菜品名称" prop="name"></el-table-column>
              <el-table-column label="菜品单价" prop="price"></el-table-column>
              <el-table-column label="数量">
                <template slot-scope="scope">
                  <el-input-number v-model="scope.row.number" :min="1" size="mini"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="primary" plain @click="add2order(scope.row.id)">加入订单</el-button>
                </template>
              </el-table-column>
            </el-table>
        <p>
          <el-button type="primary" round @click="finishOrder">下单</el-button>
        </p>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      platId:0,
      userId:0,
      shopId:0,
      dishList:[{
        id:1,
        name:"小鸡儿炖菌子不要小鸡儿",
        price:25,
        number:0
      },
        {
          id:2,
          name:"冀晓青炒青小鸡儿",
          price:-10,
          number:0
        }],
      orderList:[{
        id:0,
        number:0
      }
      ]
    }
  },
  created() {
    this.getDishList()
  },
  methods:{
    async getDishList(){
      const {data:res} = await this.$axios.get("dish_list",this.shopId)
      if(res.status!==200){
        return this.$message.error("获取菜品信息失败！")
      }
      this.$message.success("获取菜品信息成功！")
      this.dishList = res.data.dish_list
    },
    add2order(dishID){
      console.log(dishID)
      this.orderList.push(dishID)
      console.log(this.orderList)
    },
    async finishOrder() {
      //TODO: modify the para to backend
      const {data:res} = await this.$axios.post("client/order_content/",[this.platId,this.userId,this.shopId,this.orderList])
      if(res.status!==200) {
        return this.$message.error("下单失败！")
      }
      this.$message.success("下单成功！")
    }
  }
};
</script>

<style lang="less" scoped>
.dishTable {
  margin-left: 40px;
  margin-top: 40px;
  width: 80%;
}
</style>
