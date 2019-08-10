/*
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:45:07
 * @LastEditTime: 2019-08-10 00:38:16
 * @LastEditors: Please set LastEditors
 */
import { addSign, getSignList, changeSign, signDetail } from '@/service';
import moment from 'moment'
//数据
const state = {
    ads: '',
    adsList: {
       
    },
    signList: [],
    signItem: {},//面试详情
    addressId: 0
}
  
  //同步操作
const mutations = {
    //更新地址信息
    address(state, payload){
        state.ads = payload
    },
    //面试列表
    updateSign(state, payload){
        //处理数据格式
        let data = payload.map(item=>{
            item.address = JSON.parse(item.address)
            item.start_time = formatTime(item.start_time);
            return item
        })
        state.signList = data
    },
    //存储当前点击项面试信息
    saveSign(state, payload){
        payload.address = JSON.parse( payload.address)
        state.signItem = payload
    },
    getAddressId(state,payload){
        state.addressId=payload
    }
}

//异步操作
const actions = {
    //添加地址
    async add({ commit }, payload){
        let data=await addSign(payload)
        if(data.code === 0){
            wx.showModal({
                title: '温馨提示',
                content: '添加面试成功',
                showCancel: false,
                confirmColor: '#197DBF',
                success (res) {
                    if (res.confirm) {
                    wx.navigateTo({url: '/pages/interviewList/main'})
                    }
                }
            })
        } 
    },
    //获取面试列表信息
    async getInfo({ commit }, payload){
        let data = await getSignList(payload)
        commit('updateSign', data.data)
    },
    //更新面试
    async updateSign({ commit, dispatch }, payload){
        let {id, param} = payload
        let data = await changeSign(id, param)
        if (data.code === 0){
            //获取面试信息详情
            await dispatch('sign', id)
            await dispatch('getInfo')
        }
    },
    async sign({ commit }, payload){
        let interview = await signDetail(payload)
        if(interview.code === 0 ){
            commit('saveSign', interview.data)
        }
    }
}

// 处理时间
function formatTime(start_time){
    return moment(start_time*1).format('YYYY-MM-DD HH:mm');
}
  
export default {
    namespaced: true,
    state,
    mutations,
    actions
}