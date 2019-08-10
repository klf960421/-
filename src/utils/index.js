/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-10 00:40:48
 * @LastEditors: Please set LastEditors
 */
// 节流
export function debounce(func, delay){
  var timer=null;
  return function(){
    var context=this, args=arguments;
    clearTimeout(timer);
    timer=setTimeout(function(){
      func.apply(context,args);
    }, delay);
  }
}

export default {
  debounce
}

