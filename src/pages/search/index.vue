<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-09 07:03:25
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="adsListWrap">
        <div class="adsWrap">
            <span>北京</span>
            <input type="text" v-model="address" @input="search" placeholder="请输入地址">
        </div>
        <ul class="searchList">
            <li v-for="(item,index) in adsList" :key="index" @click="select(index)">
                <image src="/static/images/location.svg" alt="" class="img"></image>
                <div class="cont">
                    <p class="top">{{item.title}}</p>
                    <p class="bottom">{{item.address}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

import {mapState, mapActions, mapMutations} from "vuex"

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            address: ""
        }
    },

    computed:{
        ...mapState({
            adsList: state=>state.address.adsList
        })

    },
    methods:{
        ...mapActions({
            getSuggestion: 'address/getSuggestion',
        }),

        ...mapMutations({
            selectAds: 'addInterview/address',
        }),
        
        search(e){
            if(this.address.length !== 0){
                this.getSuggestion({
                    address: this.address
                })
            }
        },

        select(ind){
            this.selectAds(this.adsList[ind])
            wx.navigateBack({
                delta: 1
            })
            
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>

<style scoped lang="scss">
.adsListWrap{
    width: 100%;
    height: 100%;
}
.adsWrap{
    width: 100%;
    height: 90rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    span{
        display: inline-block;
        width: 120rpx;
        text-align: center;
        border-right: 1px solid #ccc;
    }
    input{
        flex: 1;
        padding-left: 10rpx;
    }
}
.searchList li{
        height:100rpx;
        padding:10rpx 0 10rpx 60rpx;
        box-sizing:border-box;
        border-bottom:2rpx solid #eee;
        display:flex;
        align-items:center;
        flex-direction:row;
}
.searchList li .img{
    width:44rpx;
    height:44rpx;
}
.cont{
    flex:1;
    margin-left:30rpx;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
}
.cont .top{
    font-size:34rpx;
}
.cont .bottom{
    font-size:24rpx;
    color:silver;
}

</style>