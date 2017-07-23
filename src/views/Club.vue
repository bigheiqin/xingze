<template>
    <div class="page page-club">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{showBack: false}">骑行俱乐部</x-header>
            </header>
            <div class="main_bd">
                <!--搜索框-->
                <header class="content-hd clearfix">
                    <Search :searchObj="searchObj"></Search>
                </header>
                <!--列表-->
                <div class="content-bd position_r" v-show="!searchObj.Boolean">
                    <div style="">
                        <!--本地热门俱乐部-->
                        <div class="list-box hot-list">
                            <h3 class="titel_ iconfont icon-hot" style="margin-top: 0;"><span class="float_r">查看更多></span>本地热门俱乐部</h3>
                            <ul>
                                <li class="item" @click.stop="linkFun('/club/info')">
                                    <!--背景图片形式 style="background-image: url('../../assets/images/photo.jpg')" -->
                                    <div class="float_l u-photo">photo</div>
                                    <div class="float_r hot-num">13219℃</div>
                                    <div class="overflow_h u-text">
                                        <p class="u-name">Nothing's real</p>
                                        <div class="more-info">
                                            <span class="u-city">南宁市</span>
                                            <span class="u-team ">吻食小分队</span>
                                            <span class="team-id ">#666</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="item" @click.stop="linkFun('/club/info')">
                                    <div class="float_l u-photo">photo</div>
                                    <div class="float_r hot-num">0℃</div>
                                    <div class="overflow_h u-text">
                                        <p class="u-name">Nothing's real</p>
                                        <div class="more-info">
                                            <span class="u-city">南宁市</span>
                                            <span class="u-team ">吻食小分队</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="item" @click.stop="linkFun('/club/info')">
                                    <div class="float_l u-photo">photo</div>
                                    <div class="float_r hot-num">0℃</div>
                                    <div class="overflow_h u-text">
                                        <p class="u-name">Nothing's real</p>
                                        <div class="more-info">
                                            <span class="u-city">南宁市</span>
                                            <span class="u-team ">吻食小分队</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!--附近俱乐部-->
                        <div class="list-box nearby-list">
                            <h3 class="titel_ iconfont icon-nearby"><span class="float_r">查看更多></span>附近俱乐部</h3>
                            <ul>
                                <li class="item" @click.stop="linkFun('/club/info')">
                                    <!--背景图片形式 style="background-image: url('../../assets/images/photo.jpg')" -->
                                    <div class="float_l u-photo">photo</div>
                                    <div class="float_r hot-num">13219℃</div>
                                    <div class="overflow_h u-text">
                                        <p class="u-name">Nothing's real</p>
                                        <div class="more-info">
                                            <span class="u-city">南宁市</span>
                                            <span class="u-team ">吻食小分队</span>
                                            <span class="team-id ">#666</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="item" @click.stop="linkFun('/club/info')">
                                    <div class="float_l u-photo">photo</div>
                                    <div class="float_r hot-num">0℃</div>
                                    <div class="overflow_h u-text">
                                        <p class="u-name">Nothing's real</p>
                                        <div class="more-info">
                                            <span class="u-city">南宁市</span>
                                            <span class="u-team ">吻食小分队</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="item" @click.stop="linkFun('/club/info')">
                                    <div class="float_l u-photo">photo</div>
                                    <div class="float_r hot-num">0℃</div>
                                    <div class="overflow_h u-text">
                                        <p class="u-name">Nothing's real</p>
                                        <div class="more-info">
                                            <span class="u-city">南宁市</span>
                                            <span class="u-team ">吻食小分队</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!--全国热门俱乐部-->
                        <div class="list-box country-list">
                            <h3 class="titel_ iconfont icon-country"><span class="float_r">查看更多></span>全国热门俱乐部</h3>
                            <ul>
                                <li class="item" @click.stop="linkFun('/club/info')">
                                    <!--背景图片形式 style="background-image: url('../../assets/images/photo.jpg')" -->
                                    <div class="float_l u-photo">photo</div>
                                    <div class="float_r hot-num">13219℃</div>
                                    <div class="overflow_h u-text">
                                        <p class="u-name">Nothing's real</p>
                                        <div class="more-info">
                                            <span class="u-city">南宁市</span>
                                            <span class="u-team ">吻食小分队</span>
                                            <span class="team-id ">#666</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="item" @click.stop="linkFun('/club/info')">
                                    <div class="float_l u-photo">photo</div>
                                    <div class="float_r hot-num">0℃</div>
                                    <div class="overflow_h u-text">
                                        <p class="u-name">Nothing's real</p>
                                        <div class="more-info">
                                            <span class="u-city">南宁市</span>
                                            <span class="u-team ">吻食小分队</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="item" @click.stop="linkFun('/club/info')">
                                    <div class="float_l u-photo">photo</div>
                                    <div class="float_r hot-num">0℃</div>
                                    <div class="overflow_h u-text">
                                        <p class="u-name">Nothing's real</p>
                                        <div class="more-info">
                                            <span class="u-city">南宁市</span>
                                            <span class="u-team ">吻食小分队</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
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
                <tabbar-item  show-dot class="user_ nav-item" link="/user">
                    <span slot="icon" class="iconfont icon-luxian"></span>
                    <span slot="label">我的</span>
                </tabbar-item>
                <tabbar-item class="find_ nav-item">
                    <span slot="icon" class="iconfont icon-banshizhinan"></span>
                    <span slot="label">发现</span>
                </tabbar-item>
                <tabbar-item class="line_ nav-item" link="/line">
                    <span slot="icon" class="iconfont icon-dili"></span>
                    <span slot="label">路书</span>
                </tabbar-item>
                <tabbar-item selected class="club_ nav-item" link="/club">
                    <span slot="icon" class="iconfont icon-julebu"></span>
                    <span slot="label">俱乐部</span>
                </tabbar-item>
            </tabbar>
        </div>
    </div>
