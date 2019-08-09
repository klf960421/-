/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-09 06:58:32
 * @LastEditors: Please set LastEditors
 */
import fly from '@/utils/request';

// 添加面试信息
export let addSign = param =>{
  return fly.post('/sign', param);
}
// 获取面试信息
export let getSignList = params =>{
  console.log(params,"params")
  return fly.get('/sign', params ? params  : '');
}
