<template>
    <div class="box">
        <header>
            <h3>剧院</h3>
        </header>
        <div class="theaterList" v-for="(t,index) in theatre" :key="index">
            <div class="clearfix">
                <img :src="t.pic" alt="">
                <div style="float:left;">
                    <p class="title" v-html="t.name"></p>
                    <p class="desc" v-html="t.count + '场在售演出'"></p>
                </div>
            </div>
            <van-swipe style="margin-top:30px">
                <van-swipe-item v-for="(i, index) in theatre[index].showList" :key="index" style="width:106px;margin-right:10px;">
                    <img :src="i.pic" style="width:106px;height:145px;"/>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            theatre:[]
        }
        
    },
    async created() {
        
        let theatrelist = await this.$axios(
        "https://www.easy-mock.com/mock/5d47fdb62252e83781ec6621/jc/juyuan"
        );
        this.theatre = theatrelist.data.data.theatre_list;
    }
}
</script>
<style>
    .box{
        background: rgb(247, 246, 246);
    }
    header{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid rgb(230, 230, 230);
        margin: auto;
        background: #fff;
    }
    h3{
        margin-top:0px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
    }
    .theaterList{
        height:255px;
        border:1px solid rgb(230, 230, 230);
        background:white;
        margin:10px 12px;
        padding:14px 17px;
    }
    .theaterList img {
        width: 43px;
        height: 43px;
        margin-right: 8px;
        float: left;
    }
    .theaterList p{
        margin: 0px;
    }
    .theaterList .title{
        font-size: 18px;
        font-weight: bold;
        color:#232323;
    }
    .theaterList .desc{
        font-size: 12px;
        color:#232323;
    }
</style>

