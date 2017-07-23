<template>
    <div class="page page-line">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">路书详情</x-header>
            </header>
            <div class="main_bd">
                <div class="content">
                    <div class="map-box vux-1px-tb">
                        <header class="map-hd vux-1px-b">
                            <div class="line-type float_l iconfont icon-qixing"></div>
                            <div class="line-name float_l">香炉岭</div>
                            <div class="line-id float_r">#47150</div>
                        </header>
                        <div class="map-info">
                            <div class="total-info clearfix">
                                <ul class="clearfix">
                                    <li class="item">
                                        <span>6.38km</span>
                                        <p>里程</p>
                                    </li>
                                    <li class="item">
                                        <span>358m</span>
                                        <p>累计爬升</p>
                                    </li>
                                    <li class="item">
                                        <span>2.259%</span>
                                        <p>平均坡度</p>
                                    </li>
                                    <li class="item">
                                        <span>144m</span>
                                        <p>海拔落差</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="map_bg_img">
                                <img src="../../assets/images/lushu_bg.jpg" alt="">
                            </div>
                        </div>
                        <footer class="map-ft">
                            <ul class="clearfix">
                                <li class="item vux-1px-r"><span class="iconfont icon-view"></span>查看</li>
                                <li class="item vux-1px-r"><span class="iconfont icon-ditu"></span>使用</li>
                                <li class="item"><span class="iconfont icon-start"></span>已收藏(4)</li>
                            </ul>
                        </footer>
                    </div>
                    <div class="comment-box">
                        <header class="author-con clearfix">
                            <div class="u-photo float_l"></div>
                            <div class="text_">
                                <div class="u-name">57318藏服务站</div>
                                <div class="dec-con">暂无备注</div>
                            </div>
                        </header>
                        <div class="comment-con">
                            <p class="total-comment">44人评论</p>
                            <ul class="list-comment">
                                <li class="item-comment vux-1px-t">
                                    <div class="hd">
                                        <div class="u-photo float_l"></div>
                                        <div class="comment-btn iconfont icon-message float_r"></div>
                                        <div class="text_ comment-author overflow_h">
                                            <div class="u-name">小李子</div>
                                            <div class="comment-time">2017-07-09 17:52</div>
                                        </div>
                                    </div>
                                    <div class="bd">
                                        <div class="comment-text">那个没得我们重庆的得哦，重庆的爬坡赛段很多</div>
                                    </div>
                                </li>
                                <li class="item-comment vux-1px-t">
                                    <div class="hd">
                                        <div class="u-photo float_l"></div>
                                        <div class="comment-btn iconfont icon-message float_r"></div>
                                        <div class="text_ comment-author overflow_h">
                                            <div class="u-name">小李子</div>
                                            <div class="comment-time">2017-07-09 17:52</div>
                                        </div>
                                    </div>
                                    <div class="bd">
                                        <div class="comment-text">那个没得我们重庆的得哦，重庆的爬坡赛段很多</div>
                                    </div>
                                </li>
                                <li class="item-comment vux-1px-t">
                                    <div class="hd">
                                        <div class="u-photo float_l"></div>
                                        <div class="comment-btn iconfont icon-message float_r"></div>
                                        <div class="text_ comment-author overflow_h">
                                            <div class="u-name">小李子</div>
                                            <div class="comment-time">2017-07-09 17:52</div>
                                        </div>
                                    </div>
                                    <div class="bd">
                                        <div class="comment-text">那个没得我们重庆的得哦，重庆的爬坡赛段很多</div>
                                    </div>
                                </li>
                                <li class="item-comment vux-1px-t">
                                    <div class="hd">
                                        <div class="u-photo float_l"></div>
                                        <div class="comment-btn iconfont icon-message float_r"></div>
                                        <div class="text_ comment-author overflow_h">
                                            <div class="u-name">小李子</div>
                                            <div class="comment-time">2017-07-09 17:52</div>
                                        </div>
                                    </div>
                                    <div class="bd">
                                        <div class="comment-text">那个没得我们重庆的得哦，重庆的爬坡赛段很多</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--评论输入框-->
                <div class="comment-form">
                    <group gutter="0" class="comment-input overflow_h">
                        <x-input class="reply-input"
                            v-model="replyInputObj.content"
                            :class="{'bColor': isOnFous}"
                            placeholder="添加评论.."
                            :show-clear="false"
                            @on-blur="onBlurFun"
                            @on-focus="onFocusFun"
                            @on-change="onChangeFun($event)">
                            <div slot="label" class="img-icon" @click="upImgBtnFun">
                                <span class="num">11</span>
                            </div>
                            <x-button 
                                v-show="isOnFous || isInputLength"
                                slot="right"
                                type="primary" class="submit-btn border0"
                                :class="{'btColor': isInputLength}" mini>发送</x-button>
                        </x-input>
                    </group>
                    <div class="comment-img clearfix" v-show="isImage">
                        <ul class="img-list clearfix">
                            <li class="item"><div class="img_bg"></div></li>
                            <!-- <li class="item"><div class="img_bg"></div></li>
                            <li class="item"><div class="img_bg"></div></li>
                            <li class="item"><div class="img_bg"></div></li>
                            <li class="item"><div class="img_bg"></div></li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    XHeader, Tab, TabItem,
    Masker, Divider,
    Tabbar, TabbarItem,
    Sticky, Swiper, SwiperItem,
    Checker, Group, XInput, XButton
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
        XInput,
        Group,
        XButton
    },
    data() {
        return {
            'isOnFous': false,
            'isInputLength': false, // 输入框内容长度
            'isImage': false, // 显示隐藏上传图片
            'replyInputObj': {
                'id': '', // 评论id
                'authorId': '', // 评论人id
                'author': '', // 评论人
                'content': '', // 评论内容
                'replyId': 0, // 被评论id
                'replyAuthorId': '', // 被评论人id
                'replyAuthor': '', // 被评论人
                'replyTitem': 1499847787 // 评论时间
            }
        }
    },
    mounted() {
    },
    methods: {
        // 获取焦点
        onFocusFun() {
            this.isOnFous = true
            this.isImage = false
        },
        // 失去焦点
        onBlurFun() {
            this.isOnFous = false
        },
        onChangeFun(event) {
            // 精辟
            // (event.length > 0) && (this.isInputLength = true)
            event.length || (this.isInputLength = false)
            event.length && (this.isInputLength = true)
        },
        upImgBtnFun() {
            this.isImage = !this.isImage
        }
    }
}
</script>

