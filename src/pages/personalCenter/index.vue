<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:30:57
 * @LastEditTime: 2019-08-12 00:41:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="personalCenter">
    <div class="header">
      <div class="avator">
          <img :src="userInfo.avatarUrl" alt="">
      </div>
      <h4 class="title">{{tel}}</h4>
    </div>
    <ul class="bottom">
      <li @click="myviews">
        <i class="iconfont icon-APPguanli"></i>
        <span>我的面试</span>
        <i class="iconfont icon-jiantou-copy-copy"></i>
      </li>
      <li>
        <i class="iconfont icon-icobanbengengxin"></i>
        <button open-type="contact" @contact="handleContact">客服中心</button>
        <i class="iconfont icon-jiantou-copy-copy"></i>
      </li>
    </ul>
    <button v-if="showFlag"  open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="telBtn">获取用户电话</button>
    <button open-type="openSetting" @opensetting="callback" v-if="setting" class="telBtn">打开设置页</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import {decrypt} from "../../service/user"

export default {
  data() {
    return {
      setting: false
    };
  },
  computed: {
    ...mapState({
      tel: state=>state.home.tel,
      showFlag: state=>state.home.showFlag,
      userInfo: state=>state.user.userInfo,
      openid: state=>state.home.openid
    })
    
  },
  methods: {
    ...mapActions({
      getNumber: 'home/getPhoneNumber',
      fingerPrint: 'home/fingerPrint' //指纹
    }),
    //进入面试列表
    myviews() {
      wx.navigateTo({
        url: "/pages/interviewList/main"
      });
    },
    //获取电话
    getPhoneNumber(e){
      let {encryptedData, iv} = e.target
      if (encryptedData) {
        this.getNumber({encryptedData, iv})
      } else {
        this.setting = true;
        wx.openSetting({
        })
      }
    },
    openSetting(){
        this.setting = false;
    },
    //客服中心
    handleContact(e){
      console.log(e.path)
      console.log(e.query)
    }
  },
  created(){
    var that = this;
    wx.startSoterAuthentication({
      requestAuthModes: ['fingerPrint'],
      challenge: '123456',
      authContent: '请用指纹解锁',
      success(res) {
        console.log(res)
        that.fingerPrint({
          openid: that.openid,
          json_string: res.resultJSON,
          json_signature: res.resultJSONSignature,
        })
      }
    })
  }
};
</script>
<style scoped lang="scss">
@import "../../../static/iconfont/iconfont.css";
.header{
  background:#f4f6f9;
  width:100%;
  height:350rpx;
  box-sizing:border-box;
  padding:50rpx 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
}
.avator{
  width:100rpx;
  height:100rpx;
  background:#fff;
  text-align:center;
  padding:20rpx;
  border-radius:50%;
}
.avator img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.title{
  margin-top: 30rpx;
}
.personalCenter {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 300rpx;
  div {
    line-height: 200rpx;  
    i {
      font-size: 100rpx;
      color: cyan;
      text-align: center;
    }
    p {
      color: #000;
      height: 100rpx;
      line-height: 100rpx;
      text-align: center;
    }
  }
}
.bottom {
  width: 100%;
  height: 240rpx;
  li {
    display: flex;
    align-items: center;
    height: 120rpx;
    line-height: 120rpx;
    padding: 0 26rpx;
    border-bottom: .5rpx solid #ccc;
    span,button {
      flex: 1;
      margin-left: 30rpx;
    }
    button{
      &:after{
        border: none;
      }
      background: #fff;
      border-radius: 0;
      text-align: left;
      font-size: 32rpx;
      padding: 0;
    }
  }
  .telBtn{
    position: fixed;
    top:10rpx;
    width:100%;
    background: #fff;
  }
}
.telBtn{
  position: fixed;
  top:0;
  width:100%;
  height:100%;
  opacity: 0;
}
</style>