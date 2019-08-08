import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import '../static/iconfont/iconfont.css';
=======
import store from "./store/index"

>>>>>>> 3af3098e1f2de4f3aafa0af700ec1a62216863af
Vue.config.productionTip = false
App.mpType = 'app'

//挂载数据
Vue.prototype.$store = store
console.log(store,"11")

const app = new Vue(App)
app.$mount()
