import Vue from 'vue'
import App from './App'
import '../static/iconfont/iconfont.css';
<<<<<<< HEAD
import store from './store/index'
=======
import store from "./store/index"

>>>>>>> f9ffc707c2af52e490cd55414a87a413e0ab7b60
Vue.config.productionTip = false
App.mpType = 'app'

//挂载数据
Vue.prototype.$store = store
console.log(store,"11")

const app = new Vue(App)
app.$mount()
