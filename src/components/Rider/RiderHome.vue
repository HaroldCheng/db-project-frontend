<template>
<el-container class="userHomeContainer">
  <el-header>
    <div>
      <span>欢迎你，骑手打工人 {{msg}}</span>
    </div>
    <el-button class="logout_button" type="info" @click="logout">退出</el-button>
  </el-header>
  <el-container class="aside_main">
    <el-aside width="300px">
<el-menu unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath" background-color="#333744" text-color="#fff" active-text-color="#409FFF">
           <!-- :unique-opened="true"->只允许展开一个菜单 -->
           <!-- :collapse-transition="false" -> 关闭动画 -->
           <!-- router -> 导航开启路由模式 -->
          <!-- 一级菜单  -->
          <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id" >
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{ item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/' + subItem.path)">
              <!-- 导航开启路由模式：
                将index值作为导航路由 -->
              <!-- 二级菜单的模板区域 -->
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
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