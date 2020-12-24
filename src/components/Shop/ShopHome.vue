<template>
<el-container class="userHomeContainer">
  <el-header>
      <span>多平台外卖系统</span>
    <el-button plain @click="logout">退出</el-button>
  </el-header>
  <el-container>
      <el-aside>
          <el-menu
              background-color="lightskyblue"
                   text-color="#fff"
                   active-text-color="black"
                   :router="true"
                   :default-active="activePath">
              <el-menu-item index="shopInfo" class="aside_menu1" @click="saveNavState('shopInfo')">
                  <i class="el-icon-s-shop"></i>
                  <span>店铺基本信息</span>
              </el-menu-item>
              <el-menu-item index="shopDish" class="aside_menu2" @click="saveNavState('shopDish')">
                <i class="el-icon-dish"></i>
                <span>店铺菜品</span>
              </el-menu-item>
            <el-menu-item index="shopOrder" class="aside_menu2" @click="saveNavState('shopDish')">
              <i class="el-icon-s-order"></i>
              <span>当前订单</span>
            </el-menu-item>
              <el-menu-item index="shopHistory" class="aside_menu3" @click="saveNavState('shopOrder')">
                  <i class="el-icon-time"></i>
                <span>订单记录</span>
              </el-menu-item>
              <el-menu-item index="shopIncome" class="aside_menu4" @click="saveNavState('shopIncome')">
                <i class="el-icon-s-finance"></i>
                <span>收益情况</span>
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
        <router-view :shopId="shopLoginForm.id"></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import ShopOrder from "@/components/Shop/ShopOrder"
import ShopDish from "@/components/Shop/ShopDish"
import ShopInfo from "@/components/Shop/ShopInfo"
import ShopIncome from "@/components/Shop/ShopIncome"
export default {
  components:{
    ShopOrder,
    ShopInfo,
    ShopIncome,
    ShopDish
  },
  data(){
    return{
      shopLoginForm:{
        id:12,
        password:''
      }
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
        padding-left: 40px;
        padding-right: 40px;
        justify-content: space-between;
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
  }

    .el-main {
        background-color: #FFFFFF;
        color: #333;
        height: 100%;
    }
  
</style>