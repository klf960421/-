/*
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-10 10:42:31
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()
export default {
    config: {
        "navigationBarBackgroundColor": "#ffffff",
        "backgroundTextStyle": "light", 
        "enablePullDownRefresh": true,
    }
};