<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:30:57
 * @LastEditTime: 2019-08-11 23:34:04
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="signWrap">
  <form v-if="signItem">
    <ul class="signItem">
      <li>
        <span>面试地址:</span>
        <p class="address">{{signItem.address && signItem.address.address}}</p>
      </li>
      <li>
        <span>面试时间:</span>
        <p>{{signItem.start_time}}</p>
      </li>
      <li>
        <span>联系方式:</span>
        <p @click="telCall">{{signItem.phone}}</p>
      </li>
      <li>
        <span>是否提醒:</span>
        <p>{{signItem.remind === -1 ? '未提醒' : signItem.remind === 1 ? '取消提醒':'未提醒' }}</p>
      </li>
      <li>
        <span>面试状态:</span>
        <p>{{signItem.status === -1 ? '未开始' : signItem.status === 0 ? '已打卡' : '已放弃' }}</p>
      </li>
      <li v-if="signItem.status === -1">
        <span>取消提醒:</span>
        <p> 
          <switch @change="remind"/>
        </p>
      </li>
    </ul>
    <div class="btnWrap" v-if="signItem.status === -1">
      <button class="card" @click="clockIn">去打卡</button>
      <button class="giveUp" @click="giveUp()">放弃面试</button>
    </div>
  </form>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"
export default {
  onLoad(options){
    this.getDetail(options.id*1)
  },
  computed: {
    ...mapState({
      signItem: state=>state.addInterview.signItem
      })
  },
  methods: {
    ...mapActions({
      updateSign: 'addInterview/updateSign',
      getDetail: 'addInterview/sign'
    }),
    //去打卡页面
    clockIn(){
      wx.navigateTo({
            url: "/pages/clockIn/main"
      });
    },
    //放弃面试
    giveUp(){
       wx.showModal({
          title: '温馨提示',
          content: '确定放弃？',
          confirmColor: '#197DBF',
      })
      this.updateSign({param:{status: 1 }, id:this.signItem.id*1})
    }, 
    telCall(){
      wx.makePhoneCall({
        phoneNumber: this.signItem.phone //仅为示例，并非真实的电话号码
      })
    },
    //提醒
    remind(e){
     this.updateSign({param: {remind: e.target.value ? 1 : 0}, id: this.signItem.id*1})
    }
  }
};
</script>

<style scoped lang="scss">
.signWrap{
  width: 100%;
  height: 100%;
}
.signItem{
  padding:0 20rpx;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  li{
    width: 100%;
    line-height: 90rpx;
    display: flex;
    border-bottom: 1px solid #ccc;
    span{
      width: 150rpx;
      text-align: left;
      color: #939393;
    }
    p{
      padding-left: 30rpx;
      color: #666;
    }
    .address{
      flex: 1;
      overflow: hidden;
    }
  }
}
.btnWrap{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 50rpx;
  button{
    width: 45%;
    height: 100rpx;
    line-height: 100rpx;
    color: #fff;
    border-radius: 0;
  }
}
.card{
  background: #197dbf;
}
.giveUp{
   background: #dc4e42;
}
</style>