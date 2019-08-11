/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-11 23:46:37
 * @LastEditors: Please set LastEditors
 */
import { decrypt, updateTel, finger } from "@/service";

const state = {
  longitude: "118.04",
  latitude: "24.26",
  openId: "",
  tel: "***********",
  showFlag: true
};

//同步操作
const mutations = {
  //更新定位信息
  updateLocation(state, payload) {
    state.longitude = payload.longitude;
    state.latitude = payload.latitude;
  },
  //存储openID
  updateOpenId(state, payload) {
    state.openId = payload;
  },
  //更新电话
  updateTel(state, payload) {
    state.tel = payload;
    state.showFlag = false;
  }
};

//异步操作
const actions = {
  //获取定位
  getLocation({ commit }, payload) {
    wx.getLocation({
      type: "wgs84",
      success(res) {
        commit("updateLocation", res);
      }
    });
  },
  //解密用户手机号
  async getPhoneNumber({ commit }, payload) {
    let data = await decrypt(payload);
    if (data.code === 0) {
      //更新电话
      let update = await updateTel({ phone: data.data.phoneNumber * 1 });
      if (update.code === 0) {
        //处理电话号码
        let phone = data.data.phoneNumber.replace(
          /(\d{3})(\d{4})(\d{4})/,
          "$1****$3"
        );
        commit("updateTel", phone);
        wx.showModal({
          title: "授权成功",
          content: "授权成功",
          showCancel: false,
          confirmColor: "#197DBF"
        });
      }
    }
  },
  //指纹生物认证
  async fingerPrint({ commit }, payload) {
    let data = await finger(payload);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
