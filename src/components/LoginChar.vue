<template>
  <div class="charContainer">
    <div class="title">
      <h2>欢迎来到干饭人多平台外卖系统</h2>
      <h2>请根据你的身份登录</h2>
    </div>
    <!--不同身份的登录界面-->
    <!--user login entry-->
    <div class="userLogin">
      <div class="userIcon">
        <img src="../assets/user.png" alt="userIcon" style="zoom: 20%" />
      </div>
      <h3>客户</h3>
      <!--user login form-->
      <div>
        <el-form
          class="userForm"
          :rules="loginRules"
          :model="userForm"
          ref="userRef"
        >
          <el-form-item prop="id">
            <el-input
              placeholder="用户编号"
              prefix-icon="el-icon-user"
              v-model="userForm.id"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-lock"
              v-model="userForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="loginUser">登录</el-button>
            <el-button type="info" @click="resetUser">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!--rider login entry-->
    <div class="riderLogin">
      <div class="riderIcon">
        <img src="../assets/rider.png" alt="riderIcon" style="zoom: 20%" />
      </div>
      <h3>骑手</h3>
      <!--rider login form-->
      <div>
        <el-form
          class="riderForm"
          :rules="loginRules"
          :model="riderForm"
          ref="riderRef"
        >
          <el-form-item prop="id">
            <el-input
              placeholder="用户编号"
              prefix-icon="el-icon-user"
              v-model="riderForm.id"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-lock"
              v-model="riderForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="loginRider">登录</el-button>
            <el-button type="info" @click="resetRider">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!--plat login entry-->
    <div class="platLogin">
      <div class="platIcon">
        <img src="../assets/plat.png" alt="platIcon" style="zoom: 20%" />
      </div>
      <h3>平台</h3>
      <!--plat login form-->
      <div>
        <el-form
          class="platForm"
          :rules="loginRules"
          :model="platForm"
          ref="platRef"
        >
          <el-form-item prop="id">
            <el-input
              placeholder="用户编号"
              prefix-icon="el-icon-user"
              v-model="platForm.id"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-lock"
              v-model="platForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="loginPlat">登录</el-button>
            <el-button type="info" @click="resetPlat">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!--shop login entry-->
    <div class="shopLogin">
      <div class="shopIcon">
        <img src="../assets/shop.png" alt="shopIcon" style="zoom: 20%" />
      </div>
      <h3>商家</h3>
      <!--shop login form-->
      <div>
        <el-form
          class="shopForm"
          :rules="loginRules"
          :model="shopForm"
          ref="shopRef"
        >
          <el-form-item prop="id">
            <el-input
              placeholder="用户编号"
              prefix-icon="el-icon-user"
              v-model="shopForm.id"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-lock"
              v-model="shopForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="loginShop">登录</el-button>
            <el-button type="info" @click="resetShop">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        id: "",
        password: "",
      },
      riderForm: {
        id: "",
        password: "",
      },
      platForm: {
        id: "",
        password: "",
      },
      shopForm: {
        id: "",
        password: "",
      },
      loginRules: {
        id: [
          { required: true, message: "请输入用户编号", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async loginUser() {
        const {data:res} = await this.$axios.post("login_user/",this.userForm)//请求地址和参数
        if(res.status===250) return this.$message.error("不存在该用户")
        if(res.status===270) return this.$message.error("密码错误")
        if(res.status!==200) return this.$message.error("未知错误")
        this.$message.success("登录成功")
        this.$store.commit('loginUser',this.userForm)
        this.$router.push("/userHome")
    },
    resetUser() {
      this.$refs.userRef.resetFields();
    },
    async loginRider() {
        const {data:res} =await this.$axios.post("login_rider/",this.riderForm)
        if(res.status===250) return this.$message.error("不存在该用户")
        if(res.status===270) return this.$message.error("密码错误")
        if(res.status!==200) return this.$message.error("未知错误")
        this.$message.success("登录成功")
        this.$store.commit('loginRider',this.riderForm)
        this.$router.push("/riderHome")
    },
    resetRider() {
      this.$refs.riderRef.resetFields();
    },
    async loginPlat() {
        const {data:res} = await this.$axios.post("login_plat/",this.platForm)
        if(res.status===250) return this.$message.error("不存在该用户")
        if(res.status===270) return this.$message.error("密码错误")
        if(res.status!==200) return this.$message.error("未知错误")
        this.$message.success("登录成功")
        this.$store.commit('loginPlat',this.platForm)
        this.$router.push("/platHome");
    },
    resetPlat() {
      this.$refs.platRef.resetFields();
    },
    async loginShop() {
        const {data:res} = await this.$axios.post("login_shop/",this.shopForm)
        if(res.status===250) return this.$message.error("不存在该用户")
        if(res.status===270) return this.$message.error("密码错误")
        if(res.status!==200) return this.$message.error("未知错误")
        this.$message.success("登录成功")
        this.$store.commit('loginShop',this.shopForm)
        this.$router.push("/shopHome");
    },
    resetShop() {
      this.$refs.shopRef.resetFields();
    },
  },
};
</script>

<style lang='less' scoped>
.charContainer {
  background-color: #409eff;
  height: 100%;
}
.title {
  text-align: center;
  color: #fff;
}

.userLogin {
  width: 250px;
  height: 280px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
  .userIcon {
    height: 50px;
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 3px;
    box-shadow: 0 0 5px #ddd;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.userLogin h3 {
  text-align: center;
  margin-top: 50px;
}
.userForm {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  .btns {
    display: flex;
    justify-content: center;
  }
}
.riderLogin {
  width: 250px;
  height: 280px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  .riderIcon {
    height: 50px;
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 3px;
    box-shadow: 0 0 5px #ddd;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.riderLogin h3 {
  text-align: center;
  margin-top: 50px;
}
.riderForm {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  .btns {
    display: flex;
    justify-content: center;
  }
}
.platLogin {
  width: 250px;
  height: 280px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  .platIcon {
    height: 50px;
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 3px;
    box-shadow: 0 0 5px #ddd;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.platLogin h3 {
  text-align: center;
  margin-top: 50px;
}
.platForm {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  .btns {
    display: flex;
    justify-content: center;
  }
}
.shopLogin {
  width: 250px;
  height: 280px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 80%;
  top: 50%;
  transform: translate(-50%, -50%);
  .shopIcon {
    height: 50px;
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 3px;
    box-shadow: 0 0 5px #ddd;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.shopLogin h3 {
  text-align: center;
  margin-top: 50px;
}
.shopForm {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  .btns {
    display: flex;
    justify-content: center;
  }
}
</style>
