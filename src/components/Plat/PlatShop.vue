<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/platHome' }">平台管理者主页</el-breadcrumb-item>
                <el-breadcrumb-item>平台店铺基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="infoTable">
            <el-card>
                <el-table :data="shopList">
                    <el-table-column label="店铺编号" prop="id" width="100px"> </el-table-column>
                    <el-table-column label="店铺名称" prop="name" width="100px"> </el-table-column>
                    <el-table-column label="店铺电话" prop="tel" width="150px"> </el-table-column>
                    <el-table-column label="店铺地址" prop="addr" width="150px"> </el-table-column>
                    <el-table-column label="菜品数量" prop="dishNumber" width="100px"> </el-table-column>
                    <el-table-column label="商家收入" prop="income" width="100px"> </el-table-column>
                  <el-table-column label="商家星级" prop="star" width="150px"></el-table-column>
                  <el-table-column label="操作" width="200px">
                    <template slot-scope="scope">
                      <el-button type="primary" round size="small" @click="killShop(scope.row.id)">注销商家</el-button>
                      <el-button type="primary" round size="small" @click="modifyStar(scope.row.star,scope.row.id)">修改星级</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-card>
          <el-dialog title="修改店铺星级"
          :visible.sync="modifyDiaVisible"
          width="50%"
          @close="modifyStarInfoClosed">
            <p>请修改该店铺的星级</p>
            <el-form :model="modifyStarInfo" ref="modifyInfoFormRef" label-width="90px">
              <el-form-item label="新的星级">
                <el-input v-model="modifyStarInfo.star"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer">
              <el-button type="primary" round @click="modifyCheck">确定</el-button>
              <el-button typpe="info" round @click="modifyCancel">取消</el-button>
            </span>
          </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      platId:2,
      shopList:[
        {
          id:1,
          name:'',
          tel:'',
          addr:'',
          dishNumber:12,
          income:123,
          star:2
        }
      ],
      modifyStarInfo:{
        id:1,
        star:2
      },
      modifyDiaVisible:false
    }
  },
  created() {
    this.getShopList()
  },
  methods:{
    async getShopList(){
      const {data:res} = await this.$axios.post('plat/shop_list/',[this.platId])
      if(res.status !== 200) return this.$message.error("获取店铺列表失败")
      this.$message.success("获取店铺列表成功")
      this.shopList = res.data.shop_list
    },
    killShop:async function(id) {
      const {data:res} = await this.$axios.post('plat/shop_kill/',[id])
      if(res.status !== 200) return this.$message.error("删除店铺失败！")
      this.$message.success("删除店铺成功")
      this.shopList = res.data.shop_list  //返回新的店铺列表
    },
    modifyStar:function(star,id) {
      this.modifyDiaVisible = true
      this.modifyStarInfo.id = id
      this.modifyStarInfo.star = star
    },
    modifyStarInfoClosed() {
      this.$refs.modifyInfoFormRef.resetFields()
    },
    async modifyCheck(){
      const {data:res} = await this.$axios.post('plat/edit_shop_star/',this.modifyStarInfo)
      if(res.status !== 200) return this.$message.error("修改星级失败！")
      this.$message.success("修改星级成功")
      this.shopList = res.data.shop_list
      this.modifyDiaVisible = false
    },
    modifyCancel(){
      this.modifyDiaVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
    .infoTable {
        margin-left: 40px;
        margin-top: 40px;
        width: 80%;
    }
</style>