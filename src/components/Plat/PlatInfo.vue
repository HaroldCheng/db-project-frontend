<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/platHome' }">平台管理者主页</el-breadcrumb-item>
                <el-breadcrumb-item>平台基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="infoTable">
            <el-card>
              <el-row :gutter="20">
                <el-col :span="8">
                  <h3>平台编号</h3>
                  <span>{{platInfo.id}}</span>
                </el-col>
                <el-col :span="8">
                  <h3>平台姓名</h3>
                  <span>{{ platInfo.name }}</span>
                </el-col>
                <el-col :span="8">
                  <h3>用户数量</h3>
                  <span>{{ platInfo.userNumber }}</span>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <h3>商家数量</h3>
                  <span>{{ platInfo.shopNumber }}</span>
                </el-col>
                <el-col :span="8">
                  <h3>骑手数量</h3>
                  <span>{{ platInfo.riderNumber}}</span>
                </el-col>
                <el-col :span="8">
                  <h3>季度营收</h3>
                  <span>{{ platInfo.income}}</span>
                </el-col>
              </el-row>
              <p>
                <el-button type="primary" round @click="showModifyDia()">修改信息</el-button>
              </p>
            </el-card>
        </div>
      <el-dialog
          title="修改平台信息"
          :visible.sync="modifyDiaVisible"
          width="50%"
          @close="modifyPlatInfoClosed"
      >
        <p>你可以对以下信息进行修改</p>
        <el-form :model="modifyPlatInfo" ref="modifyInfoFormRef" label-width="90px" :rules="modifyFormRules">
          <el-form-item label="平台编号">
            <el-input disabled v-model="modifyPlatInfo.id"></el-input>
          </el-form-item>
          <el-form-item label="平台名称">
            <el-input v-model="modifyPlatInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="用户数量">
            <el-input disabled v-model="modifyPlatInfo.userNumber"></el-input>
          </el-form-item>
          <el-form-item label="骑手数量">
            <el-input disabled v-model="modifyPlatInfo.riderNumber"></el-input>
          </el-form-item>
          <el-form-item label="商家数量">
            <el-input disabled v-model="modifyPlatInfo.shopNumber"></el-input>
          </el-form-item>
          <el-form-item label="总营收">
            <el-input disabled v-model="modifyPlatInfo.income"></el-input>
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
  props:['platId'],
  data() {
    return {
      platInfo:{
        id:1,
        name:'mt',
        userNumber:12,
        shopNumber:12,
        riderNumber:12,
        income:1212435
      },
      modifyDiaVisible:false,
      modifyPlatInfo:{
        id:1,
        name:'mt',
        userNumber:12,
        shopNumber:12,
        riderNumber:12,
        income:1212435
      },
      modifyFormRules:{

      }
    }
  },
  created() {
    this.getPlatInfo()
  },
  methods:{
    async getPlatInfo(){
      const {data:res} = await this.$axios.post('plat/plat_info/',[this.platId])
      if(res.status !== 200) return this.$message.error("获取平台信息错误")
      this.$message.success("获取平台信息成功")
      this.platInfo = res.data.plat_info
    },
    showModifyDia(){
      this.modifyDiaVisible = true
      this.modifyPlatInfo.id = this.platInfo.id
      this.modifyPlatInfo.name = this.platInfo.name
      this.modifyPlatInfo.userNumber = this.platInfo.userNumber
      this.modifyPlatInfo.shopNumber = this.platInfo.shopNumber
      this.modifyPlatInfo.riderNumber = this.platInfo.riderNumber
      this.modifyPlatInfo.income = this.platInfo.income
    },
    modifyPlatInfoClosed(){
      this.$refs.modifyInfoFormRef.resetFields()
    },
    async modifyCheck(){
      const {data:res} = await this.$axios.post('plat/edit/info/',this.modifyPlatInfo)
      if(res.status !== 200){
        return this.$message.error("修改失败")
      }
      this.platInfo = this.modifyPlatInfo
      this.$message.success("修改成功")
      this.modifyDiaVisible = false
    },
    modifyCancel(){
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