/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-11 00:03:52
 * @LastEditors: Please set LastEditors
 */
//引入腾讯
import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';

//实例化
var qqMapSdk = new QQMapWX({
    key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});
const state={
  adsList:[]

}

const mutations={
  search(state, payload){
    state.adsList = [ ...payload.data ];
  },
}

const actions={
  //用于获取输入关键字的补完与提示，帮助用户快速输入
  getSuggestion({commit}, payload){
    qqMapSdk.getSuggestion({
      keyword: payload.address,
      success: res=>{
        commit('search', res);
      }
    })
  }
}

export default {
    namespaced : true,
    state,
    mutations,
    actions
}