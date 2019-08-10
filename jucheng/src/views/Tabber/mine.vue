<template>
    <div class="mine">
        <div  class="mine-info mine-info">
            <a  href="https://m.juooo.com/Myjuooo/mysecurity">
                <i  class="iconfont ju-icon-setting1"></i>
            </a> 
            <div  class="mine-info__main">
                <div  class="mine-info__main__head">
                    <div  class="mine-info__main__head__pic">
                        <img  alt="" src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png">
                    </div> 
                    <span  class="mine-info__main__head__name">橙子</span>
                    <span  class="mine-info__main__head__uid">ID: 6793328</span>
                </div> 
                <div  class="mine-info__main__label">
                    <p  class="mine-info__main__label__name">普通会员</p>
                </div> 
                <div  class="mine-info__main__cnt">
                    <a  href="https://m.juooo.com/Myjuooo/mymoney" class="mine-info__main__cnt__item">
                        <p  class="mine-info__main__cnt__item__num">0</p> 
                        <p  class="mine-info__main__cnt__item__name">账户余额</p> 
                        <div  class="separator"></div>
                    </a> 
                    <a  href="https://m.juooo.com/Myjuooo/myintegral" class="mine-info__main__cnt__item">
                        <p  class="mine-info__main__cnt__item__num">8</p> 
                        <p  class="mine-info__main__cnt__item__name">积分</p> 
                        <div  class="separator"></div>
                    </a> 
                    <a  href="https://m.juooo.com/Myjuooo/couponExchange" class="mine-info__main__cnt__item">
                        <p  class="mine-info__main__cnt__item__num">0</p> 
                        <p  class="mine-info__main__cnt__item__name">优惠券</p> 
                        <div  class="separator"></div>
                    </a> 
                    <a  href="https://m.juooo.com/plus/index" class="mine-info__main__cnt__item mine-info__main__cnt__plus">
                        <p  class="mine-info__main__cnt__item__num mine-info__main__cnt__item__num--no">立即开通</p>
                        <p  class="mine-info__main__cnt__item__name">橙PLUS卡</p>
                    </a>
                </div>
            </div>
        </div>
        <a href="https://m.juooo.com/shop/vip/buy" class="mine-vip">
            <img src="../../assets/vip.png" alt="" class="mine-vip__pic">
        </a>
        <div class="mine-setting">
            <ul class="mine-setting__list">
                <li class="mine-setting__list__item">
                    <a href="https://m.juooo.com/my/myOrderList" class="mine-setting__list__item--link">
                        <i class="icon icon-order"></i> 
                        <p class="mine-setting__list__item__name">我的订单</p>
                    </a>
                </li>
                <li class="mine-setting__list__item">
                    <a href="https://m.juooo.com/eticket/mine" class="mine-setting__list__item--link">
                        <i class="icon icon-ticketholder"></i> 
                        <p class="mine-setting__list__item__name">我的票夹</p>
                    </a>
                </li>
                <li class="mine-setting__list__item">
                    <a href="https://m.juooo.com/Cardproduct/index?current=mine" class="mine-setting__list__item--link">
                        <i class="icon icon-cardpackage"></i> 
                        <p class="mine-setting__list__item__name">我的卡包</p>
                    </a>
                </li>
                <li class="mine-setting__list__item"></li>
            </ul> 
            <ul class="mine-setting__list">
                <li class="mine-setting__list__item">
                    <a href="https://m.juooo.com/Myjuooo/myRealNameCertification" class="mine-setting__list__item--link">
                        <i class="icon icon-people"></i> 
                        <p class="mine-setting__list__item__name">实名购票人</p>
                    </a>
                </li>
                <li class="mine-setting__list__item">
                    <a href="https://m.juooo.com/Myjuooo/myaddress" class="mine-setting__list__item--link">
                        <i class="icon icon-address"></i> 
                        <p class="mine-setting__list__item__name">收货地址</p>
                    </a>
                </li>
                <li class="mine-setting__list__item">
                    <a href="https://m.juooo.com/feedback/index" class="mine-setting__list__item--link">
                        <i class="icon icon-feedback"></i> 
                        <p class="mine-setting__list__item__name">意见反馈</p>
                    </a>
                </li> 
                <li class="mine-setting__list__item">
                    <a href="javascript:;" class="mine-setting__list__item--link">
                        <i class="icon icon-help"></i> 
                        <p class="mine-setting__list__item__name" style="color:red">客服帮助</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
    .mine{
        height: 810px;
        background: rgb(241, 240, 240);
    }
    .mine-info {
        height: 209px;
        /* background: url() no-repeat 50%;
        background-size: 100%; */
        background: #e4bda4;
        position: relative;
        overflow: hidden;
    }
    .mine-info__main {
        background: #fff;
        box-shadow: 0 6px 5px 1px rgba(35,35,35,.08);
        border-radius: 4px;
        margin: 57px 15px 0 ;
        position: relative;
    }
    .mine-info__main__head {
        padding: 0 15px;
        position: relative;
    }
    .mine-info__main__head__pic {
        display: inline-block;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        border: 2px solid #fff;
        margin-top: -12px;
        margin-right: 10px;
        background: #f5f5f5;
        overflow: hidden;
    }
    img {
        border: none;
        border-color: transparent;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }
    .mine-info__main__head__name {
        position: absolute;
        top: 12.5px;
        color: #232323;
        font-size: 15px;
        font-weight: 700;
    }
    .mine-info__main__head__uid {
        position: absolute;
        color: #999;
        font-size: 12px;
        bottom: 0;
    }
    .mine-info__main__label {
        margin-top: -3.5px;
        overflow: hidden;
    }
    .mine-info__main__label__name {
        float: right;
        font-size: 14px;
        color: #454341;
        font-weight: 700;
        padding: 3px 10px 3px 14px;
        background: linear-gradient(-45deg,#f5dea9,#f8d583);
        border-radius: 13px 0 0 13px;
    }
    .mine-info__main__cnt {
        display: flex;
        align-items: center;
    }
    .mine-info__main__cnt__item {
        flex: 1;
        text-align: center;
        position: relative;
        padding: 15px 0 20px;
        color: #666;
        font-weight: 500;
        font-size: 12px;
    }
    .mine-info__main__cnt__item__num {
        color: #ff6743;
        font-size: 20px;
        margin-bottom: 8px;
    }
    .mine-info__main__cnt__item__num--no {
        color: #232323;
        font-size: .34667rem;
    }
    .mine-vip {
        display: block;
    }
    .mine-vip__pic {
        display: block;
        width: 370px;
        height: 90px;
        margin: 0 auto;
    }
    .mine-setting {
        padding: 0 15px;
    }
    .mine-setting__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 12px;
        background-color: #fff;
        /* box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08); */
        border-radius: 4px;
    }
    .mine-setting__list__item {
        width: 25%;
        text-align: center;
        padding: 16px 0 20px;
        font-size: 12px;
        color: #666;
    }
    .mine-setting__list__item--link {
        display: block;
    }
    .mine-setting__list__item .icon-order {
        display: inline-block;
        width: 33px;
        height: 33px;
        text-align: center;
        background: url(../../assets/oder.png) no-repeat 50%;
        background-size: 100%;
    }
    .mine-setting__list__item .icon-ticketholder {
        display: inline-block;
        width: 33px;
        height: 33px;
        text-align: center;
        background: url(../../assets/icon_verification.png) no-repeat 50%;
        background-size: 100%;
    }
    .mine-setting__list__item .icon-cardpackage {
        display: inline-block;
        width: 33px;
        height: 33px;
        text-align: center;
        background: url(../../assets/kabao.png) no-repeat 50%;
        background-size: 100%;
    }
    .mine-setting__list__item .icon-people {
        display: inline-block;
        width: 33px;
        height: 33px;
        text-align: center;
        background: url(../../assets/people.png) no-repeat 50%;
        background-size: 100%;
    }
    .mine-setting__list__item .icon-address {
        display: inline-block;
        width: 33px;
        height: 33px;
        text-align: center;
        background: url(../../assets/address.png) no-repeat 50%;
        background-size: 100%;
    }
    .mine-setting__list__item .icon-feedback {
        display: inline-block;
        width: 33px;
        height: 33px;
        text-align: center;
        background: url(../../assets/feedback.png) no-repeat 50%;
        background-size: 100%;
    }
    .mine-setting__list__item .icon-help {
        display: inline-block;
        width: 33px;
        height: 33px;
        text-align: center;
        background: url(../../assets/help.png) no-repeat 50%;
        background-size: 100%;
    }
    .mine-setting__list__item__name{
        color:rgb(35, 35, 35);
        font-size: 12px;
    }
    .ju-icon-setting1 {
        position: absolute;
        right: 15px;
        top: 15px;
        color: #fefefe;
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        background: url(../../assets/set.png) no-repeat 50%;
        background-size: 100%;
    }
</style>

