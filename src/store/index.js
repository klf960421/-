import Vue from "vue"
import Vuex from "vuex"
import CreateLogger from "vuex/dist/logger"

//引入模块
import home from "./module/home"
import addInterview from "./module/addInterview"
import address from "./module/address"


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        address,
        addInterview
    },
    plugins: [CreateLogger()]
})