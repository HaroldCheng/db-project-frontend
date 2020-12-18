<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userHome' }"
          >用户主页</el-breadcrumb-item
        >
        <el-breadcrumb-item>商铺列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="shopTable">
      <el-card>
        <div>
          <el-table :data="shopList">
            <el-table-column label="店铺编号" prop="id" ></el-table-column>
                              <el-table-column label="店铺名称" prop="name"></el-table-column>
                              <el-table-column label="店铺销量" prop="saleNumber"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="small" round @click="chooseDish(scope.row.id)">查看详情</el-button>
                <el-button type="success" size="small" plain round @click="regVIP(scope.row.id)">注册该商家会员</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      shopList:[
        {
          id:1,
          name:"shop1",
          saleNumber:111
        },{
        id:2,
          name:"shop2",
          saleNumber: 123
        },{
          id:3,
          name:"shop3",
          saleNumber: 123
        },{
          id:4,
          name:"shop4",
          saleNumber: 123
        }
      ]
    }
  },
  created() {
    this.getShopInfo()
  },
  methods:{
    chooseDish(shopID) {
      this.$router.push("/dish")
    },
    async regVIP(vipID) {
      const {data:res} = await this.$axios.post('shop/vip_list/',vipID)
      if (res.status !== 200){
        return this.$message.error("注册失败！")
      }
      this.$message.success("注册成功！")
    },
    async getShopInfo() {
      const {data:res} = await this.$axios.post('shop/shop_list/')//address and parameters
      if (res.status !== 200){
        return this.$message.error("获取店铺信息失败！")
      }
      this.$message.success("获取店铺信息成功！")
      //TODO:assign the result to shop list
      this.shopList = res.data.shop_list
    }
  }
};
</script>

<style lang="less" scoped>
.shopTable {
  margin-left: 40px;
  margin-top: 40px;
  width: 80%;
}
</style>
