<template>
  <div class="personalCenter">
    <div class="top">
      <div>
        <i class="iconfont icon-gerenzhongxin"></i>
        <p>手机号</p>
      </div>
    </div>
    <ul class="bottom">
      <li @click="myviews">
        <i class="iconfont icon-APPguanli"></i>
        <span>我的面试</span>
        <i class="iconfont icon-jiantou-copy-copy"></i>
      </li>
      <li @click="callCenter">
        <i class="iconfont icon-icobanbengengxin"></i>
        <span>客服中心</span>
        <i class="iconfont icon-jiantou-copy-copy"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    myviews() {
      // console.log(9);
      wx.navigateTo({
        url: "/pages/interviewList/main"
      });
    },
    callCenter(){
       wx.navigateTo({
        url: "/pages/callCenter/main"
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../../static/iconfont/iconfont.css";
.personalCenter {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 300rpx;
    // line-height: 300rpx;
    div {
      line-height: 200rpx;
      // height: 300rpx;
      // background: pink;   
       i {
        font-size: 100rpx;
        color: cyan;
        text-align: center;
      }
      p {
        color: #000;
        height: 100rpx;
        line-height: 100rpx;
        // background: blue;
        text-align: center;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 240rpx;
    // background: pink;
    li {
      display: flex;
      align-items: center;
      height: 120rpx;
      line-height: 120rpx;
      padding: 0 26rpx;
      border-bottom: 2rpx solid #ccc;
      span {
        flex: 1;
        margin-left: 30rpx;
      }
    }
  }
}
</style>