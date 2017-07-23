<template>
    <div class="page page-line">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{showBack: false}">
                    <div slot="left" class="help">帮助</div>
                    <tab :line-width="0" class="nav-tab" defaultColor="#fff" active-color="#000">
                        <tab-item selected class="navTab-item" @click.native="getTabIndexFun(0)">推荐</tab-item>
                        <tab-item class="navTab-item" @click.native="getTabIndexFun(1)" >我的</tab-item>
                    </tab>
                </x-header>
            </header>
            <div class="main_bd line-con">
                <!--搜索框-->
                <header class="content-hd clearfix">
                    <Search v-show="searchObj.Boolean" :searchObj="searchObj"></Search>
                </header>
                <div class="content" v-show="!searchObj.Boolean">
                    <!--推荐路书集合-->
                    <div class="list-box recommended-line" v-show="tabIndex === 0">
                        <div class="nav-tab">
                            <div class="tab-item border0" @click.stop="searchFun">
                                <span class="iconfont icon-search"></span>
                                <p>搜索路线</p>
                            </div>
                            <div class="tab-item">
                                <span class="iconfont icon-fujin"></span>
                                <p>附近路书</p>
                            </div>
                            <div class="tab-item">
                                <span class="iconfont icon-racing"></span>
                                <p>赛段</p>
                            </div>
                        </div>
                        <ul class="line-list">
                            <li class="line-item" v-for="(item, index) in linList" :key="index">
                                <Masker>
                                    <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
                                    <div slots="content" class="m-title text_c">
                                        <h4>{{item.title}}</h4>
                                        <span>184人觉得行</span>
                                    </div>
                                </Masker>
                            </li>
                        </ul>
                        <!--<divider>已经到底了...</divider>-->
                    </div>
                    <!--我的路书-->
                    <div class="list-box my-line" v-show="tabIndex === 1">
                        <div class="hd-tab">
                            <sticky scrollBox="vux_view_box_body" :offset="46">
                                <tab :line-width="2" active-color="#2e8ecf" v-model="myTabIndex" >
                                    <tab-item selected >已下载</tab-item>
                                    <tab-item>我制作的</tab-item>
                                    <tab-item>收藏</tab-item>
                                </tab>
                            </sticky>
                        </div>
                        <swiper :show-dots="false" height="100%" v-model="myTabIndex" class="medal-swiper" >
                            <!--已下载-->
                            <swiper-item class="">
                                <div class="tab-swiper vux-center border0 item">
                                    <div class="map-box clearfix">
                                        <img src="../assets/images/lushu_bg.jpg" alt="路书" @click.stop="linkFun('/line/info')" >
                                        <div class="info-box clearfix">
                                            <input type="checkbox" id="useLine_1" name="useLine_1" class="visibility_h">
                                            <label for="useLine_1" class="input-checkbox iconfont icon-ok"></label>
                                            <div class="u-photo float_l"></div>
                                            <p class="line-name float_l">香炉岭</p>
                                            <div class="total-box float_r">
                                                <div class="km_ float_l"><strong>85.32</strong> km</div>
                                            </div>
                                        </div>
                                        <div class="delete-btn iconfont icon-delete" @click.stop="deleteFun"></div>
                                    </div>
                                    <div class="number-box">
                                        <span class="iconfont icon-message"> 0</span>
                                        <span class="iconfont icon-download"> 0</span>
                                        <span class="iconfont icon-start"></span>
                                    </div>
                                </div>
                                <div class="tab-swiper vux-center border0 item">
                                    <div class="map-box clearfix">
                                        <img src="../assets/images/lushu_bg.jpg" alt="路书" @click.stop="linkFun('/line/info')" >
                                        <div class="info-box clearfix">
                                            <input type="checkbox" id="useLine_2" name="useLine_2" class="visibility_h">
                                            <label for="useLine_2" class="input-checkbox iconfont icon-ok"></label>
                                            <div class="u-photo float_l"></div>
                                            <p class="line-name float_l">香炉岭</p>
                                            <div class="total-box float_r">
                                                <div class="km_ float_l"><strong>85.32</strong> km</div>
                                            </div>
                                        </div>
                                        <div class="delete-btn iconfont icon-delete" @click.stop="deleteFun"></div>
                                    </div>
                                    <div class="number-box">
                                        <span class="iconfont icon-message"> 0</span>
                                        <span class="iconfont icon-download"> 0</span>
                                        <span class="iconfont icon-start"></span>
                                    </div>
                                </div>
                                <div class="tab-swiper vux-center border0 item">
                                    <div class="map-box clearfix">
                                        <img src="../assets/images/lushu_bg.jpg" alt="路书" @click.stop="linkFun('/line/info')" >
                                        <div class="info-box clearfix">
                                            <input type="checkbox" id="useLine_3" name="useLine_3" class="visibility_h">
                                            <label for="useLine_3" class="input-checkbox iconfont icon-ok"></label>
                                            <div class="u-photo float_l"></div>
                                            <p class="line-name float_l">香炉岭</p>
                                            <div class="total-box float_r">
                                                <div class="km_ float_l"><strong>85.32</strong> km</div>
                                            </div>
                                        </div>
                                        <div class="delete-btn iconfont icon-delete" @click.stop="deleteFun"></div>
                                    </div>
                                    <div class="number-box">
                                        <span class="iconfont icon-message"> 0</span>
                                        <span class="iconfont icon-download"> 0</span>
                                        <span class="iconfont icon-start"></span>
                                    </div>
                                </div>
                            </swiper-item>
                            <!--我制作的-->
                            <swiper-item class="">
                                <div class="tab-swiper vux-center border0">
                                    <div>抱歉，暂无我制作的</div>
                                </div>
                            </swiper-item>
                            <!--收藏-->
                            <swiper-item  class="">
                                <div class="tab-swiper vux-center border0">
                                    <div>抱歉，暂无收藏</div>
                                </div>
                            </swiper-item>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
        <div class="bar bar-nav border0">
            <tabbar class="nav-list border0">
                <tabbar-item class="home_ nav-item" link="/home">
                    <span slot="icon" class="iconfont icon-qixing"></span>
                    <span slot="label">运动</span>
                </tabbar-item>
                <tabbar-item show-dot class="user_ nav-item" link="/user">
                    <span slot="icon" class="iconfont icon-luxian"></span>
                    <span slot="label">我的</span>
                </tabbar-item>
                <tabbar-item class="find_ nav-item">
                    <span slot="icon" class="iconfont icon-banshizhinan"></span>
                    <span slot="label">发现</span>
                </tabbar-item>
                <tabbar-item selected class="line_ nav-item" link="/line">
                    <span slot="icon" class="iconfont icon-dili"></span>
                    <span slot="label">路书</span>
                </tabbar-item>
                <tabbar-item class="club_ nav-item" link="/club">
                    <span slot="icon" class="iconfont icon-julebu"></span>
                    <span slot="label">俱乐部</span>
                </tabbar-item>
            </tabbar>
        </div>
    </div>
