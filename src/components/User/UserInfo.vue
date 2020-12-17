<template>
  <div>
    <div class="navi">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userHome' }"
          >用户主页</el-breadcrumb-item
        >
        <el-breadcrumb-item>用户基本信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="infoTable">
      <el-card>
      <el-table :data="userInfo">
        <el-table-column label="用户编号" width="150px" prop="id"> </el-table-column>
        <el-table-column label="用户姓名" width="150px" prop="name"> </el-table-column>
        <el-table-column label="用户电话" width="150px" prop="tel"> </el-table-column>
        <el-table-column label="用户性别" width="150px" prop="gender"> </el-table-column>
        <el-table-column label="用户地址" width="150px" prop="address"> </el-table-column>
      </el-table>
          <p>
          <el-button type="primary" round @click="showModifyDia">修改信息</el-button>
          </p>
      </el-card>
    </div>
    <el-dialog
        title="修改用户信息"
        :visible.sync="modifyDiaVisible"
        width="50%"
    >
      <p>你可以对以下信息进行修改</p>
      <el-form :model="modifyUserInfo"  ref="modifyInfoForm" label-width="70px">
        <el-form-item label="用户编号">
          <el-input disabled v-model="modifyUserInfo.id"></el-input>
        </el-form-item>
        <el-form-item  label="用户名">
          <el-input v-model="modifyUserInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="用户电话">
          <el-input v-model="modifyUserInfo.tel"></el-input>
        </el-form-item>
        <el-form-item label="用户性别">
          <el-input v-model="modifyUserInfo.gender"></el-input>
        </el-form-item>
        <el-form-item label="用户地址">
          <el-input v-model="modifyUserInfo.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" round @click="modifyCheck">确定</el-button>
        <el-button type="info" round @click="modifyDiaVisible=false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLoginInfo:{
        //TODO:user's id and password from component_LoginChar
      },
      userInfo:[{ //user's info object
        id:'1',
        name:'zhl',
        tel:'18813097336',
        gender:'male',
        address:'123'
      }],
      modifyDiaVisible:false,
      modifyUserInfo:{ //user's info modified
      }

    };
  },
  created() {
    // this.getUserInfo()
    // console.log("debug")
  },
  methods:{
   getUserInfo() {
     const res = this.$axios.post('user_info',this.userLoginInfo)//address and parameters
     //TODO:assign the result to userInfo object
     this.userInfo=res.data.userInfo
   },
    showModifyDia() {
     this.modifyDiaVisible=true
      this.modifyUserInfo = this.userInfo[0]
    },
    modifyCheck() {
     // const res = this.$axios.put("user_info",this.modifyUserInfo)
     //  if(res.mate.state !== 200) {
     //    return this.$message.error("更新用户信息失败！")
     //  }
      console.log("modify check here")
      this.userInfo[0]=this.modifyUserInfo
      this.modifyDiaVisible = false

    }
  }
};
</script>

<style lang="less" scoped>
.myInfo {
  margin-top: 40px;
  margin-left: 80px;
}
.infoTable {
  margin-left: 40px;
  margin-top: 40px;
  width: 80%;
}
</style>
