/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-09 12:46:44
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue"
import Vuex from "vuex"
import CreateLogger from "vuex/dist/logger"

//引入模块
import home from "./module/home"
import addInterview from "./module/addInterview"
import address from "./module/address"
import user from "./module/user"


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        address,
        addInterview,
        user
    },
    plugins: [CreateLogger()]
})