import { addSign, getSignList } from '@/service';
//数据
const state = {
    ads: '',
    adsList: {
       
    },
    signList: []
}
  
  //同步操作
const mutations = {
    //更新地址信息
    address(state, payload){
        state.ads = payload
    },
    //面试列表
    updateSign(state, payload){
        //处理面试数据
        console.log(payload,"11111")
        state.signList = payload
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
                    wx.navigateTo({url: '/pages/interviewDetail/main'})
                    }
                }
            })
        } 
    },
    //获取面试地址信息
    async getInfo({ commit }, payload){
        let data=await getSignList(payload)
        console.log(data)
        commit('updateSign', data.data)
    }
}
  
export default {
    namespaced: true,
    state,
    mutations,
    actions
}