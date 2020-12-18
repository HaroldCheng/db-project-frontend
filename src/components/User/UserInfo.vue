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
        <el-row :gutter="20">
          <el-col :span="8">
            <h3>用户编号</h3>
            <span>{{userInfo.id}}</span>
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
          <el-col :span="8">
            <h3>用户年龄</h3>
            <span>{{ userInfo.age}}</span>
          </el-col>
          <el-col :span="8">
            <h3>总消费</h3>
            <span>{{ userInfo.out }}</span>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <h3>用户地址</h3>
            <span>{{ userInfo.addr}}</span>
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
        <el-form-item label="用户性别">
          <el-input v-model="modifyUserInfo.gender"></el-input>
        </el-form-item>
        <el-form-item label="用户年龄">
          <el-input v-model="modifyUserInfo.age"></el-input>
        </el-form-item>
        <el-form-item label="用户电话">
          <el-input v-model="modifyUserInfo.tel"></el-input>
        </el-form-item>
        <el-form-item label="用户地址">
          <el-input v-model="modifyUserInfo.addr"></el-input>
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
        id:3,
        password:"sjknb"
      },
      userInfo: { //user's info object
        id: 0,
        name: "",
        age:12,
        addr: "",
        tel: "",
        gender: "",
        out:0,
      },
      modifyDiaVisible: false,
      modifyUserInfo: { //user's info modified
        id: 0,
        name: "",
        age:12,
        addr: "",
        tel: "",
        gender: "",
        out:0,
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
    async getUserInfo() { //Transfer checked,done
      const {data:res} = await this.$axios.post('client/get_info/', this.userLoginInfo)//address and parameters
      if (res.status !== 200) {
        return this.$message.error("获取用户信息失败！")
      }
      this.$message.success("获取用户信息成功！")
      this.userInfo = res.data.user_info
    },
    showModifyDia() {
      this.modifyDiaVisible = true
      this.modifyUserInfo.id = this.userInfo.id
      this.modifyUserInfo.name = this.userInfo.name
      this.modifyUserInfo.tel = this.userInfo.tel
      this.modifyUserInfo.gender = this.userInfo.gender
      this.modifyUserInfo.addr = this.userInfo.addr
      this.modifyUserInfo.age = this.userInfo.age
      this.modifyUserInfo.out = this.userInfo.out
    },
    modifyUserInfoClosed() {
      this.$refs.modifyInfoFormRef.resetFields()
    },
    async modifyCheck() {
      //TODO:表单预验证
      /*1. validation预验证
      * 2. 向后端发送修改请求
      * 3. 修改成功后，更新当前userInfo信息*/
      const {data:res} = await this.$axios.post("client/edit_info/",this.modifyUserInfo)
      if(res.status !== 200){
        return this.$message.error("修改失败")
      }
      this.userInfo = this.modifyUserInfo
      this.$message.success("修改成功")
      this.modifyDiaVisible = false
    },
    modifyCancel() {
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
