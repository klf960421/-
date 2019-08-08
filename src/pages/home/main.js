import Vue from 'vue'
import App from './index.vue'
<<<<<<< HEAD
=======

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}
>>>>>>> 3af3098e1f2de4f3aafa0af700ec1a62216863af

const app = new Vue(App)
app.$mount()