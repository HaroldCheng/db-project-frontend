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
        <span slot="default">
          <el-button type="primary" round @click="showModifyDia">修改信息</el-button>
        </span>
      </el-card>
    </div>
    <el-dialog
        title="修改用户信息"
        :visible.sync="modifyDiaVisible"
        width="50%"
    >
      <p>你可以对以下信息进行修改</p>
      <span slot="footer">
        <el-button type="primary" round @click="modifyDiaVisible=false">确定</el-button>
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
      modifyDiaVisible:false

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
