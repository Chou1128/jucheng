<template>
    <div>
        <div class="brief detail__brief">
            <div class="brief__primary">
                <img :src="tickets[number].schePic" class="brief__primary__bg">
                <div class="brief__primary__mask"></div> 
                <div class="brief__primary__fg">
                    <div class="brief__primary__fg__title">
                        <span class="brief__primary__fg__title__text">演出详情</span> 
                        <i class="iconfont ju-icon-arrow brief__primary__fg__title__back"><</i> 
                        <i class="iconfont ju-icon-home brief__primary__fg__title__home">...</i>
                    </div> 
                    <div class="brief__primary__fg__content">
                        <div class=" brief__primary__fg__content__cover">
                            <img :src="tickets[number].schePic" alt="" class="cover__img"></div>
                            <div class="brief__primary__fg__content__tag">
                                <div class="juooo_sponsor">
                                    <i class="logo_i"></i>
                                </div>
                            </div> 
                            <div class="brief__primary__fg__content__info">
                                <div class="brief__primary__fg__content__info__name" v-text="tickets[number].show_name">
                            </div> 
                            <div class="brief__primary__fg__content__info__tag-wrapper">
                                <div class="brief__primary__fg__content__info__tag"></div>
                            </div> 
                            <div class="brief__primary__fg__content__info__price">
                                <span class="brief__primary__fg__content__info__price__range" v-text="'￥'+tickets[number].low_price +'-'+ tickets[number].high_price">￥280-1280</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="brief__secondary">
                <div class="brief__secondary__info">
                    <div class="brief__secondary__info__date-time">
                        <span class="brief__secondary__info__date-time__date" v-text="tickets[number].show_time"></span>
                        <span class="brief__secondary__info__date-time__time" v-text="tickets[number].week"></span> 
                        <span class="brief__secondary__info__date-time__time">></span> 
                    </div> 
                    <div class="brief__secondary__info__place" v-text="tickets[number].c_name +' '+'|'+' '+tickets[number].v_name"></div>
                </div> 
                <div class="brief__secondary__pointer" v-html="tickets[number].tag_icon"></div>
            </div>
            <div data-v-0ef31218="" class="detail__plus-tips">
                <div data-v-ab68c76e="" data-v-0ef31218="" class="card-plus-tips">
                    <div data-v-b078f23c="" data-v-ab68c76e="" class="orange-plus-tips">
                        <div data-v-b078f23c="" class="orange-plus-tips__name">橙PLUS卡</div>
                        <div data-v-b078f23c="" class="orange-plus-tips__desc">开通送￥100 最高省128元</div>
                        <div data-v-b078f23c="" class="orange-plus-tips__guide">立即开卡  ></div>
                        <i data-v-b078f23c="" class="iconfont ju-icon-arrow-right orange-plus-tips__arrow"></i>
                    </div>
                </div>
            </div>
            <div class="show-benefit detail__schedule-discount">
                <div >
                    <div    class="show-benefit-item plus">
                        <span  class="show-benefit-item__name">开卡送</span>
                        <span  class="show-benefit-item__colon">：</span>
                        <span  class="show-benefit-item__content">
                            <div   class="plus__desc">开通橙PLUS卡
                                <span   class="plus__desc__benefit">送￥100 尊享V+权益</span> 
                                <span   class="plus__desc__arrow">></span>
                            </div>
                        </span>
                    </div>
                    <div  class="divider"></div>
                </div>
                <div >
                    <div   class="show-benefit-item discount-wrapper">
                        <span  class="show-benefit-item__name">优惠</span>
                        <span  class="show-benefit-item__colon">：</span>
                        <span  class="show-benefit-item__content">
                            <div  class="discount">
                                <div  class="show-discount-benefit-item discount__item" >
                                    <div  class="show-discount-benefit-item__content">
                                        <span  class="show-discount-benefit-item__content__tag">折扣</span>
                                        <span  class="show-discount-benefit-item__content__title">购买指定票价享9折</span>
                                    </div>
                                </div>
                                <i  class="iconfont ju-icon-ellipsis ellipsis discount__ellipsis" >...</i>
                            </div>
                        </span>
                    </div>
                    <div  class="divider"></div>
                </div>
                <div >
                    <div    class="show-benefit-item">
                        <span  class="show-benefit-item__name">入场</span>
                        <span  class="show-benefit-item__colon">：</span>
                        <span  class="show-benefit-item__content">
                            <div   class="enter">一人一票，凭票入场</div>
                        </span>
                    </div>
                    <div  class="divider"></div>
                </div>
                <div >
                    <div    class="show-benefit-item support">
                        <span  class="show-benefit-item__name">支持</span>
                        <span  class="show-benefit-item__colon">：</span>
                        <span  class="show-benefit-item__content">
                            <span   class="support__list">
                                <span   class="support__list__item">
                                    <span   class="support__list__item__text">在线选座</span>
                                    <span   class="support__list__item__divider"></span>
                                </span>
                                <span   class="support__list__item">
                                    <span   class="support__list__item__text">同城满200免邮</span>
                                </span>
                            </span>
                        </span>
                    </div>
                </div> 
                <div ></div>
            </div>
            <div class="bottom-bar detail__bottom-bar">
                <div class="bottom-bar__client-service">
                    <img src="../assets/help.png" class="bottom-bar__client-service__img">
                    <div  class="bottom-bar__client-service__text">客服</div>
                </div>
                <div  class="bottom-bar__btn">立即购买</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tickets: [],
            number:0,

        }
    },
    methods: {
        
    },
    async created() {
            let ticketlist = await this.$axios.get(
            "https://www.easy-mock.com/mock/5d47fdb62252e83781ec6621/jc/tuijian"
            );
            this.tickets = ticketlist.data.data.recommend_show_list;
            // console.log(this.tickets);
            this.number = this.$route.params.id
    }
}
</script>
<style>
    .brief {
        background-color: #fefefe;
    }
    .brief__primary {
        position: relative;
        height: 230px;
        overflow: hidden;
    }
    .brief__primary__bg {
        position: absolute;
        left: 0;
        right: 0;
        height: auto;
        width: 100%;
        background-color: #b8abab;
        filter: blur(20px);
    }
    .brief__primary__mask {
        position: absolute;
        left: 0;
        right: 0;
        height: 230px;
        background-color: rgba(0,0,0,.1);
    }
    .brief__primary__fg {
        position: relative;
        height: 230px;
    }
    .brief__primary__fg__title {
        position: relative;
        height: 44px;
    }
    .brief__primary__fg__title__text {
        font-weight: 700;
        color: #fefefe;
        top: 0;
        right: 0;
    }
    .brief__primary__fg__title__back, 
    .brief__primary__fg__title__text {
        display: block;
        height: 44px;
        position: absolute;
        left: 0;
        text-align: center;
        line-height: 44px;
        font-size: 18px;
    }
    .brief__primary__fg__title__back {
        width: 1.04rem;
        color: #fff;
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .brief__primary__fg__title__home {
        width: 35px;
        height: 44px;
        display: block;
        position: absolute;
        top: 0;
        text-align: center;
        line-height: 44px;
        font-size:16px;
        color: #fff;
        right: 3px;
    }
    .brief__primary__fg__content {
        display: -webkit-box;
        display: flex;
        padding: 0 15px;
        position: relative;
    }
    .brief__primary__fg__content__cover {
        width: 110px;
        height: 150px;
        margin-top: 15px;
        border-radius: 2px;
        background-color: #aaa;
    }
    img {
        border: none;
        border-color: transparent;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }
    .brief__primary__fg__content__info {
        margin-top: 20px;
        margin-left: 14px;
        display: flex;
        flex-direction: column;
    }
    .brief__primary__fg__content__info__name {
        font-size: 20px;
        line-height: 21px;
        font-weight: 700;
        color: #fefefe;
        min-height: 10px;
        width: 220px;
    }
    .brief__primary__fg__content__info__price{
        display: flex;
        flex-grow: 1;
        align-items: flex-end;
        padding-bottom: 8px;
        margin-top: 3px;
        height: 26px;
    }
    .brief__primary__fg__content__info__price__range {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: #fefefe;
        display: inline-block;
        white-space: nowrap;
    }
    .brief__primary__fg__content__info__tag-wrapper{
        overflow: hidden;
        height: 17px;
        box-sizing: border-box;
        margin-top: 11px;
    }
    .brief__secondary {
        padding:0px 15px 21px 15px;
        display: flex;
    }
    .brief__secondary__info__date-time {
        margin-top: 23px;
        font-size: 18px;
        display: flex;
        align-items: center;
        color: #232323;
        width:300px;
    }
    .brief__secondary__info__date-time__date {
        display: inline-block;
        font-weight: 700;
        height: 18px;
        line-height: 18px;
    }
    .brief__secondary__info__date-time__time {
        display: inline-block;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        margin-left: 5px;
    }
    .brief__secondary__info__place {
        font-size: 16px;
        font-weight: 700;
        color: #232323;
        margin-top: 16px;
        margin-right: 57px;
        line-height: 22px;
    }
    .brief__secondary__pointer {
        flex-grow: 0;
        flex-shrink: 0;
        margin-top: 33px;
        width: 44px;
        height: 44px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAMAAAA6jerHAAABUFBMV…Q3mV8WojIrG5uONrB+CPTNxT1xp7iZcIB7VepZ31zQ3AD3qlOhjBDHJAAAAABJRU5ErkJggg==);
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: .48rem .58667rem;
        background-color: #ededed;
        outline: none;
        border-radius: 50%;
    }
    .detail__plus-tips {
        padding: 0 15px 20px 15px;
        background-color: #fff;
    }
    .orange-plus-tips {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 49px;
        background-image: linear-gradient(-4deg,#1e1e1e,#464542);
        border-radius: 2px;
        display: flex;
        align-items: center;
    }
    .orange-plus-tips__name[data-v-b078f23c] {
        position: absolute;
        left: 3px;
        top: 50%;
        font-size: 22px;
        transform: scale(.5) translateY(-50%);
        transform-origin: 0 0;
        background-image: linear-gradient(0deg,#f5dea9,#f8d583);
        border-radius: 5px;
        width: 112px;
        height: 34px;
        text-align: center;
        line-height: 40px;
    }
    .orange-plus-tips__desc {
        font-size: 14px;
        color: #f5dea9;
        margin-left:79px;
        white-space: nowrap;
        line-height: 49px;
        flex: 1;
    }
    .orange-plus-tips__guide {
        font-size: .29333rem;
        line-height: .42667rem;
        font-weight: 500;
        color: #f5dea9;
        margin-right: .16rem;
    }
    .show-benefit {
        background-color: #fefefe;
        margin-top: 12px;
    }
    .show-benefit-item {
        display: flex;
        padding: 15px;
    }
    .show-benefit-item__name,
    .show-benefit-item__colon {
        font-size: 14px;
        color: #999;
        height: 24px;
        line-height: 24px;
    }
    .show-benefit-item__name {
        width: 45px;
        display: inline-block;
        text-align: justify;
        flex-shrink: 0;
    }
    .plus__desc {
        display: flex;
        height: 100%;
        align-items: center;
        font-size: 14px;
        color: #222;
        padding-left: 15px;
        line-height: 24px;
    }
    .show-benefit-item__content {
        flex-grow: 1;
    }
    .plus__desc__benefit {
        color: #ff6743;
        padding-left: 6px;
        flex: 1;
    }
    .plus__desc__arrow {
        font-size: 14px;
        color: #232323;
    }
    .divider {
        margin: 0 .4rem;
        border-bottom: 1px solid #ebebeb;
    }
    .discount {
        margin-left: 15px;
        margin-top: 1px;
        position: relative;
    }
    .show-discount-benefit-item {
        width: 259px;
    }
    .show-discount-benefit-item__content__tag {
        display: inline-block;
        font-size: .53333rem;
        line-height: .53333rem;
        color: #ff6743;
        padding: .16rem .26667rem .10667rem;
        border: 1px solid #ff6743;
        border-radius: .16rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -ms-flex-negative: 0;
        flex-shrink: 0;
    }
    .show-discount-benefit-item__content__title {
        width: 12.24rem;
        margin-left: .53333rem;
        font-size: .53333rem;
        line-height: .69333rem;
        color: #232323;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .discount__ellipsis {
        position: absolute;
        right: 0;
        top: .13333rem;
    }
    .ellipsis {
        font-size: 18px;
        color: #232323;
    }
    .support__list__item__text {
        display: inline-block;
        padding:0 15px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .support__list__item__divider {
        display: inline-block;
        width: 1px;
        height: 12px;
        background-color: #999;
    }
    .support__list {
        font-size:14px;
        color: #999;
    }
    .bottom-bar, 
    .bottom-bar__client-service {
        display: flex;
        align-items: center;
    }
    .bottom-bar {
        border: 1px solid #ebebeb;
        height: 50px;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #fefefe;
    }
    .detail__bottom-bar{
        position: absolute;
        bottom: 0;
    }
    .bottom-bar__client-service__text {
        font-size: 14px;
        color: #666;
    }
    .bottom-bar__client-service__img {
        width: 25px;
        height: 20px;
    }
    .bottom-bar__btn {
        width: 100%;
        height: 49px;
        background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#fefefe,#fefefe);
        background-blend-mode: normal,normal;
        flex-grow: 1;
        font-size: 20px;
        font-weight: 700;
        color: #fefefe;
        text-align: center;
        line-height: 49px;
    }
</style>
