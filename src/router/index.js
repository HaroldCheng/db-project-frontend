import Vue from 'vue'
import VueRouter from 'vue-router'
const LoginChar = () => import('../components/LoginChar.vue')
const UserHome = () => import('../components/User/UserHome.vue')
const RiderHome = () => import('../components/Rider/RiderHome.vue')
const PlatHome = () => import('../components/Plat/PlatHome.vue')
const ShopHome = () => import('../components/Shop/ShopHome.vue')
const UserWel = () => import('../components/User/UserWel.vue')
const UserInfo = () => import('../components/User/UserInfo.vue')
const History = () => import('../components/User/History.vue')
const Order = () => import('../components/User/Order.vue')
const Money = () => import('../components/User/Money.vue')
const Dish = () => import('../components/User/Dish.vue')
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login'},
  {path:'/login',component:LoginChar},
  {path:'/userHome',
  component:UserHome,
  redirect:'/userWel',
  children:[
      {path:'/userWel',component:UserWel},
      {path:'/userInfo',component:UserInfo},
      {path:'/order',component:Order},
      {path:'/history',component:History},
      {path:'/money',component:Money},
      {path:'/dish',component:Dish}
  ]
  },
  {path:'/riderHome',component:RiderHome},
  {path:'/platHome',component:PlatHome},
  {path:'/shopHome',component:ShopHome}
]

const router = new VueRouter({
  routes
})

export default router
