<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-10 08:01:54
 * @LastEditors: Please set LastEditors
 -->
<script>
import {login} from '@/service/';
import { mapMutations } from "vuex"

export default {
   methods:{
    ...mapMutations({
      update:'home/updateOpenId'

    })

  },
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */


    // 调用登陆接口
    wx.login({
      success: async (res)=>{
        if (res.code) {
          //发起网络请求
          let data = await login(res.code);
          if(data.code === 0){
            this.update(data.data.openid)
          }
          console.log('res..........', data);
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
page {
  width: 100%;
  height: 100%;
}
</style>