</template>

<script>
import Search from '@/components/Search'
import {
    XHeader, Tab, TabItem,
    Masker, Divider,
    Tabbar, TabbarItem,
    Sticky,
    Swiper, SwiperItem,
    Checker
} from 'vux'
export default {
    components: {
        XHeader,
        Tab,
        TabItem,
        Masker,
        Divider,
        Tabbar,
        TabbarItem,
        Sticky,
        Swiper,
        SwiperItem,
        Checker,
        Search
    },
    data() {
        return {
            'tabIndex': 0,
            'myTabIndex': 0,
            'linList': [
                {
                    title: '洗颜新潮流！人气洁面皂排行榜',
                    img: require('../assets/images/U_header_bg.jpg')
                },
                {
                    title: '美容用品 & 日用品（上）',
                    img: require('../assets/images/U_header_bg.jpg')
                },
                {
                    title: '远离车内毒气，日本车载空气净化器精选',
                    img: require('../assets/images/U_header_bg.jpg')
                },
                {
                    title: '远离车内毒气，日本车载空气净化器精选',
                    img: require('../assets/images/U_header_bg.jpg')
                }
            ],
            'searchObj': {
                'Name': 'line',
                'Boolean': false
            }
        }
    },
    mounted() {
    },
    methods: {
        linkFun (link) {
            this.$router.push({ name: link })
        },
        getTabIndexFun (index_) {
            this.tabIndex = index_
        },
        deleteFun() {
            alert('点击删除')
        },
        searchFun() {
            this.searchObj.Boolean = !this.searchObj.Boolean
            console.log('xxx')
        }
    }
}
</script>

<style lang="less" scoped>

.page-line .page-content { overflow-y: hidden;}

