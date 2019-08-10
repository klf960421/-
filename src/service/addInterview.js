/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-09 22:11:24
 * @LastEditors: Please set LastEditors
 */
import fly from '@/utils/request';

// 添加面试信息
export let addSign = param =>{
  return fly.post('/sign', param);
}
// 获取面试信息
export let getSignList = params =>{
  return fly.get('/sign', params ? params : '');
}
// 更新面试信息
export let changeSign = (id, data) =>{
  return fly.put('/sign/'+id, data);
}
//获取面试信息详情
export let signDetail = id =>{
  return fly.get('/sign/'+id);
}
