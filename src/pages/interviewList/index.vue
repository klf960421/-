<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-11 23:42:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="listWrap">
      <!-- 导航-->
      <nav class="nav">
        <span
          v-for="(item, index) in navList"
          :key="index"
          @click="changeData(index, item)"
          :class='index===ind?"active" : "" '
        >{{item.name}}</span>
      </nav>
      <!-- 内容-->
      <div class="content" >
        <ul class="list" v-if="signList.length">
          <interviewItem v-for="(item,index) in signList" :key="index" :item="item"></interviewItem>
        </ul>
        <div class="info" v-if="!signList.length">当前分类还没有面试！！！</div>
      </div>
    <p class="pull" v-if="signList.length && signList.length>10">{{hasMore?'上拉加载更多....':'我是有底线的'}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import interviewItem from "../../components/interviewItem";

export default {
  components: {
    interviewItem
  },
  data() {
    return {
      navList: [
        { id: 0, name: "未开始" },
        { id: 1, name: "已打卡" },
        { id: 2, name: "已放弃" },
        { id: 3, name: "全部" }
      ], //导航
      ind: 0, //导航样式
      id: -1
    };
  },
  computed: {
    ...mapState({
      signList: state => state.addInterview.signList, //面试信息
      page: state => state.addInterview.page, //面试信息
      hasMore: state => state.addInterview.hasMore //面试信息
    })
  },
  methods: {
    ...mapActions({
      getInfo: "addInterview/getInfo"
    }),
    ...mapMutations({
      updateInfo: "addInterview/updateInfo",
      clearPage: "addInterview/clearPage"
    }),
    //切换导航
    changeData(ind, item) {
      this.ind = ind;
      this.id = item.id - 1;
      this.clearPage();
      if (item.id === 3) {
        this.getInfo({ page: this.page });
      } else {
        this.getInfo({ status: this.id, page: this.page });
      }
    }
  },
  mounted() {
    //初始化获取面试列表信息
    this.getInfo({ status: -1, page: this.page });
  },
  // onPullDownRefresh () {
  //     console.log(this.id,'this.id')
  //     this.getInfo({status: this.id})
  // },
  // 上拉加载
  onReachBottom: function() {
     if (this.id === 2) {
        this.getInfo({ page: this.page +1 });
      } else {
        this.getInfo({ status: this.id, page: this.page +1 });
      }
  }
};
</script>
<style scoped lang="scss">
.listWrap {
  width: 100%;
  height: 100%;
}
.listWrap > div {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 88rpx;
  line-height: 88rpx;
  border-top: 3rpx solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1rpx solid #eee;
  .active {
    border-bottom: 1px solid #197dbf;
    color: #197dbf;
  }
}
.content {
  flex: 1;
  padding-top: 88rpx;
  background: #eee;
}
.pull {
  width: 100%;
  height: 90rpx;
  background:#eee;
  line-height: 90rpx;
  text-align: center;
  color: #ddd;
}
.info {
  background: #fff;
  padding-top: 30rpx;
  text-align: center;
  width: 100%;
  color: #ddd;
  box-sizing: border-box;
}
</style>