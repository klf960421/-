<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:30:57
 * @LastEditTime: 2019-08-11 23:24:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="mapWrap">
    <!-- 地图组件-->
    <div class="mapItem">
      <map
      show-location
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
      :circles="circle"
      ></map>
    </div>
    <!-- 重新定位-->
    <img src="/static/images/logo.png" alt="" class="position" @click="location">
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props:{
    markers: {  //标记
      type: Array,
      default: []
    },
    distance: { //距离
      type: Number,
      default: 0
    }
  },
  computed:{
    ...mapState({
      longitude: state=>state.home.longitude,  //经度
      latitude: state=>state.home.latitude,     //纬度
    }),
    circle(){
      if (!this.markers.length){
        return []
      }else{
        return [{
          ...this.markers[0],
          color:  this.distance > 100 ? '#C9394A': '#c30',
          fillColor: 'rgba(255,255,255,0)',
          radius: 100,
          strokeWidth: 1 
        }]
      }
    }
  },

  mounted(){
    //进入页面获取定位
    this.location()
  },

  methods: {
    ...mapActions({
      location: 'home/getLocation',  //定位
    }),
    //跳转添加面试页面
    addSign() {
      wx.navigateTo({
          url: "/pages/addInterview/main"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.mapWrap {
  flex:1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.mapItem {
  width: 100%;
  flex: 1;
}
map {
  width: 100%;
  height: 100%;
}
.position{
  position: fixed;
  width: 80rpx;
  height: 80rpx;
  bottom: 140rpx;
  left: 10rpx;
}
</style>