</template>
<script>
import Search from '@/components/Search'
import { XHeader, Tabbar, TabbarItem, Group, CellBox } from 'vux'
export default {
    components: {
        XHeader,
        Tabbar,
        TabbarItem,
        Search,
        Group,
        CellBox
    },
    data () {
        return {
            'searchObj': {
                'Name': 'club',
                'Boolean': false
            }
        }
    },
    mounted () {
    },
    methods: {
        linkFun (link) {
            this.$router.push({ name: link })
        },
        showFun () {
            // 此处直接点击输入框触发，与line不同，不能使用取反
            this.searchObj.Boolean = !this.searchObj.Boolean
        }
    }
}
</script>
<style lang="less" scoped>
.page-club .content-hd {
    height: 46px;
}
.page-club .content-bd {
    height: 100%;
    z-index: 9999;
    background-color: #EFEFF4;
}
// 列表
.list-box > h3.titel_ {
    font-size: 14px;
    padding: 10px;
    font-weight: normal;
    background-color: #fff;
    margin-top: 10px;
}
.list-box > h3.titel_::before { margin-right: 6px; }
.list-box > h3.titel_ >span { color: #999 }

.list-box > ul li.item {
    display: block;
    padding: 14px 10px;
    background-color: #fff;
    border-top: 1px solid #f2f2f2;
}
.list-box > ul li.item:active {
    background-color: #f2f2f2;
}

.list-box .u-text .u-name { font-size: 16px; color: #333; }
.list-box li .more-info > span {
    color: #999;
    font-size: 12px;
}
.more-info > span.u-team,
.more-info > span.team-id { margin-left: 10px; }

.list-box  li.item .u-photo {
    width: 46px;
    height: 46px;
    margin-right: 10px;
    border-radius: 0;
    overflow: hidden;
    font-size: 0;

    background-color: #f2f2f2;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
// 热度
.hot-num {
    margin-top: 12px;
    font-size: 14px;
    color: #f04c5b;
}
.country-list li:last-of-type { margin-bottom: 58px; }
</style>
