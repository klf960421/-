import {addSign} from '@/service';
//数据
const state = {
    ads: '',
    adsList: {
       
    }
}
  
  //同步操作
const mutations = {
    //更新地址信息
    address(state, payload){
        state.ads = payload
    }
}

//异步操作
const actions = {
    //添加地址
    async add({commit}, payload){
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
    }
}
  
export default {
    namespaced: true,
    state,
    mutations,
    actions
}