/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-09 15:20:52
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