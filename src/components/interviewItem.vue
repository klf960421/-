<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-09 22:11:23
 * @LastEditors: Please set LastEditors
 -->
<template>
    <li @click="goToDetail(item)">
        <div class="company">
            <h5>{{item.company}}</h5>
            <span class="start">未开始</span>
        </div>
        <div class="ads">
            {{item.address.address}}
        </div>
        <div class="timeWrap">
            <p>面试时间：{{item.start_time}}</p>
            <span class="alert">未提醒</span>
        </div>
    </li>
</template>

<script>
export default {
    props: ["item"],
    methods:{
        goToDetail(item){
            wx.navigateTo({url: '/pages/interviewDetail/main?id='+item.id})
        }
    }
}
</script>
<style scoped lang="scss">
li{
    width:100%;
    height:100%;
    padding:25rpx 20rpx;
    box-sizing: border-box;
    margin:10rpx 0;
    background: #fff;
}
.company{
    width: 100%;
    height: 60rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h5{
        font-size: 36rpx;
    }
    span{
        background: #f4f4f4;
        color:#ddd;
        border:#f4f4f4;
        font-size: 24rpx;
        padding: 6rpx;
        box-sizing: border-box;
    }
}
.ads{
    width: 100%;
    line-height: 54rpx;
    font-size: 28rpx;
    color: #ddd;
}
.timeWrap{
    width: 100%;
    height: 50rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 28rpx;
        color:#666666;
    }
    span{
        font-size: 28rpx;
        color:#f89a9a;
        background: #fef0f0;
        border: 1px solid #fef0f0;
        padding: 6rpx;
        box-sizing: border-box;
    }
}



</style>