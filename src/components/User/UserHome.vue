<template>
  <el-container>
    <el-header>
      <span>多平台外卖系统</span>
      <el-button plain @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu
          background-color="#409eff"
          text-color="white"
          active-text-color="black"
          :router="true"
          :default-active="activePath"
        >
          <el-menu-item class="infoMenu" index="userInfo" @click="saveNavState('userInfo')">
            <i class="el-icon-user-solid"></i>
            <span class="info">客户基本信息</span>
          </el-menu-item>
          <el-menu-item class="orderMenu" index="platChoose" @click="saveNavState('platChoose')">
            <i class="el-icon-fork-spoon"></i>
            <span class="platChoose">发起订单</span>
          </el-menu-item>
          <el-menu-item class="historyMenu" index="history" @click="saveNavState('history')">
            <i class="el-icon-time"></i>
            <span class="history">历史订单</span>
          </el-menu-item>
          <el-menu-item class="moneyMenu" index="money" @click="saveNavState('money')">
            <i class="el-icon-pie-chart"></i>
            <span class="money">消费信息</span>
          </el-menu-item>
        </el-menu>
        <div class="author">
          <p>北航数据库大作业</p>
          <p>郑海林 18373388</p>
          <p>王铉茜 18373743</p>
          <p>陈哲琦 18182602</p>
        </div>
      </el-aside>
      <el-main>
        <router-view :userId="userLoginForm.id"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import UserInfo from "@/components/User/UserInfo"
import PlatChoose from "@/components/User/PlatChoose"
import Order from "@/components/User/Order"
import OrderMT from "@/components/User/OrderMT"
import Dish from "@/components/User/Dish"
import History from "@/components/User/History"
import Money from "@/components/User/Money"

export default {
  components:{
    UserInfo,
    PlatChoose,
    OrderMT,
    Order,
    Dish,
    History,
    Money
  },
  data() {
    return{
      userLoginForm:{
        id:12,
        password:''
      },
      activePath:''
    }
  },
  created () {
    this.userLoginForm = this.$store.state.userLoginForm
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push("/login")
    },
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath',activePath)
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-header span {
  font-size: 20px;
}
.el-aside {
  background-color: #409eff;
  .author {
    color: #fff;
    position: absolute;
    bottom: 0px;
    left: 50px;
  }
}
.info,
.platChoose,
.history,
.money {
  font-size: 16px;
}
.infoMenu,
.orderMenu,
.historyMenu,
.moneyMenu {
  margin-top: 10px;
}
</style>
