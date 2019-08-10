<template>
    <div style="position: relative">
        <!-- 搜索 -->
        <header class="head" :class="{searchFixed}">
           <div class="head-address">
                <strong class="head-address__icon"></strong>
                <span class="head-address__name text-single">全国</span>
            </div> 
            <div class="head-search">
                <img src="/static/img/nav_icon_search.f194288.png" alt="" class="head-search__img">
                <span class="head-search__lab">搜索热门演出</span>
            </div> 
            <span class="head-space">
                <a href="https://m.juooo.com/Distributor/centre" class="head-space__block">
                    <img src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png">
                </a>
            </span>
        </header>
        <!-- 轮播 -->
        <van-swipe :autoplay="3000" style="height: 196px">
            <van-swipe-item v-for="(i, index) in images" :key="index">
                <img :src="i.image_url" style="width:375px;height:196px"/>
            </van-swipe-item>
        </van-swipe>
        <!-- 宫格 -->
        <van-grid :column-num="5">
            <van-grid-item
                v-for="(k,index) in king"
                :key="index"
                :icon="k.pic"
                :text="k.name"
                @click="navTo2(index)"
            />
        </van-grid>
        <!-- vip -->
        <div class="Vip" style="padding:0 5px">
            <a href="###">
                <div class="vipHleft" style="float:left">
                    <span>优先购票</span>
                    <span>VIP+会员尊享权益</span>
                </div>
                <div class="vipHright" style="float:right">
                    <span>开通99/年</span>
                    <span>></span>
                </div>
            </a>
            <div class="vipList">
                <div class="vipLleft">
                    <img src="../../assets/rAoKmV1I49GAMdmGAACEjrX1jrI102.jpg" alt="">
                </div>
                <div class="vipLright">
                    <a href="###">
                        <h3 class="vipLrightTitle">【万有音乐系】你眼里的蓝之音色幻想—西安站</h3>
                    </a> 
                    <p>西安 | 西安果核剧场</p>
                    <p class="vipLrightTime">
                        <span>08/03 16:18</span> 
                        <span>开始</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- 为你推荐 -->
        <h2 class="title">为你推荐</h2>
        <van-list
            style="margin-bottom:50px"
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getShopList"
            >
            <van-card
                style="width:345px;height:152px;background:#fff;"
                v-for="(item,index) in shopList"
                :key="index"
                :price="item.low_price"
                :desc="item.c_name + '|' +item.v_name"
                :title="item.show_name"
                :thumb="item.schePic"
                @click="navTo(index)"
                />
        </van-list>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: "",
            //吸顶菜单
            searchFixed: false,
            // 轮播
            images: [],
            // 宫格
            king:[],
            //为你推荐
            shopList: [],
            loading: false,
            finished: false,
        }
    },
    methods: {
        navTo(id) {
            this.$router.push({
                name: "detail",
                params: { id}
            });
        },
        navTo2(id) {
            this.$router.push({
                name: "showlist",
                params: { id, name:"li"}
            });
        },
        async getShopList() {
        /// 获取信息
            let poilist = await this.$axios.get(
            "https://www.easy-mock.com/mock/5d47fdb62252e83781ec6621/jc/tuijian"
            );
            this.shopList = [...this.shopList, ...poilist.data.data.recommend_show_list];
            // console.log(this.shopList);
            // 加载状态结束
            this.loading = false;
            // 数据全部加载完成
            if (this.shopList.length >= 10) {
            this.finished = true;
            }
        }
    },
    async created() {
        //宫格
        let kinglist = await this.$axios(
        "https://www.easy-mock.com/mock/5d47fdb62252e83781ec6621/jc/home"
        );
        this.king = kinglist.data.data.classify_list;
        //轮播
        let bannerlist = await this.$axios(
        "https://www.easy-mock.com/mock/5d47fdb62252e83781ec6621/jc/home"
        );
        this.images = bannerlist.data.data.slide_list;

        
        // 列表首次加载
        this.getShopList();
    },
    activated() {
        window.onscroll = () => {
        // 吸顶菜单
        // console.log(window.scrollY);
            if (window.scrollY >= 1) {
                this.searchFixed = true;
            } else {
                this.searchFixed = false;
            }
        };
    },
    destoryed() {
        // 在home离场的时候销毁全局监听事件
        window.onscroll = null;
    },
}
</script>
<style>
    .van-grid-item{
        margin-top: 20px;
    }
    .van-icon__image,
    .van-icon__image .van-image__img{
        width: 51px;
        height:51px;
    }
    .van-hairline--top{
        margin-bottom: 30px;
    }
    .van-hairline{
        width: 75px;
        height: 80px;
        display: flex;
        padding: 0;
    }
    .van-grid-item__text {
        width: 75px;
        height: 17px;
        font-size: 14px;
        text-align: center;
    }
    .head .head-address, .head{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .van-card__thumb .van-image__img{
        width: 110px;
        height: 150px;
    }
     .van-card__content{
        margin: 12px 0 0 20px;
    }
    .van-list{
        margin-top: 10px;
    }
    .van-card{
       margin:0px auto 20px;
       height: 100px;
    }
    .van-card__title{
        width: 218px;
        max-height: 44px;
        line-height: 18px;
        font-size: 16px;
        font-weight: bold;
    }
    .van-card__desc{
        margin-top: 12px;
        font-size: 14px;
    }
    .van-card__price{
        font-size: 16px;
        margin-top: 12px ;
    }
    .navFixed {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
        background: #fff;
    }
    .head {
        height: 43px;
        width: 100%;
        padding: 15px;
        position: fixed;
        left: 0;
        right: 0;
        -webkit-box-pack: justify;
        justify-content: space-between;
        box-sizing: border-box;
        z-index: 10;
    }
    .head .head-address {
        width: 60px;
        height: 30px;
        border-radius: 20px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: rgba(0,0,0,.3);
        border: 1px solid hsla(0,0%,88%,.3);
    }
    .head-address__icon {
        width: 11px;
        height: 13px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
    }
    .head-address__name {
        width:30px;
        font-size: 12px;
        color: #fefefe;
        font-weight: 700;
        margin-left: 3px;
    }
    .head .head-search {
        width: 240px;
        height: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border: 1px solid hsla(0,0%,88%,.2);
        background-color: rgba(0,0,0,.2);
        border-radius: 20px;
        margin-left: 4px;
    }
    .head-search__img {
        width: 20px;
        height: 20px;
        margin-left: 11px;
        margin-right: 5px;
    }
    .head .head-search__lab {
        font-size: 17px;
        color: #fefefe;
    }
    .head .head-space .head-space__block img{
        width: 27px;
        height: 25px;
    }
    .Vip{
        width: 347px;
        height: 164px;
        margin: 31px auto;
        border: 1px solid rgb(199, 167, 152);
    }
    .Vip a {
        color: rgb(148, 93, 68);
        line-height:40px;
        display: block;
        height: 40px;
    }
    .vipHleft span:nth-child(1){
        font-size: 18px;
        font-weight: bold;
        margin-right: 5px;
    }
    .vipHleft span:nth-child(2){
        font-size: 14px;
    }
    .vipHright span{
        font-size: 14px;
    }
    .vipHleft span:nth-child(2){
        margin-left: 5px;
    }
    .vipList {
        width: 315px;
        height: 95px;
        position: relative;
        padding: 15px;
    }
    .vipLleft img {
        width: 65px;
        height: 89px;
        border: 1px solid #ccc;
        position: absolute;
        left: 5px;
    }
    .vipLright {
        position: absolute;
        left: 86px;
        width: 235px;
    }
    .vipLrightTitle {
        color: #232323;
        font-size: 18px;
        line-height: 20px;
        margin: 0px;
    }
    .vipLright p {
        color: #666;
        font-size: 14px;
        margin: 10px 0;
    }
    .vipLrightTime span:nth-child(1){
        color: #f18226;
        margin-right: 5px;
    }
    .title{
        font-size: 20px;
        font-weight: 700;
        color: #232323;
        margin-left: 15px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .searchFixed {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
        background: #fff;
    }
</style>


    



