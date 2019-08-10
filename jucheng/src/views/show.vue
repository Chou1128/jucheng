<template>
    <div>
        <header>
            <h3>演出</h3>
        </header>
        <van-tabs v-model="pageActive">
            <van-tab v-for="(t) in shopList" :title="t.name">
                <van-list
                style="margin-bottom:50px"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="getShopList"
                >
                    <van-card
                        style="width:345px;height:152px;background:#fff;"
                        v-for="(item, index) in t.list"
                        :key="index"
                        :price="item.max_price"
                        :desc="item.city_name + '|' +item.venue_name"
                        :title="item.name"
                        :thumb="item.pic"
                        
                    />
                </van-list>
            </van-tab>
        </van-tabs>
            
    </div>
</template>
<script>
export default {
    data() {
        return {
            shopList: [],
            loading: false,
            finished: false,
        }
    },
    methods: {
        // navTo(id) {
        //     this.$router.push({
        //         name: "detail2",
        //         params: { id }
        //     });
        // },
        async getShopList() {
        /// 获取信息
            let poilist = await this.$axios.get(
            "https://www.easy-mock.com/mock/5d47fdb62252e83781ec6621/jc/showlist"
            );
            this.shopList = [...this.shopList, ...poilist.data.data.show_category_list];
            // console.log(this.shopList);
            this.pageActive = this.$route.params.id
            // 加载状态结束
            this.loading = false;
            // 数据全部加载完成
            if (this.shopList.length >= 10) {
            this.finished = true;
            }
        }
    },
    async created() {
        // 列表首次加载
        this.getShopList();
    }
}
</script>

<style>
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
    nav{
        height: 25px;
        padding: 10px 0 10px 15px;
        border: 1px solid #ccc;
    }
    .van-card__header{
        height: 152px;
    }
    .van-card__thumb .van-image .van-image__img{
        width:110px;
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
</style>
