import Vue from 'vue'
import App from './App'
import '../static/iconfont/iconfont.css';
import store from './store/index'
Vue.config.productionTip = false
App.mpType = 'app'

//挂载数据
Vue.prototype.$store = store
console.log(store,"11")

const app = new Vue(App)
app.$mount()
