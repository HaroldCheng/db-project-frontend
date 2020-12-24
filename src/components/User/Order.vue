<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userHome' }"
          >用户主页</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{path:'/platChoose'}">选择平台</el-breadcrumb-item>
        <el-breadcrumb-item>商铺列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2 class="title">欢迎来到饿没饿平台</h2>
    <div class="shopTable">
      <el-card>
        <div>
          <el-table :data="shopList">
            <el-table-column label="店铺编号" prop="id" width="80px" align="center"></el-table-column>
                              <el-table-column label="店铺名称" prop="name" align="center" width="300px"></el-table-column>
                              <el-table-column label="店铺销量" prop="saleNumber" width="100px" align="center"></el-table-column>
            <el-table-column label="店铺星级" prop="star" width="80px" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="primary" size="small" round @click="chooseDish(scope.row.id)">查看详情</el-button>
                <el-button type="success" size="small" plain round @click="regVIP(scope.$index)" v-if="scope.row.vip===false">
                  注册该商家会员
                </el-button>
                <el-button type="info" size="small" plain round v-if="scope.row.vip===true" disabled>
                  已是该商家会员
                </el-button>
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
  props:['userId'],
  data(){
    return{
      platId:2,
      shopList:[
        {
          id:1,
          name:"shop1",
          saleNumber:111,
          star:5,
          vip:false
        }
      ]
    }
  },
  created() {
    this.userId = this.$store.state.userLoginForm.id
    this.getShopList()
  },
  methods:{
    chooseDish(shopID) {
      const ids={
        platId:this.platId,
        shopId:shopID
      }
      this.$store.commit('userChooseShop',ids)
      this.$router.push("/dish")
    },
    regVIP:async function(p) {
      this.shopList[p].vip = true
      const {data:res} = await this.$axios.post('client/vip_list/',[this.shopList[p].id,this.userId])
      if (res.status !== 200){
        return this.$message.error("注册失败！")
      }
      this.$message.success("注册成功！")
    },
    async getShopList() {
      const {data:res} = await this.$axios.post('client/shop_list/',[this.platId,this.userId])//address and parameters
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
  width: 90%;
}
.title{
  margin-left: 40px;
  margin-top: 20px;
}
</style>
