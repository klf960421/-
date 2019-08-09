<template>
  <div class="interviewDetail">
    <ul class="interviewDetailList">
      <li>
        <span>面试地址 :</span>
        <span>北京八维 </span>
      </li>
      <li>
        <span>面试时间 :</span>
        <span>2019-09-19</span>
      </li>
      <li>
        <span>联系方式 :</span>
        <span>18911561235</span>
      </li>
      <li>
        <span>是否提醒 :</span>
        <span>未提醒</span>
      </li>
      <li>
        <span>面试状态 :</span>
        <span>未开始</span>
      </li>
      <li>
        <span>取消提醒 :</span>
        <span></span>
      </li>
    </ul>
    <div class="btn">
      <p>去打卡</p>
      <p>放弃面试</p>
    </div>
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
  methods: {},
  created() {},
  mounted() {}
};

// 先登录获取用户名和密码  获取登录态 才能拿到数据
</script>
<style scoped lang="scss">
.interviewDetail {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-top: 0.5rpx solid #ccc;
  font-size: 32rpx;
  // border-bottom: 0.5rpx solid #ccc;
  .interviewDetailList {
    padding: 0 20rpx;
    border-bottom: 0.5rpx solid #ccc;
    li {
      height: 90rpx;
      line-height: 90rpx;
      display: flex;
      border-bottom: 0.5rpx solid #ccc;
      span{
       color:#333;
      }
      :nth-child(1){
          color:rgba(204, 204, 204, 0.979);
        }
       :nth-child(2){
          text-indent: 40rpx;
        }
    }
    :last-child{
      border-bottom:0;
    }
  }
  .btn {
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    display: flex;
    align-items: center;
    margin-top:40rpx;
    p {
      flex: 1;
      text-align: center;
      // border:0.5rpx solid #ccc;
      color:#fff;
      margin:10rpx 20rpx;
    }
    :nth-child(1){
      background: rgb(10, 161, 221);
    }
     :nth-child(2){
      background: rgba(255, 51, 0, 0.753);
    }
  }
}
// 1px = 2rpx
</style>