<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:30:57
 * @LastEditTime: 2019-08-12 00:41:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="home">
    <!-- 地图组件-->
    <mapQQ></mapQQ>
    <!-- 用户信息-->
    <img class="user"  @click="goLogin"  src="/static/images/my.png" />
    <button class="addBtn" @click="addSign">添加面试</button>
    <button open-type="getUserInfo" @getuserinfo="getUserInfo" v-if="userInfoFlag" class="userBtn">获取用户信息</button>
  </div>
</template>

<script>
import mapQQ from "../../components/map"
import {mapMutations} from "vuex"

export default {
  data() {
    return {
      userInfoFlag: false  //用来控制获取用户信息按钮
    };
  },
  
  components: {
    mapQQ
  },

  methods: {
    ...mapMutations({
      saveUserInfo: 'user/saveUserInfo'
    }),
    //跳转添加面试页面
    addSign() {
      wx.navigateTo({
        url: "/pages/addInterview/main"
      });
    },
    //跳转添加个人中心页面
    goLogin(){
      wx.navigateTo({
        url: "/pages/personalCenter/main"
      });
    },
    //获取用户信息
    getUserInfo(e){
      let that = this;
      console.log('info...e...',e);
      if(e.target.errMsg != "getUserInfo:fail auth deny"){
        this.saveUserInfo(e.mp.detail.rawData)
        that.userInfoFlag = false;
         wx.showToast({
          title: '获取信息成功', 
        });
      }else{
        wx.showModal({
          title: '亲爱的用户', //提示的标题,
          content: '同意我们的授权，让我们为您提供更加优质的服务', //提示的内容,
          showCancel: false, //是否显示取消按钮,
          confirmText: '去设置', //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: '#3CC51F',   //确定按钮的文字颜色
          success: res => {
            wx.openSetting({
              success: () => {
                that.getSetting();
              }
            });            
          }
        })
      }
    },
    //获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
    //判断是否有用户信息 userLocation
    getSetting(){
      let that = this;
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            console.log('getSetting',res);
            that.userInfoFlag = false;
          } else {
            that.userInfoFlag = true;
          }
        },  
      })
    }
  },

  created(){
    this.getSetting()
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.addBtn {
  width: 100%;
  height: 100rpx;
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 100rpx;
  font-size: 38rpx;
  border-radius: 0;
}
.user{
  position: fixed;
  width: 80rpx;
  height: 80rpx;
  bottom: 140rpx;
  right: 10rpx;
}
.userBtn{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: 999;
  opacity: 0;
}
</style>