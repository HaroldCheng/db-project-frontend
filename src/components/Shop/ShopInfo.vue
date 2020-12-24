<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/shopHome' }">店铺主页</el-breadcrumb-item>
                <el-breadcrumb-item>店铺基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="infoTable">
            <el-card>
              <el-row :gutter="20">
                <el-col :span="8">
                  <h3>店铺编号</h3>
                  <span>{{shopInfo.id}}</span>
                </el-col>
                <el-col :span="8">
                  <h3>店铺名称</h3>
                  <span>{{ shopInfo.name }}</span>
                </el-col>
                <el-col :span="8">
                  <h3>店铺电话</h3>
                  <span>{{ shopInfo.tel }}</span>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <h3>店铺地址</h3>
                  <span>{{ shopInfo.address }}</span>
                </el-col>
                <el-col :span="8">
                  <h3>菜品数量</h3>
                  <span>{{ shopInfo.dishNumber}}</span>
                </el-col>
                <el-col :span="8">
                  <h3>店铺销量</h3>
                  <span>{{ shopInfo.saleNumber}}</span>
                </el-col>
              </el-row>
              <p>
                <el-button type="primary" round @click="showModifyDia()">修改信息</el-button>
              </p>
            </el-card>
        </div>
      <el-dialog
          title="修改骑手信息"
          :visible.sync="modifyDiaVisible"
          width="50%"
          @close="modifyShopInfoClosed"
      >
        <p>你可以对以下信息进行修改</p>
        <el-form :model="modifyShopInfo" ref="modifyInfoFormRef" label-width="90px" :rules="modifyFormRules">
          <el-form-item label="店铺编号">
            <el-input disabled v-model="modifyShopInfo.id"></el-input>
          </el-form-item>
          <el-form-item label="店铺名称">
            <el-input v-model="modifyShopInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="店铺电话">
            <el-input v-model="modifyShopInfo.tel"></el-input>
          </el-form-item>
          <el-form-item label="店铺地址">
            <el-input v-model="modifyShopInfo.address"></el-input>
          </el-form-item>
          <el-form-item label="菜品数量">
            <el-input disabled v-model="modifyShopInfo.dishNumber"></el-input>
          </el-form-item>
          <el-form-item label="店铺销量">
            <el-input disabled v-model="modifyShopInfo.saleNumber"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer">
        <el-button type="primary" round @click="modifyCheck">确定</el-button>
        <el-button type="info" round @click="modifyCancel">取消</el-button>
      </span>
      </el-dialog>
    </div>
</template>

<script>
export default {
  props:['shopId'],
  data() {
    return {
      shopInfo:{
        id:1,
        name:'',
        tel:'12',
        address:'23',
        dishNumber:21,
        saleNumber:129
      },
      modifyDiaVisible:false,
      modifyShopInfo:{
        id:1,
        name:'',
        tel:'12',
        address:'23',
        dishNumber:21,
        saleNumber:129
      },
      modifyFormRules:{

      }
    }
  },
  created() {
    this.getShopInfo()
  },
  methods:{
    async getShopInfo(){
      const {data:res} = await this.$axios.post('shop/get_info/', [shopId])
      if (res.status !== 200) {
        return this.$message.error("获取店铺信息失败！")
      }
      this.$message.success("获取店铺信息成功！")
      this.shopInfo = res.data.shop_info
    },
    showModifyDia() {
      this.modifyDiaVisible = true
      this.modifyShopInfo.id = this.shopInfo.id
      this.modifyShopInfo.name = this.shopInfo.name
      this.modifyShopInfo.tel = this.shopInfo.tel
      this.modifyShopInfo.gender = this.shopInfo.gender
      this.modifyShopInfo.age = this.shopInfo.age
    },
    modifyShopInfoClosed() {
      this.$refs.modifyInfoFormRef.resetFields()
    },
    async modifyCheck() {
      const {data:res} = await this.$axios.post("shop/edit_info/",this.modifyShopInfo)
      if(res.status !== 200){
        return this.$message.error("修改失败")
      }
      this.shopInfo = this.modifyShopInfo
      this.$message.success("修改成功")
      this.modifyDiaVisible = false
    },
    modifyCancel() {
      this.modifyDiaVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
    .myInfo {
        margin-top: 40px;
        margin-left: 80px;
    }
    .button {
        margin-top: 40px;
    }

    .infoTable {
        margin-left: 40px;
        margin-top: 40px;
        width: 80%;
    }
</style>