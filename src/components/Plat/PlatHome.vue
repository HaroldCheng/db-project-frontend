<template>
<el-container class="userHomeContainer">
  <el-header>
      <span>多平台外卖系统</span>
    <el-button plain @click="logout">退出</el-button>
  </el-header>
  <el-container>
      <el-aside>
          <el-menu
                   background-color="#ffc300"
                   text-color="#fff"
                   active-text-color="black"
                   :router="true"
                   :default-active="activePath">

              <el-menu-item index="platInfo" class="aside_menu1" @click="saveNavState('platInfo')">
                <i class="el-icon-user-solid"></i>
                  <span>平台基本信息</span>
              </el-menu-item>
              <el-menu-item index="platShop" class="aside_menu2" @click="saveNavState('platShop')">
                <i class="el-icon-s-shop"></i>
                <span>平台商家</span>
              </el-menu-item>
              <el-menu-item index="platUser" class="aside_menu3" @click="saveNavState('platUser')">
                <i class="el-icon-user-solid"></i>
                  <span>平台客户</span>
              </el-menu-item>
              <el-menu-item index="platRider" class="aside_menu4" @click="saveNavState('platRider')">
                <i class="el-icon-caret-right"></i>
                  <span>平台骑手</span>
              </el-menu-item>
              <el-menu-item index="platIncome" class="aside_menu5" @click="saveNavState('platIncome')">
                <i class="el-icon-s-finance"></i>
                  <span>平台财务情况</span>
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
  created () {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods:{
    logout(){
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath',activePath)
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
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    align-items: center;
    font-size: 20px;
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
        background-color: rgb(255, 195, 0);
        color: rgb(255, 195, 0);
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
  .aside_menu{
    height: 100%;
    .aside_menu1{
      margin-top: 20px;
      font-size: 20px;
    }
        .aside_menu2{
      margin-top: 20px;
      font-size: 20px;
    }    
    .aside_menu3{
      margin-top: 20px;
      font-size: 20px;
    }    
    .aside_menu4{
      margin-top: 20px;
      font-size: 20px;
    }
    .aside_menu5{
      margin-top: 20px;
      font-size: 20px;
    }
  }
  
  .el-main {
    background-color: #FFFFFF;
    color: #333;
    height: 100%;
  }
  
</style>