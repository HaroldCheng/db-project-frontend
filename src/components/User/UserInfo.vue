<template>
  <div>
    <div class="navi">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/userHome' }"
        >用户主页
        </el-breadcrumb-item
        >
        <el-breadcrumb-item>用户基本信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="infoTable">
      <el-card>
        <!--      <el-table :data="userInfo">-->
        <!--        <el-table-column label="用户编号" width="150px" prop="id">-->
        <!--        </el-table-column>-->
        <!--        <el-table-column label="用户姓名" width="150px" prop="name">-->
        <!--        </el-table-column>-->
        <!--        <el-table-column label="用户电话" width="150px" prop="tel"> </el-table-column>-->
        <!--        <el-table-column label="用户性别" width="150px" prop="gender"> </el-table-column>-->
        <!--        <el-table-column label="用户地址" width="150px" prop="address"> </el-table-column>-->
        <!--      </el-table>-->
        <el-row :gutter="20">
          <el-col :span="8">
            <h3>用户编号</h3>
            <span>{{ userInfo.id }}</span>
          </el-col>
          <el-col :span="8">
            <h3>用户姓名</h3>
            <span>{{ userInfo.name }}</span>
          </el-col>
          <el-col :span="8">
            <h3>用户电话</h3>
            <span>{{ userInfo.tel }}</span>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <h3>用户性别</h3>
            <span>{{ userInfo.gender }}</span>
          </el-col>
          <el-col :span="16">
            <h3>用户地址</h3>
            <span>{{ userInfo.address }}</span>
          </el-col>
        </el-row>
        <p>
          <el-button type="primary" round @click="showModifyDia()">修改信息</el-button>
        </p>
      </el-card>
    </div>
    <el-dialog
        title="修改用户信息"
        :visible.sync="modifyDiaVisible"
        width="50%"
        @close="modifyUserInfoClosed"
    >
      <p>你可以对以下信息进行修改</p>
      <el-form :model="modifyUserInfo" ref="modifyInfoFormRef" label-width="90px" :rules="modifyFormRules">
        <el-form-item label="用户编号">
          <el-input disabled v-model="modifyUserInfo.id"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
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
        <el-button type="info" round @click="modifyCancel">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkTel = (rule, value, callback) => {
      const regMobile = /^1[34578]\d{9}$/
      if (regMobile.test(value)) {
        return callback()
      }
      // 返回一个错误提示
      callback(new Error('请输入合法的手机号码'))
    }
    return {
      userLoginInfo: {
        //TODO:user's id and password from component_LoginChar
      },
      userInfo: { //user's info object
        id: 1,
        name: 'zhl',
        tel: '18813097336',
        gender: 'male',
        address: '123'
      },
      modifyDiaVisible: false,
      modifyUserInfo: { //user's info modified
        id: 0,
        name: "",
        tel: "",
        gender: "",
        address: ""
      },
      modifyFormRules: {
        newName: [
          {required: true, message: '请输入修改后的用户名', trigger: blur},
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        newTel: [
          {required: true, message: '请输入修改后的电话号码', trigger: blur},
          {validator: checkTel, trigger: "blur"}
        ],
        newGender: [
          {required: true, message: '请输入修改后的性别', trigger: blur}
        ],
        newAddress: [
          {required: true, message: '请输入修改后的地址', trigger: blur},
          {
            min: 3,
            max: 6,
            message: "长度在 3 到 6 个字符",
            trigger: "blur"
          }
        ]
      }

    };
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      const res = this.$axios.get('user_info', this.userLoginInfo)//address and parameters
      //TODO:cancel comment here
      // if(res.meta.status !== 200) {
      //   return this.$message.error("获取用户信息失败！")
      // }
      //assign the result to userInfo object
      this.userInfo = res.data.userInfo
    },
    showModifyDia() {
      this.modifyDiaVisible = true
      this.modifyUserInfo.id = this.userInfo.id
      this.modifyUserInfo.name = this.userInfo.name
      this.modifyUserInfo.tel = this.userInfo.tel
      this.modifyUserInfo.gender = this.userInfo.gender
      this.modifyUserInfo.address = this.userInfo.address
    },
    modifyUserInfoClosed() {
      this.$refs.modifyInfoFormRef.resetFields()
    },
    modifyCheck() {
      //TODO:表单预验证
      /*1. validation预验证
      * 2. 向后端发送修改请求
      * 3. 修改成功后，更新当前userInfo信息*/
      // const res = this.$axios.put("user_info",this.modifyUserInfo)
      //  if(res.mate.state !== 200) {
      //    return this.$message.error("更新用户信息失败！")
      //  }
      console.log("modify check here")
      this.userInfo = this.modifyUserInfo
      this.modifyDiaVisible = false
    },
    modifyCancel() {
      console.log("modify cancel here")
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
