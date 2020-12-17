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
                <el-button type="primary" size="small" round @click="goDish">查看详情</el-button>
                <el-button type="success" size="small" plain round @click="regVIP(scope.row.id)">注册该商家会员</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
<!--        <el-row :gutter="20" v-for="item in shopList" :key="item.id" :index="item.id+''">-->
<!--          <el-col :span="20"-->
<!--            ><div>-->
<!--              <p>-->
<!--                <el-table :data="item">-->
<!--                  <el-table-column label="店铺编号" prop="id"></el-table-column>-->
<!--                  <el-table-column label="店铺名称" prop="name"></el-table-column>-->
<!--                  <el-table-column label="店铺销量" prop="saleNumber"></el-table-column>-->
<!--                </el-table>-->
<!--              </p>-->
<!--              <el-button type="primary" @click="goDish">查看详情</el-button>-->
<!--              <el-button type="success" plain @click="regVIP">注册该商家会员</el-button>-->
<!--            </div>-->
<!--          </el-col>-->
<!--        </el-row>-->
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
      ],
      shopTotal:0
    }
  },
  created() {
    this.getShopInfo()
  },
  methods:{
    goDish() {
      this.$router.push("/dish")
    },
    regVIP(vipID) {
      const res = this.$axios.post('vip_list',vipID)
      if (res.meta.state !== 200){
        return this.$message.error("注册失败！")
      }
      this.$message.success("注册成功！")
    },
    getShopInfo() {
      const res = this.$axios.get('shop_list')//address and parameters
      if (res.meta.state !== 200){
        return this.$message.error("获取店铺信息失败！")
      }
      //TODO:assign the result to shop list
      this.shopList = res.data.shop_list
      this.shopTotal = res.data.shop_total
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
