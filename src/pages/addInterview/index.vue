<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:30:57
 * @LastEditTime: 2019-08-09 08:00:05
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div>
       添加面试
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex"
const moment = require("moment")
//面试时间初始化
const range = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ['00分','10分','20分','30分','40分','50分']
]

export default {
  data() {
    return {
      info: {
        date: [0,0,0],
      }
    };
  },

  created(){
     // 如果当前时间是十一点之后，过滤掉今天
    if (moment().hour() === 23){
      this.info.date = [1,0,0];
    }
  },

  computed:{
    ...mapState({
      adsList: state=>state.addInterview.adsList, //表单信息
      ads: state=>state.addInterview.ads, //搜素页面选择的地址
      info: state=>state.addInterview.info, //添加面试信息提示
    }),
    // 处理面试日期
    dateRange(){
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]){
        dateRange[1] = dateRange[1].filter(item=>{
          return item>moment().hour();
        })
      }else{
        dateRange[1] = range[1]
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item=>{
        return item+'点'
      })
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item=>{
        return moment().add(item, 'days').date()+'号'
      })
      return dateRange;
    },
    // 显示的日期
    dateShow(){
      return moment()
      .add(moment().hour()==23?this.info.date[0]-1:this.info.date[0], 'd')
      .add(this.info.date[1]+1, 'h')
      .minute(this.info.date[2]*10)
      .format('YYYY-MM-DD HH:mm');
    }
  },

  methods: {
    ...mapActions({
        add: 'addInterview/add' //添加地址
    }),

   // 监听多列选择器每列变化
    columnChange(e){
      let {column, value} = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },

    showTimeTip(){
      wx.showToast({
        title: '在面试前一个小时我们会通知你哦', //提示的内容,
        icon: 'none', //图标,
      });
    },

    //表单验证
    formSubmit(e) {
      //表单验证
      let flag = this.validator();
      // 添加时间戳到表单
      this.adsList.start_time = moment(this.dateShow).unix()*1000;
      // 添加form_id
      this.adsList.form_id = e.target.formId;
      //所有验证通过后
      if(flag){
        //添加面试信息
        let data = this.add({company:this.name,
          phone: this.tel,
          form_id: e.mp.detail.formId,
          address: JSON.stringify(this.ads),
          latitude: this.ads.location.lat,
          longitude: this.ads.location.lng,
          start_time: moment(this.dateShow).unix()*1000,
          description: this.remark
        })
      }
      
    },

    //表单验证
    validator(){
      //判断公司名称是否为空
      if(this.name === ''){
        wx.showToast({
          title: '请输入公司名称',
          icon: 'none',
          duration: 2000
        })
        return false;
      }
      //判断电话是否为空
      if(this.tel === ''){
        wx.showToast({
          title: '请输入公司电话',
          icon: 'none',
          duration: 2000
        })
        return false;
      }
      //验证电话号码
      let reg=/^1[35789][0-9]{9}$/;
      if(!reg.test(this.tel)){
        wx.showToast({
          title:'电话格式不正确哦,请输入正确的格式',
          icon:'none',
          duration: 2000
        })
        return false;
      }
      //验证地址
      if(this.ads.address === ''){
        wx.showToast({
          title: '请选择地址信息',
          icon: 'none',
          duration: 2000
        })
        return false;
      }
      return true;
  },
  //点击地址信息跳转搜索地址页面
  updateAds(){
      wx.navigateTo({
        url: '/pages/search/main',
      })
    }
  },
};
</script>

<style scoped>
.info {
  font-size: 34rpx;
  padding: 15rpx 0 15rpx 30rpx;
  background: #f6f6f6;
}
.content {
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.content li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 720rpx;
  height: 88rpx;
  margin-left: 30rpx;
  border-bottom: 1rpx solid #eee;
}
.content li:last-child {
  border-bottom: 0;
}
.content li span {
  color: #666;
  width: 170rpx;
  font-size: 30rpx;
}
.content li input,
.content li picker {
  flex: 1;
  font-size: 30rpx;
  color: #333;
  height: 88rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 30rpx;
  line-height: 88rpx;
}
.content li .tip {
  margin-right: 20rpx;
}
.textarea {
  font-size: 30rpx;
  color: #333;
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  box-sizing: border-box;
  padding: 10rpx;
  border: 1rpx solid silver;
  border-radius: 5rpx;
}
button {
  width: 100%;
  height: 100rpx;
  background: #999;
  color: #fff;
  font-weight: 500;
  font-size: 40rpx;
  border-radius: 0;
  margin-top: 50rpx;
}
</style>