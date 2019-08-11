<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:30:57
 * @LastEditTime: 2019-08-11 23:32:07
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="home">
    <!-- 地图组件-->
    <mapQQ :markers="markers" :distance="distance"></mapQQ>
    <button class="addBtn" @click="clockIn">打卡</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import mapQQ from "../../components/map";
import getDistance from "@/utils/distance.js";

export default {
  data() {
    return {
      distance: 0  
    };
  },

  components: {
    mapQQ
  },

  computed: {
    ...mapState({
      longitude: state => state.home.longitude, //经度
      latitude: state => state.home.latitude, //纬度
      info: state => state.addInterview.signItem //打卡面试地点的信息
    }),
    markers() {
      if (this.info && Object.keys(this.info)) {
        return [
          {
            iconPath: "/static/images/job.png",
            latitude: this.info.latitude,
            longitude: this.info.longitude,
            title: this.info.company,
            width: 20,
            height: 20
          }
        ];
      } else {
        return [];
      }
    }
  },

  methods: {
    ...mapActions({
      updateSign: 'addInterview/updateSign',
    }),
    //跳转添加面试页面
    clockIn() {
    //打卡时计算面试地点距离和当前位置所在距离
      this.distance = getDistance(
        this.latitude,
        this.longitude,
        this.markers[0].latitude,
        this.markers[0].longitude
      );
      let distance = this.distance;
      //当距离<100时才能打卡成功
      if (this.distance < 1000) {
        //打卡成功，更新状态
        let that = this;
        wx.showToast({
          title: "打卡成功", //提示的内容,
          icon: "none" ,//图标,
          success:()=>{
            this.updateSign({param: {status: 0}, id: that.info.id*1})
          }
        });
      } else {
        //计算距离
        if (this.distance > 1000) {
            distance = (this.distance/1000).toFixed(2) + '公里'
        } else{
            distance = this.distance + '米'
        }
        wx.showToast({
          title: `你距目的地还有${distance},暂时还不能打卡`, //提示的内容,
          icon: "none" //图标,
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
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
</style>