<style lang="less" scoped>

.page-line .main_bd { overflow-y: hidden }  // 为了底部保持固定底部
.page-line .main_bd > .content {
    position: relative;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.main_bd .comment-box { background-color: #f2f2f2; }
// 头部
.map-box .map-hd {
    padding: 0 8px;
    width: 100%;
    height: 30px;
    line-height: 30px;
}
.map-box .map-hd > .line-type { margin-right: 10px; }
.map-box .map-hd > .line-name { font-size: 14px; }
.map-box .map-hd > .line-id { font-size: 12px; color: #888 }

// 统计信息
.map-info .total-info {
    padding: 10px;
}
.total-info li.item {
    float: left;
    width: 25%;
    font-size: 12px;
    color: #888;
    text-align: center;
    list-style: none;
    line-height: 1.2;
}
.map-info .map_bg_img {
    position: relative;
    width: 100%;
    background-color: #f2f2f2;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.map-info .map_bg_img > img {
    position: relative;
    left: 0; top: 0;
    bottom: 0; right: 0;
    display: block;
    width: 100%;
    max-height: 100%;
}

// 地图底部
.map-ft  ul { padding: 10px 0; }
.map-ft li.item {
    float: left;
    width: 33.33%;
    list-style: none;
    line-height: 1;
    font-size: 14px;
    text-align: center;
    color: #555;
}
.map-ft li.item .iconfont {
    display: inline-block;
    font-size: 20px;
    margin-right: 6px;
    vertical-align: middle;
}
.map-ft li.item .iconfont.icon-start { color: #ff5722; }

// 作者内容
.comment-box > .author-con {
    padding: 15px 10px;
    margin-bottom: 5px;
    background-color: #fff;
}
.author-con .u-photo,
.item-comment .u-photo {
    width: 36px;
    height: 36px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
    font-size: 0;
    background-color: #f2f2f2;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.author-con .text_,
.comment-author {
    position: relative;
    width: auto;
    min-height: 38px;
    font-size: 13px;
    line-height: 1.4;
    float: none;
    overflow: hidden;
}
.author-con .text_ > .dec-con { margin-top: 4px;  max-height: 34px; }
.author-con .text_ > .dec-con,
.comment-author > .comment-time {
    color: #888;
    font-size: 12px;
}

// 评论
.comment-box > .comment-con { background-color: #fff; }
.comment-con .item-comment {
    padding: 15px;
    list-style-type: none;
}
.comment-con .item-comment:last-of-type { margin-bottom: 50px; }
.total-comment {
    padding: 5px 10px;
    font-size: 13px;
}
.item-comment > .hd {
    width: 100%;
    height: 38px;
    line-height: 38px;
}
.comment-author > .comment-time {
    position: absolute;
    bottom: 0;
    font-size: 10px; 
}
.comment-text {
    margin-top: 5px;
    margin-left: 6px;
    color: #333;
    font-size: 12px;
}
.item-comment .comment-btn {
    padding: 4px;
    line-height: 1;
    color: #ccc;
}

// 底部评论
.main_bd > .comment-form {
    position: absolute;
    bottom: 0; top:  auto;
    left: 0; right: 0;
    z-index: 9999;
    background-color: #fff;
}
.main_bd > .comment-form .reply-input {
    padding: 6px 8px;
    line-height: 1;
}
.reply-input .img-icon {
    position: relative;
    width: 30px;
    height: 30px;
    background-image: url('../../assets/images/upImage_bg.png');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.reply-input .img-icon > span.num {
    position: absolute;
    top: 0;
    right: -2px;
    width: 14px; height: 14px;
    line-height: 15px;
    color: #fff;
    text-align: center;
    font-size: 10px;
    background-color: rgba(255, 0, 0, 0.61);
    border-radius: 50%;
}
.reply-input .submit-btn {
   color: #999;
   font-size: 14px;
   padding: 0 .8em;
   background-color: #f9f9f9;
   outline: 0;
   border-radius: 2px;
}
.reply-input .submit-btn.btColor { background-color: #58a8de; color: #fff }
.reply-input .submit-btn:active { background-color: #58a8de; }
// 上传图片
.comment-form .img-list {
    // 2px 10px 10px
    width: auto;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    font-size: 0;
    margin-left: 10px;
}

.comment-form .img-list li.item {
    position: relative;
    display: inline-block;
    width: 25%;
    padding-top: 25%;
    margin-top: 10px;
    list-style-type: none;
}
.img-list li.item .img_bg {
    display: block;
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 999;
    width: auto;
    max-width: 100%;
    margin-right: 10px;
    margin-bottom: 10px;

    background-color: #f9f9f9;
    background-image: url('../../assets/images/upImage_btn.png');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
<style>
.page-line .reply-input > .weui-cell__bd {
    margin: 0 6px;
    padding: 6px 8px;
    font-size: 14px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #f9f9f9;
}
.page-line .reply-input.bColor > .weui-cell__bd { border-color: #58a8de  }
</style>
