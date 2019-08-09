<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:30:57
 * @LastEditTime: 2019-08-09 07:58:25
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="home">
    <!-- 地图组件-->
    <div class="mapWrap">
       <map
      show-location
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
      ></map>
    </div>
    <!-- 重新定位-->
    <img src="/static/images/logo.png" alt="" class="position" @click="location">
    <!-- 用户信息-->
    <img src="/static/images/my.png" alt="" class="user">
    <button class="addBtn" @click="addSign">添加面试</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed:{
    ...mapState({
      longitude: state=>state.home.longitude,  //经度
      latitude: state=>state.home.latitude     //纬度
    })
  },

  mounted(){
    //进入页面获取定位
    this.location()

  },

  methods: {
    ...mapActions({
      location: 'home/getLocation',
      getSuggestion: 'address/getSuggestion'
    }),
    //跳转添加面试页面
    addSign() {
        wx.navigateTo({
            url: "/pages/addInterview/main"
        });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mapWrap {
  width: 100%;
  flex: 1;
}
map {
  width: 100%;
  height: 100%;
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
.position{
  position: fixed;
  width: 80rpx;
  height: 80rpx;
  bottom: 140rpx;
  left: 10rpx;
}
.user{
  position: fixed;
  width: 80rpx;
  height: 80rpx;
  bottom: 140rpx;
  right: 10rpx;
}
.dix{
  position: fixed;
  width: 100%;
  height: 50rpx;
  bottom: 150rpx;
  right: 10rpx;
  background: #ccc;
}



</style>