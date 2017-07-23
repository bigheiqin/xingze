<template>
    <div class="page page-clube">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">俱乐部详情</x-header>
            </header>
            <div class="main_bd">
                <div class="content-box club-info">
                    <div>
                         <group gutter="0" class="club-hd clearfix">
                            <cell-box>
                                <div class="club-logo float_l"></div>
                                <div class="club-img float_r"></div>
                                <div class="club-name">
                                    <p class="title_">青环线</p>
                                    <p class="more_">南宁市<span>ID: 7</span></p>
                                </div>
                            </cell-box>
                        </group>
                        <group gutter="10px" class="club-total">
                            <cell title="南宁市排名">
                                <div slot="value">2</div>
                            </cell>
                            <cell title="总里程">
                                <div slot="value" class="fontColor_bold">635015km</div>
                            </cell>
                            <cell title="年热度">
                                <div slot="value" class="fontColor_hot">57768℃</div>
                            </cell>
                            <cell title="月热度">
                                <div slot="value" class="fontColor_hot">3751℃</div>
                            </cell>
                            <cell title="人均月贡献热度">
                                <div slot="value" class="fontColor_hot">16℃</div>
                            </cell>
                        </group>
                        <group gutter="10px" class="club-member">
                            <cell-box>
                                <p class="float_l titel_">队长</p>
                                <div class="more-right float_r">
                                    <span class="u-photo"></span>净化
                                </div>
                            </cell-box>
                            <cell-box class="member-total">
                                <p class="float_l titel_">队友</p>
                                <div class="more-right float_r">
                                    <div class="photo-list">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span class="total_num">693</span>
                                    </div>
                                </div>
                            </cell-box>
                            <cell-box>
                                <p class="titel_">口号</p>
                                <div class="club-slogan">该俱乐部暂无口号</div>
                            </cell-box>
                        </group>
                    </div>
                </div>
                <footer class="bottom_ft" id="add-btn">申请加入</footer>
            </div>
        </div>
    </div>
</template>
<script>
import {
    XHeader, XInput, Group, Cell, CellBox
} from 'vux'
export default {
    components: {
        XHeader, XInput, Group, Cell, CellBox
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
.fontColor_hot { color: #f92626; }
.fontColor_bold { color: #333; }
.page-clube .club-info {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 50px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
}
.page-clube .club-info > div { background-color: #f2f2f2; }

.bottom_ft {
    position: absolute;
    left: 0; right: 0; top: auto; bottom: 0;
    z-index: 999;
    width: 100%; height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background-color: #1b92c8;
}

.club-info .weui-cell {
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 14px
}
.club-info .club-slogan {
    padding-top: 10px;
}
// club-hd
.club-info .club-hd .club-logo{
    width: 60px;
    height: 60px;
    margin-right: 15px;
    background-color: #f2f2f2;
}
.club-info .club-hd .club-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    outline: 0; border: 0;
    background-color: #f2f2f2;
    margin-right: -10px;
}
.club-info .club-name > .more_ {
    color: #888;
    font-size: 12px;
    margin-top: 5px;
}
.club-info .more_ > span { margin-left: 15px; }


.u-photo {
    position: absolute;
    top: 50%; right: 40px;
    width: 36px; height: 36px;
    overflow: hidden;
    border-radius: 50%;
    background-color: #f2f2f2;
    transform: translateY(-50%); 
}
.member-total .photo-list {
    position: absolute;
    top: 50%; right: 0;
    transform: translateY(-50%); 
    overflow: hidden;
}
.member-total .photo-list > span {
    float: left;
    width: 36px; height: 36px;

    border-radius: 50%;
    background-color: #f2f2f2;
    margin-left: 10px;
}
.photo-list span.total_num {
    background-color: #555;
    color: #fff;
    line-height: 36px;
    text-align: center;
}
</style>
<style>
.page-clube .club-info .vux-cell-box > div { padding-bottom: 0; }
.club-info .club-member > div::after { display: none; }
.club-member .weui-cell > div { overflow: initial; padding: 2px 0 !important;}
</style>

