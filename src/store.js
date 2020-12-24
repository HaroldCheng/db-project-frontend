import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        userLoginForm:{
            id:0,
            password:'123123'
        },
        riderLoginForm:{
            id:3,
            password:'123123'
        },
        platLoginForm:{
            id:3,
            password:'123123'
        },
        shopLoginForm:{
            id:4,
            password:'123123'
        }
    },
    mutations:{
        loginUser(state,form){
            state.userLoginForm = form
        },
        loginRider(state,form){
            state.riderLoginForm = form
        },
        loginPlat(state,form){
            state.platLoginForm = form
        },
        loginShop(state,form){
            state.shopLoginForm = form
        }
    },
    actions:{

    }
})
