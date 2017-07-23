<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd"></header>
            <div class="main_bd">
                <div class="content-box">
                    <header class="content-hd">
                        <div class="show-content clearfix">
                            <div class="tip-box text_r">
                                <!--消息-->
                                <span class="iconfont icon-msg msg"></span>
                                <!--设置-->
                                <span class="iconfont icon-set set-btn"></span>
                            </div>
                            <div class="u-info clearfix">
                                <div class="u-photo float_l"><img src="../../assets/images/photo.jpg" alt="photo"><span class="rankNum">Lv 0</span></div>
                                <div class="text-Uinfo float_l">
                                    <div class="float_l">
                                        <p class="name">黑钦王</p>
                                        <p class="my-club">我的俱乐部</p>
                                        <p class="my-addre">广西南宁市，男，18</p>
                                    </div>
                                    <div class="total-info">
                                        <div class="fans_" @click.stop="linkFun('/user/fans')">
                                            <span>0</span>
                                            <p>粉丝</p>
                                        </div>
                                        <div class="concern_">
                                            <span>0</span>
                                            <p>关注</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="groud-btn clearfix">
                                <div class="iconfont icon-sendmes btn-item">发消息</div>
                                <div class="btn-item"><span class="text_">取消关注</span></div>
                            </div>
                        </div>
                        <!--遮罩层-->
                        <div class="layer bg_color"></div>
                    </header>
                    <div class="content-bd">
                        <!--统计-->
                        <grid :rows="3" class="border0 total-content">
                            <grid-item class="border0">
                                <span class="num">0</span>
                                <p class="unit">总里程(km)</p>
                            </grid-item>
                            <grid-item class="border0">
                                <span class="num">100</span>
                                <p class="unit">总积分</p>
                            </grid-item>
                            <grid-item class="border0">
                                <span class="num">9999+</span>
                                <p class="unit">骑行排名</p>
                            </grid-item>
                        </grid>
                        <ul class="list-box">
                            <li class="item">
                                <div class="map-box clearfix">
                                    <img src="../../assets/images/lushu_bg.jpg" alt="路书">
                                    <div class="info-box clearfix">
                                        <div class="u-photo float_l"><img src="../../assets/images/photo.jpg" alt=""></div>
                                        <p class="data-tiem float_l">2017-06-10 <span>晚上</span></p>
                                        <div class="total-box float_r">
                                            <div class="km_ float_l"><strong>85.32</strong> km</div>
                                            <div class="heat_ float_l"><strong>86</strong> ℃</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="number-box">
                                    <span class="iconfont icon-dianzan"> 0</span>
                                    <span class="iconfont icon-message"> 0</span>
                                </div>
                            </li>
                            <li class="item">
                                <div class="map-box clearfix">
                                    <img src="../../assets/images/lushu_bg.jpg" alt="路书">
                                    <div class="info-box clearfix">
                                        <div class="u-photo float_l"><img src="../../assets/images/photo.jpg" alt=""></div>
                                        <p class="data-tiem float_l">2017-06-10 <span>晚上</span></p>
                                        <div class="total-box float_r">
                                            <div class="km_ float_l"><strong>85.32</strong> km</div>
                                            <div class="heat_ float_l"><strong>86</strong> ℃</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="number-box">
                                    <span class="iconfont icon-dianzan"> 0</span>
                                    <span class="iconfont icon-message"> 0</span>
                                </div>
                            </li>
                            <li class="item">
                                <div class="map-box clearfix">
                                    <img src="../../assets/images/lushu_bg.jpg" alt="路书">
                                    <div class="info-box clearfix">
                                        <div class="u-photo float_l"><img src="../../assets/images/photo.jpg" alt=""></div>
                                        <p class="data-tiem float_l">2017-06-10 <span>晚上</span></p>
                                        <div class="total-box float_r">
                                            <div class="km_ float_l"><strong>85.32</strong> km</div>
                                            <div class="heat_ float_l"><strong>86</strong> ℃</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="number-box">
                                    <span class="iconfont icon-dianzan"> 0</span>
                                    <span class="iconfont icon-message"> 0</span>
                                </div>
                            </li>
                            <li class="item">
                                <div class="map-box clearfix">
                                    <img src="../../assets/images/lushu_bg.jpg" alt="路书">
                                    <div class="info-box clearfix">
                                        <div class="u-photo float_l"><img src="../../assets/images/photo.jpg" alt=""></div>
                                        <p class="data-tiem float_l">2017-06-10 <span>晚上</span></p>
                                        <div class="total-box float_r">
                                            <div class="km_ float_l"><strong>85.32</strong> km</div>
                                            <div class="heat_ float_l"><strong>86</strong> ℃</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="number-box">
                                    <span class="iconfont icon-dianzan"> 0</span>
                                    <span class="iconfont icon-message"> 0</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    Grid,
    GridItem
} from 'vux'
export default {
    components: {
        Grid,
        GridItem
    },
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>

<style lang="less" scoped>

.page-user .main_bd { background-color: #f2f2f2; top: 0; }
.page-user .main_bd > div { background-color: #fff; }
/*头部*/
.page-user header.content-hd {
    position: relative;
}
.content-hd > .show-content {
    position: relative;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.24);
    overflow: hidden;
}
/*遮罩阴影层*/
.layer.bg_color {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('../../assets/images/U_header_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.page-user .tip-box .msg { font-size: 20px; }
.page-user .tip-box .set-btn {
    display: inline-block;
    font-size: 20px;
    margin-left: 8px;
}
.page-user .tip-box { padding: 10px; color: #fff; }
/*u-info*/
.page-user .content-hd .u-info {
    position: relative;
    margin-left: 15px;
    box-sizing: border-box;
}
.u-info .u-photo,
.info-box .u-photo {
    width: 64px;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
}
.u-info .u-photo img,
.info-box .u-photo img { display: block; font-size: 0; width: 100%; max-width: 100%; }
.u-info .u-photo .rankNum {
    position: absolute; 
    top: auto; bottom: -8px; 
    right: auto; left: 32px;
    z-index: 999;
    color: #fff;
    font-size: 10px;
    line-height: 1;
    background-color: #2e8ecf;
    padding: 2px 3px 0;
    border: 1px solid #fff;
    border-radius: 4px;
    transform: translateX(-50%);
}
.u-info .text-Uinfo {
    width: 100%; height: 100%;
    padding-left: 75px;
    position: absolute;
    font-size: 12px;
    color: #fff;
    box-sizing: border-box
}
.u-info .text-Uinfo .name { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
.u-info .text-Uinfo .total-info {
    position: absolute;
    z-index: 999;
    right: 15px;
    bottom: 0;
    top: auto;
}
.u-info .total-info > div {
    position: relative;
    display: inline-block;
    text-align: center;
    padding: 0 10px;
    color: #fff;
    line-height: 1.6;
}
.u-info .total-info > div > span {
    display: inline-block;
    margin-top: 4px;
    font-size: 14px;
    font-weight: 600;
}
.u-info .total-info > div:active::after {
    content: '';
    position: absolute;
    top: 0; right: 0; left: 0; right: 0;
    width: 95%; height: 100%;
    margin: auto;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.16);
}
.show-content .groud-btn { width: 100%; margin: 25px auto 15px; }
.show-content .groud-btn .btn-item {
    position: relative;
    float: left;
    width: 50%;
    height: 26px; line-height: 26px;
    color: #fff;
    font-size: 16px;
    text-align: center;
}
.groud-btn .btn-item > span {
    display: inline-block;
    margin-top: -1px;
    padding: 0 14px;
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: inherit;
    line-height: 1.6
}
.groud-btn .btn-item:first-child::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 70%;
    top: 15%;
    right: 0;
    bottom: auto; left: auto;
    background-color: #fff;
}

// 主体内列表
.content-bd .list-box .item {
    background-color: #f2f2f2;
    padding-top: 10px;
}
.content-bd .list-box .item .iconfont {
    float: left;
    color: #ccc;
    font-size: 12px;
    margin-right: 15px;
}
.list-box .item .number-box {
    padding: 0 15px;
    background-color: #fff;
}
.item .map-box > img {
    display: block;
    width: 100%;
    height: auto;
    font-size: 0;
}
.item .info-box {
    position: relative;
    z-index: 99;
    width: 100%;
    height: 36px;
    padding: 4px 10px;
    margin-top: -36px;
    background-color: rgba(255, 255, 255, 0.8);
}
.item .info-box .u-photo {
    float: left;
    width: 28px; height: 28px;
    margin-right: 10px;
    border: 0;
}
.item .info-box .data-tiem { margin-top: 4px; font-size: 14px; }
.item .total-box > div { font-size: 12px; color: #666; margin-left: 10px; line-height: 28px; }
.item .total-box .km_ > strong { font-size: 20px; color: #58a8de }
.item .total-box .heat_ > strong { font-size: 20px; color: #ea7971; }
/*top_total 统计*/
.total-content a {
    padding: 10px;
    text-align: center;
    font-size: 10px;
    color: #ababab;
    line-height: 1.2;
}
.total-content a .num {
    display: block;
    font-size: 14px;
    color: #333;
    margin-bottom: 6px;
}
</style>
