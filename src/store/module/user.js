/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-09 15:10:34
 * @LastEditors: Please set LastEditors
 */
import { decrypt } from '@/service';
//数据

const state = {
  openId: '',
  tel: ''
}

//同步操作
const mutations = {
    //存储openID
    updateOpenId(state, payload){
        state.openId = payload    
    },
    //更新电话
    updateTel(state, payload){
        state.tel = payload
    }
}

//异步操作
const actions = {
    //解密用户手机号
    async getPhoneNumber({commit}, payload){
        let data = await decrypt(payload)
        if (data.code === 0){
        //更新电话
        let update = await updateTel({phone : data.data.phoneNumber*1})
            if(data.code===0){
                commit('updateTel', data.data.phoneNumber)
                wx.showModal({
                    title: '授权成功',
                    content: '授权成功',
                    showCancel: false,
                    confirmColor: '#197DBF',
                })
            }
        } 
    }
}

export default {
    namespaced : true,
    state,
    mutations,
    actions
}