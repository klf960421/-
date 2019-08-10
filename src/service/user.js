/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-10 07:55:20
 * @LastEditors: Please set LastEditors
 */
import fly from '@/utils/request';

// 登陆接口
export let login = code=>{
  return fly.post('/user/code2session', {code});
}
// 解密
export let decrypt = params=>{
  console.log(params)
  return fly.post('/user/decrypt', params);
}

// 更新手机号
export let updateTel = params=>{
  console.log(params)
  return fly.post('/user/updatePhone', params);
}
//生物认证
export let finger = params=>{
  return fly.post('/user/fingerPrint', params);
}