// 头部tab
.vux-header .help { color: #fff; }
.vux-header .vux-header-title, .vux-header h1 { margin: 0 110px !important; }
.top_hd .vux-tab.nav-tab {
    height: 32px;
    background: #000;
    margin-top: 4px;
    border: 1px solid #fff;
    border-radius: 2px;
    overflow: hidden;
}
.vux-tab.nav-tab .vux-tab-item {
    background: inherit;
    line-height: 32px;
}
.vux-tab.nav-tab .vux-tab-item.vux-tab-selected { background: #fff; }

// 推荐路线tab
.recommended-line .nav-tab {
    display: table;
    width: 100%;
}
.recommended-line .nav-tab > .tab-item {
    position: relative;
    display: table-cell;
    width: 33.3333%;
    padding: 4% 10px;
    color: #888;
    text-align: center;
    background-color: #fff;
    font-size: 14px;
}
.recommended-line .nav-tab > .tab-item::after {
    content: "";
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 1px;
    border-left: 1px solid #D9D9D9;
    color: #D9D9D9;
    transform: scaleX(0.5);
    transform-origin: 100% 0;
}
.recommended-line .tab-item > .iconfont {
    display: inline-block;
    font-size: 18px;
    width: 32px; height: 32px;
    line-height: 32px;
    border-radius: 50%;
    background-color: #f2f2f2;
    margin-bottom: 5px;
    color: #fff;
}
.tab-item > .iconfont.icon-search { background-color: #ff9800; }
.tab-item > .iconfont.icon-fujin { background-color: #27b20a; }
.tab-item > .iconfont.icon-racing { background-color: #333; }

// 列表
.recommended-line .line-item { font-size: 0; }
.recommended-line .line-item:last-of-type { margin-bottom: 58px; }
.line-item .vux-masker-box {
    position: relative;
    width: 100%;
    height: auto;
}
.line-item .vux-masker-box .m-title {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    color: #fff;
    z-index: 99;
}
.line-item .vux-masker-box .m-title > h4 { font-weight: 400; font-size: 16px; }
.line-item .vux-masker-box .m-title > span { font-size: 14px; }
.line-item .vux-masker-box .m-img {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 40%;
}

// 我的路书
.page-content .main_bd .medal-swiper {
    position: absolute;
    width: 100%;
    top: 44px;
    bottom: 0;
    background-color: #f2f2f2;
}
.medal-swiper .medal-item p {
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    color: #666;
}
.medal-swiper .vux-swiper-item { overflow-y: auto; }
.medal-bg {
    font-size: 0;
    width: 60%;
    padding-top: 60%;
    margin: auto;
    border-radius: 50%;
    background-color: #f2f2f2;
    box-shadow: 0px 0px 1px #cdcdcd;
    background-size: cover;
}
// 我的路书列表
// 主体内列表
.line-con .list-box .item {
    position: relative;
    background-color: #f2f2f2;
    padding-top: 10px;
}
.line-con .list-box .item:first-child { padding-top: 0; }
.line-con .list-box .item:last-of-type { margin-bottom: 58px; }
.line-con .list-box .item .iconfont {
    float: left;
    color: #666;
    font-size: 14px;
    margin-right: 15px;
    text-align: center;
}
.line-con .list-box .item .iconfont::before { color: #ccc; }
.line-con .list-box .item .iconfont.icon-delete::before { color: #666 }
.list-box .item .number-box {
    height: 24px;
    line-height: 24px;
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
    width: 26px; height: 26px;
    margin-top: 1px;
    margin-right: 5px;
    border: 0;
    border-radius: 50%;
    background-color: #e6e6e6;
}
.u-info .u-photo img,
.info-box .u-photo img { display: block; font-size: 0; width: 100%; max-width: 100%; }
.item .info-box .line-name { margin-top: 4px; font-size: 14px; }
.item .total-box > div { font-size: 12px; color: #666; margin-left: 10px; line-height: 28px; }
.item .total-box .km_ > strong { font-size: 18px; color: #333; font-weight: normal; }
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
// 删除按钮
.line-con .list-box .item .delete-btn {
    position: absolute;
    right: 10px;
    bottom: 70px;
    margin: 0;
    margin-right: 0;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.6);
    width: 28px;
    text-align: center;
    height: 28px;
    line-height: 28px;
    border: 1px solid #e2e2e2;
    border-radius: 2px;
}
// 收藏星星
.line-con .list-box .item .icon-start {
    float: right;
    margin-right: 0;
    font-size: 16px;
    color: #ff5722;
}
.line-con .list-box .item .icon-start::before { color: inherit; }

// 单选框
.input-checkbox {
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 5px;
    margin-right: 10px;
    border: 2px solid #ccc;
    border-radius: 2px;
}
label.input-checkbox.icon-ok::before {
    content: "\e601";
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 16px;
    margin-left: -1px;
    margin-top: -6px;
    color: transparent !important;
}
.line-con input[type='checkbox']:checked + label.input-checkbox {
    background-color: #58a8de;
    border-color: #58a8de;
}
.line-con input[type='checkbox']:checked + label.icon-ok::before { color: #fff !important; }

</style>
