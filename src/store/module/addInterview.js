/*
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:45:07
 * @LastEditTime: 2019-08-11 23:46:03
 * @LastEditors: Please set LastEditors
 */
import { addSign, getSignList, changeSign, signDetail } from "@/service";
import moment from "moment";
//数据
const state = {
  ads: { address: "" },
  adsList: {}, //添加面试页面
  signList: [], //面试列表数据
  signItem: {}, //面试详情
  addressId: 0,
  page: 1, //页数
  pageSize: 10, //每页条数
  hasMore: false //是否有更多数据
};

//同步操作
const mutations = {
  //更新地址信息
  address(state, payload) {
    state.ads = payload;
  },
  //面试列表
  updateSign(state, payload) {
    //判断是否还有更多数据
    if (payload.length === state.page * state.pageSize) {
      state.hasMore = true;
    } else {
      state.hasMore = false;
    }
    state.signList = payload;
  },
  //存储当前点击项面试信息
  saveSign(state, payload) {
    payload.address = JSON.parse(payload.address);
    payload.start_time = formatTime(start_time)
    state.signItem = payload;
  },
  getAddressId(state, payload) {
    state.addressId = payload;
  },
  clearPage(state, payload) {
    state.page = 1;
    state.signList = [];
  }
};

//异步操作
const actions = {
  //添加地址
  async add({ commit }, payload) {
    let data = await addSign(payload);
    if (data.code === 0) {
      wx.showModal({
        title: "温馨提示",
        content: "添加面试成功",
        showCancel: false,
        confirmColor: "#197DBF",
        success(res) {
          if (res.confirm) {
            wx.navigateTo({ url: "/pages/interviewList/main" });
          }
        }
      });
    }
  },
  //获取面试列表信息
  async getInfo({ commit }, payload) {
    console.log(payload.page, "payloadpagepayloadpage");
    state.page = payload.page;
    payload.pageSize = state.pageSize;
    let data = await getSignList(payload);
    console.log(data, "datatattatat");
    //处理数据格式
    let signData = data.data.map(item => {
      item.address = JSON.parse(item.address);
      item.start_time = formatTime(item.start_time);
      return item;
    });
    //判断是追加还是替换
    if (payload.page === 1) {
      commit("updateSign", signData);
    } else {
      commit("updateSign", [...state.signList, ...signData]);
    }
  },
  //更新面试
  async updateSign({ commit, dispatch }, payload) {
    let { id, param } = payload;
    let data = await changeSign(id, param);
    if (data.code === 0) {
      //更新面试信息详情  以及面试列表
      await dispatch("sign", id);
      await dispatch("getInfo");
    }
  },
  //获取面试详情
  async sign({ commit }, payload) {
    let interview = await signDetail(payload);
    if (interview.code === 0) {
      commit("saveSign", interview.data);
    }
  }
};

// 处理时间
function formatTime(start_time) {
  return moment(start_time * 1).format("YYYY-MM-DD HH:mm");
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
