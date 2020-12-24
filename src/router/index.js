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
const PlatChoose = () => import('../components/User/PlatChoose.vue')
const OrderMT = () => import('../components/User/OrderMT.vue')

const RiderWel = () => import('../components/Rider/RiderWel.vue')
const RiderInfo = () => import('../components/Rider/RiderInfo.vue')
const RiderOrder = () => import('../components/Rider/RiderOrder.vue')
const RiderHistory = () => import('../components/Rider/RiderHistory.vue')
const RiderOrdering = () => import('../components/Rider/RiderOrdering.vue')

const ShopWel = () => import('../components/Shop/ShopWel.vue')
const ShopInfo = () => import('../components/Shop/ShopInfo.vue')
const ShopOrder = () => import('../components/Shop/ShopOrder.vue')
const ShopIncome = () => import('../components/Shop/ShopIncome.vue')
const ShopDish = () => import('../components/Shop/ShopDish.vue')
const ShopHistory = () => import('../components/Shop/ShopHistory')

const PlatWel = () => import('../components/Plat/PlatWel.vue')
const PlatInfo = () => import('../components/Plat/PlatInfo.vue')
const PlatUser = () => import('../components/Plat/PlatUser.vue')
const PlatIncome = () => import('../components/Plat/PlatIncome.vue')
const PlatShop = () => import('../components/Plat/PlatShop.vue')
const PlatRider = () => import('../components/Plat/PlatRider.vue')

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
      {path:'/platChoose',component:PlatChoose},
      {path:'/history',component:History},
      {path:'/money',component:Money},
      {path:'/dish',component:Dish},
      {path:'/order',component:Order},
      {path:'/orderMt',component:OrderMT}
  ]
  },
    {
        path: '/riderHome',
        component: RiderHome,
        redirect: '/riderWel',
        children: [
            { path: '/riderWel', component: RiderWel },
            { path: '/riderInfo', component: RiderInfo },
            { path: '/riderOrder', component: RiderOrder },
            { path: '/riderOrdering', component: RiderOrdering },
            { path: '/riderHistory', component: RiderHistory }
        ]
    },

    {
        path: '/platHome',
        component: PlatHome,
        redirect: '/platWel',
        children: [
            { path: '/platWel', component: PlatWel },
            { path: '/platInfo', component: PlatInfo },
            { path: '/platUser', component: PlatUser },
            { path: '/platShop', component: PlatShop },
            { path: '/platIncome', component: PlatIncome },
            { path: '/platRider', component: PlatRider }
        ]
    },

    {
        path: '/shopHome',
        component: ShopHome,
        redirect: '/shopWel',
        children: [
            { path: '/shopWel', component: ShopWel },
            { path: '/shopInfo', component: ShopInfo },
            { path: '/shopOrder', component: ShopOrder },
            { path: '/shopDish', component: ShopDish },
            { path: '/shopIncome', component: ShopIncome },
            {path:'/shopHistory',component:ShopHistory}]
    }
]

const router = new VueRouter({
  routes
})

export default router
