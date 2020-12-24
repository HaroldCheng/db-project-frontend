<template>
    <div>
        <div class="navi">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/riderHome' }">骑手主页</el-breadcrumb-item>
                <el-breadcrumb-item>骑手基本信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="infoTable">
            <el-card>
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <h3>骑手编号</h3>
                      <span>{{riderInfo.id}}</span>
                    </el-col>
                    <el-col :span="8">
                      <h3>骑手姓名</h3>
                      <span>{{ riderInfo.name }}</span>
                    </el-col>
                    <el-col :span="8">
                      <h3>骑手电话</h3>
                      <span>{{ riderInfo.tel }}</span>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <h3>骑手性别</h3>
                      <span>{{ riderInfo.gender }}</span>
                    </el-col>
                    <el-col :span="8">
                      <h3>骑手年龄</h3>
                      <span>{{ riderInfo.age}}</span>
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
          @close="modifyRiderInfoClosed"
      >
        <p>你可以对以下信息进行修改</p>
        <el-form :model="modifyRiderInfo" ref="modifyInfoFormRef" label-width="90px" :rules="modifyFormRules">
          <el-form-item label="骑手编号">
            <el-input disabled v-model="modifyRiderInfo.id"></el-input>
          </el-form-item>
          <el-form-item label="骑手名">
            <el-input v-model="modifyRiderInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="骑手性别">
            <el-input v-model="modifyRiderInfo.gender"></el-input>
          </el-form-item>
          <el-form-item label="骑手年龄">
            <el-input v-model="modifyRiderInfo.age"></el-input>
          </el-form-item>
          <el-form-item label="骑手电话">
            <el-input v-model="modifyRiderInfo.tel"></el-input>
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
  data() {
    return {
      riderLoginInfo:{
        id:5,
        password:'sjknb'
      },
      riderInfo:{
        id:1,
        name:'zhlsb',
        gender:'male',
        age:20,
        tel:12
      },
      modifyDiaVisible:false,
      modifyRiderInfo:{
        id:1,
        name:'',
        gender:'',
        age:12,
        tel:12
      },
      modifyFormRules:{ //TODO: sub important
        
      }
    }
  },
  created() {
    this.getRiderInfo()
  },
  methods:{
    async getRiderInfo(){
      const {data:res} = await this.$axios.post('rider/get_info/', this.riderLoginInfo)
      if (res.status !== 200) {
        return this.$message.error("获取用户信息失败！")
      }
      this.$message.success("获取用户信息成功！")
      this.riderInfo = res.data.rider_info
    },
    showModifyDia() {
      this.modifyDiaVisible = true
      this.modifyRiderInfo.id = this.riderInfo.id
      this.modifyRiderInfo.name = this.riderInfo.name
      this.modifyRiderInfo.tel = this.riderInfo.tel
      this.modifyRiderInfo.gender = this.riderInfo.gender
      this.modifyRiderInfo.age = this.riderInfo.age
    },
    modifyRiderInfoClosed() {
      this.$refs.modifyInfoFormRef.resetFields()
    },
    async modifyCheck() {
      const {data:res} = await this.$axios.post("rider/edit_info/",this.modifyRiderInfo)
      if(res.status !== 200){
        return this.$message.error("修改失败")
      }
      this.riderInfo = this.modifyRiderInfo
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