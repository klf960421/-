//数据
const state = {
    longitude: "113.324520",
    latitude: "23.099994"
}

//同步操作
const mutations = {
    updateLocation(state, payload) {
        state.longitude = payload.longitude;
        state.latitude = payload.latitude;
    }
}

//异步操作
const actions = {
    getLocation({ commit }, payload) {
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                commit('updateLocation', res);
            }
        })
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}