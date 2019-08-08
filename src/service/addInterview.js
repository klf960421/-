import fly from '@/utils/request';

// 添加面试信息
export let addSign = param =>{
  return fly.post('/sign', param);
}
// 获取面试信息
export let getSignList = param =>{
  return fly.get('/sign', param ? { param } : '');
}
