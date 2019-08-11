<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:21:26
<<<<<<< HEAD
 * @LastEditTime: 2019-08-11 23:23:43
 * @LastEditors: Please set LastEditors
 -->
<template>
  <!-- 面试列表 -->
  <li @click="goToDetail(item)">
    <div class="company">
      <h5>{{item.company}}</h5>
      <span class="start">{{item.status === -1 ? '未开始' : item.status === 0 ? '已打卡' : '已放弃' }}</span>
    </div>
    <div class="ads">{{item.address.address}}</div>
    <div class="timeWrap">
      <p>面试时间：{{item.start_time}}</p>
      <span class="alert">{{item.remind === 0 ? '已提醒' : '未提醒'}}</span>
    </div>
  </li>
=======
 * @LastEditTime: 2019-08-09 08:36:56
 * @LastEditors: Please set LastEditors
 -->
<template>
    <li>
        <div class="company" @click="goToDetail(item.id)">
            <h5>{{item.company}}</h5>
            <span class="start">未开始</span>
        </div>
        <div class="ads">
            {{item.address.address}}
        </div>
        <div class="timeWrap">
            <p>面试时间：{{item.start_time}}</p>
            <span class="alert">未提醒</span>
        </div>
    </li>
>>>>>>> f805868de69922c732431996c0c9b0965dbae617
</template>

<script>
export default {
<<<<<<< HEAD
  props: ["item"],
  methods: {
    //跳转详情页
    goToDetail(item) {
      wx.navigateTo({ url: "/pages/interviewDetail/main?id=" + item.id });
=======
    props: ["item"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        

    },
    methods:{
        goToDetail(id){
             wx.navigateTo({url: `/pages/interviewDetail/main/${id}`})
        }

>>>>>>> f805868de69922c732431996c0c9b0965dbae617
    }
  }
};
</script>

<style scoped lang="scss">
li {
  width: 100%;
  height: 100%;
  padding: 25rpx 20rpx;
  box-sizing: border-box;
  margin: 10rpx 0;
  background: #fff;
}
.company {
  width: 100%;
  height: 60rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 36rpx;
  }
  span {
    background: #f4f4f4;
    color: #ddd;
    border: #f4f4f4;
    font-size: 24rpx;
    padding: 6rpx;
    box-sizing: border-box;
  }
}
.ads {
  width: 100%;
  line-height: 54rpx;
  font-size: 28rpx;
  color: #ddd;
}
.timeWrap {
  width: 100%;
  height: 50rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 28rpx;
    color: #666666;
  }
  span {
    font-size: 28rpx;
    color: #f89a9a;
    background: #fef0f0;
    border: 1px solid #fef0f0;
    padding: 6rpx;
    box-sizing: border-box;
  }
}
</style>