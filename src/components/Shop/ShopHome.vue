<template>
<el-container class="userHomeContainer">
  <el-header>
    <div>
      <span>欢迎你，店主 {{msg}}</span>
    </div>
    <el-button class="logout_button" type="info" @click="logout">退出</el-button>
  </el-header>
  <el-container class="aside_main">
    <el-aside width="300px">
<el-menu
      class="aside_menu"
      background-color="lightskyblue"
      text-color="#fff"
      active-text-color="black">
      <el-menu-item index="1" class="aside_menu1">
        <span>店铺基本信息</span>
      </el-menu-item>
      <el-menu-item index="2" class="aside_menu2">
        <span>店铺菜品</span>
      </el-menu-item>
      <el-menu-item index="3" class="aside_menu3">
        <span>历史订单</span>
      </el-menu-item>
      <el-menu-item index="4" class="aside_menu4">
        <span>收益信息</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>还没写</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data(){
    return{
      msg:'郑海林',
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
    background-color: lightskyblue;
    color: #fff;
    text-align: center;
    float: left;
    height: 100%;
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
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
  }
  
</style>