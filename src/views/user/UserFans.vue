<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">
                    <tab :line-width="0" class="nav-tab" defaultColor="#fff" active-color="#000">
                        <tab-item selected class="navTab-item" @click.native="getTabIndexFun(0)">粉丝</tab-item>
                        <tab-item class="navTab-item" @click.native="getTabIndexFun(1)" >关注</tab-item>
                    </tab>
                </x-header>
            </header>
            <div class="main_bd">
                <div class="content">
                    <!--粉丝-->
                    <div class="u-fans list-box" v-show="tabIndex === 0">
                        粉丝列表
                    </div>
                    <!--关注-->
                    <div class="u-attention list-box" v-show="tabIndex === 1">
                        <ul>
                            <li class="item" @click.stop="linkFun('/user/infoPage')">
                                <!--背景图片形式 style="background-image: url('../../assets/images/photo.jpg')" -->
                                <div class="float_l u-photo">photo</div>
                                <div class="float_r attention_btn attention_ok iconfont icon-ok">已关注</div>
                                <div class="overflow_h u-text">
                                    <p class="u-name">Nothing's real</p>
                                    <div class="more-info">
                                        <span class="u-city">南宁市</span>
                                        <span class="u-team ">吻食小分队</span>
                                    </div>
                                </div>
                            </li>
                            <li class="item" @click.stop="linkFun('/user/infoPage')">
                                <div class="float_l u-photo">photo</div>
                                <div class="float_r attention_btn attention_not iconfont icon-not">关注</div>
                                <div class="overflow_h u-text">
                                    <p class="u-name">Nothing's real</p>
                                    <div class="more-info">
                                        <span class="u-city">南宁市</span>
                                        <span class="u-team ">吻食小分队</span>
                                    </div>
                                </div>
                            </li>
                            <li class="item" @click.stop="linkFun('/user/infoPage')">
                                <div class="float_l u-photo">photo</div>
                                <div class="float_r attention_btn attention_not iconfont icon-not">关注</div>
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
</template>
<script>
import {
    XHeader, XButton, XInput, XTextarea,
    Group, XDialog, Cell,
    Tab, TabItem
} from 'vux'
export default {
    components: {
        XHeader,
        XButton,
        XInput,
        XTextarea,
        Group,
        XDialog,
        Cell,
        Tab,
        TabItem
    },
    data () {
        return {
            'tabIndex': 0
        }
    },
    methods: {
        linkFun (link) {
            this.$router.push({ name: link })
        },
        getTabIndexFun (index_) {
            this.tabIndex = index_
        }
    },
    mounted () {
    }
}
</script>
<style lang="less" scoped>

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

// 列表
.list-box > ul li.item {
    display: block;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
}

.list-box .u-text .u-name { font-size: 14px; color: #333; }
.list-box li .more-info > span {
    color: #999;
    font-size: 12px;
}
.more-info > span.u-team { margin-left: 30px; }

.list-box  li.item .u-photo {
    width: 46px;
    height: 46px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
    font-size: 0;

    background-color: #f2f2f2;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.list-box  li.item .attention_btn  {
    width: 62px;
    height: 26px; line-height: 26px;
    color: #fff;
    font-size: 12px;
    padding: 1px 6px 0;
    margin-top: 10px;
    background-color: #59add2;
}
.list-box  li.item .attention_btn::before { margin-right: 2px; }
.list-box  li.item .attention_ok {
    background-color: #ccc;
}
</style>

