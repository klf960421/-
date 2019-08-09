<template>
    <div class="listWrap">
        <nav class="nav">
            <span v-for='(item,index) in navList' 
                :key="index" 
                >{{item}}</span>
        </nav>
        <div class="content">
            <ul class="list">
                <interviewItem></interviewItem>
                <interviewItem></interviewItem>
                <interviewItem></interviewItem>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex"
import interviewItem from '../../components/interviewItem'
export default {
    props:{
  
    },
    components:{
        interviewItem
    },
    data(){
        return {
            navList:['未开始', '已打卡', '已放弃', '全部']
        }
    },
    computed:{
        ...mapState({
            signList:state=>state.addInterview.signList
        })

    },
    methods:{
        ...mapActions({
           getInfo: 'addInterview/getInfo'
        })
    },
    created(){
        //初始化获取面试列表信息
        this.getInfo()
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .listWrap{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column; 
        overflow: hidden;
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
    }
    .content{
        flex:1;    
        padding-top:88rpx;
    }
    .list{
        border-top:2rpx solid #eee;
    }
    .list li{
        border-top:20rpx solid #eee;
        width:100%;
        padding:10rpx 30rpx;
        box-sizing:border-box;
    }
    .top{
        display:flex;
        line-height:1.5;
        margin:15rpx 0;
        align-items:center;
        justify-content:space-between;
    }
    .top .title{
        color:#000;
        font-size:44rpx;
        font-weight:500;      
    }
    .center{
        font-size:32rpx;
        color:#999;
        line-height:1.2;
        overflow:hidden;
        text-overflow:ellipsis;

        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
        margin:15rpx 0;
        align-items:center;
        justify-content:space-between;
    }
    .timeWrap{
        display:flex;
        line-height:1.5;
        margin:15rpx 0;
        align-items:center;
        justify-content:space-between;
        font-size:34rpx;
        color:#666;
    }
   
    .warnBtn{
        width:100%;
        text-align: center;
        margin-top: 150rpx;
        font-size: 34rpx;
    }

</style>