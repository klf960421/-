import fly from '@/utils/request';

// 添加面试信息
export let addSign = code=>{
  return fly.post('/sign', code);
}
