<template>
<el-container class="userHomeContainer">
  <el-header>
    <div>
      <span>多平台外卖系统</span>
    </div>
    <el-button class="logout_button" type="info" @click="logout">退出</el-button>
  </el-header>
  <el-container class="aside_main">
      <el-aside width="300px">
          <el-menu unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath" background-color="#87cefa" text-color="#fff" active-text-color="black">
              <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
                  <template slot="title">
                      <i :class="iconObj[item.id]"></i>
                      <span>{{ item.authName}}</span>
                  </template>
                  <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/' + subItem.path)">
                      <template slot="title">
                          <i class="el-icon-menu"></i>
                          <span>{{ subItem.authName}}</span>
                      </template>
                  </el-menu-item>
              </el-submenu>
              <el-menu-item class="infoMenu" index="riderInfo" @click="saveNavState('riderInfo')">
                  <i class="el-icon-user-solid"></i>
                  <span class="info">骑手基本信息</span>
              </el-menu-item>
              <el-menu-item class="orderMenu" index="riderOrder" @click="saveNavState('riderOrder')">
                  <i class="el-icon-time"></i>
                  <span class="order">可接收的订单</span>
              </el-menu-item>
              <el-menu-item class="historyMenu" index="riderOrdering" @click="saveNavState('riderOrdering')">
                  <i class="el-icon-time"></i>
                  <span class="order">进行中的订单</span>
              </el-menu-item>
              <el-menu-item class="moneyMenu" index="riderHistory" @click="saveNavState('riderHistory')">
                  <i class="el-icon-pie-chart"></i>
                  <span class="money">本月绩效</span>
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
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data(){
    return{
      msg:'',
    }
  },
  methods:{
    logout(){
      window.sessionStorage.clear();
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="less" scoped>
.userHomeContainer{
  height: 100%;
  .aside_main{
    height: 100%;
  }
}
    .el-header {
        background-color: black;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        text-align: center;
        padding-left: 40px;
        padding-right: 40px;
    }
  .logout_button{
    display: inline-block;
            margin: 100px;
            padding: 6px 16px;
            background: grey;
            border-radius: 4px;
            box-shadow: 0 1px 5px gray;
            color: white;
            text-shadow: 0 -1px 1px #335166;
            font-size: 20px;
            line-height: 30px;
  }

    .el-aside {
        background-color: lightskyblue;
        color: #fff;
        text-align: center;
        float: left;
        height: 100%;
        .author

    {
        color: #fff;
        position: absolute;
        bottom: 0px;
        left: 50px;
    }
    }



    .el-main {
        background-color: #FFFFFF;
        color: #333;
        height: 100%;
    }
.info,
.order,
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