<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-09 07:12:08
 * @LastEditors: Please set LastEditors
 -->
<template>
    <li>
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
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        

    },
    methods:{

    },
    created(){

    },
    mounted(){

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
    width:100%;
    height:60rpx;
    display:flex;
    justify-content: space-between;
    align-items: center;
    h5{
        font-size: 36rpx;
    }
    span{
        background: #eee;
        color:#ccc;
        border:#ddd;
        font-size:24rpx;
        padding:4rpx;
        border:1px solid #ccc;
    }
}
.ads{
    width:100%;
    line-height:54rpx;
    font-size: 24rpx;
    color: #ddd;
}
.timeWrap{
    width:100%;
    height:50rpx;
    display:flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 24rpx;
        color:#333;
    }
    span{
        font-size: 26rpx;
        color:rgb(241, 129, 129);
        background: rgb(252, 231, 231);
        border:1px solid rgb(231, 191, 191);
        padding:4rpx;
    }
}



</style>