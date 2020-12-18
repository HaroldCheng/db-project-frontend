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
    <h2 class="title">欢迎来到镁团平台</h2>
    <div class="shopTable">
      <el-card>
        <div>
          <el-table :data="shopList">
            <el-table-column label="店铺编号" prop="id" ></el-table-column>
            <el-table-column label="店铺名称" prop="name"></el-table-column>
            <el-table-column label="店铺销量" prop="saleNumber"></el-table-column>
            <el-table-column label="店铺星级" prop="star"></el-table-column>
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
      platId:1,
      shopList:[
        {
          id:1,
          name:"shop1",
          saleNumber:111,
          star:5
        },{
          id:2,
          name:"shop2",
          saleNumber: 123,
          star: 3
        },{
          id:3,
          name:"shop3",
          saleNumber: 123,
          star: 1
        },{
          id:4,
          name:"shop4",
          saleNumber: 123,
          star: 2
        }
      ]
    }
  },
  created() {
    this.getShopList()
  },
  methods:{
    chooseDish(shopID) {
      this.$router.push("/dish")
    },
    async regVIP(shopID) {
      const {data:res} = await this.$axios.post('shop/vip_list/',shopID)
      if (res.status !== 200){
        return this.$message.error("注册失败！")
      }
      this.$message.success("注册成功！")
    },
    async getShopList() {
      const {data:res} = await this.$axios.post('shop/shop_list/',this.platId)//address and parameters
      if (res.status !== 200){
        return this.$message.error("获取店铺信息失败！")
      }
      this.$message.success("获取店铺信息成功！")
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
.title{
  margin-left: 40px;
  margin-top: 20px;
}
</style>
