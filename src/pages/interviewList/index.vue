<!--
 * @Description: In User Settings Edit
 * @Author: klf
 * @Date: 2019-08-08 21:21:26
 * @LastEditTime: 2019-08-09 00:51:27
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="listWrap">
        <!-- 导航-->
        <nav class="nav">
            <span v-for='(item, index) in navList' 
                :key="index" 
                @click="changeData(index, item)"
                :class='index===ind?"active" : " "'
                >{{item.name}}</span>
        </nav>
        <!-- 内容-->
        <div class="content">
            <ul class="list">
                <interviewItem v-for="(item,index) in signList" :key="index" :item="item"></interviewItem>
            </ul>
        </div>
    </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from "vuex"
import interviewItem from '../../components/interviewItem'

export default {
    components:{
        interviewItem

    },
    data(){
        return {
            navList:[{ id:0, name:'未开始' }, { id:1, name:'已打卡' }, { id:2, name:'已放弃' }, { id:3, name:'全部' }], //导航
            ind: 0 //导航样式
        }
    },
    computed:{
        ...mapState({
            signList: state=>state.addInterview.signList //面试信息
        })

    },
    methods:{
        ...mapActions({
           getInfo: 'addInterview/getInfo'
           
        }),
        ...mapMutations({
           updateInfo: 'addInterview/updateInfo'
        }),
        //切换导航
        changeData(ind, item){
            this.ind = ind;
            if (item.id === 3){
                this.getInfo()
            }else{
                this.getInfo({status: item.id-1}) 
            }
        }
    },
    created(){
        //初始化获取面试列表信息
        this.getInfo()
    }
}
</script>
<style scoped lang="scss">
    .listWrap{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column; 
        overflow: scroll;
    }
    .nav{
        display: flex;
        justify-content: space-around;
        width:100%;
        height: 88rpx;
        line-height: 88rpx;
        border-top:3rpx solid #eee;
        position: fixed;
        top:0;
        left: 0;
        background: #fff;
        border-bottom:1rpx solid #eee;
        .active{
            border-bottom: 1px solid rgb(7, 84, 114);
        }
    }
    .content{
        flex:1;    
        padding-top:88rpx;
        background: #eee;
    }

</style>