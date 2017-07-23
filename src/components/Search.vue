<template>
    <div class="page page-search">
        <div class="search-box">
            <search
            :placeholder="placeholder"
            @on-focus="onFocus"
            @on-cancel="onCancel"
            ref="search">
                <div class="content search-list clearfix">
                    <!--搜索俱乐部-->
                    <div  v-show="searchObj.Name === 'club'">
                        <div class="search-item ">
                            <span class="iconfont icon-hot"></span>
                            <p>本地热门</p>
                        </div>
                        <div class="search-item">
                            <span class="iconfont icon-nearby"></span>
                            <p>附近</p>
                        </div>
                        <div class="search-item">
                            <span class="iconfont icon-country"></span>
                            <p>全国热门</p>
                        </div>
                    </div>
                    <!--搜索路书-->
                    <div  v-show="searchObj.Name === 'line'">
                        <p class="text_c" style="color: #ccc;">此处为路书搜索</p>
                    </div>
                </div>
            </search>
        </div>
    </div>
</template>

<script>
import {
    Search
} from 'vux'
// const SEARCH_ROUTER = ['line', 'club']
export default {
    components: {
        Search
    },
    data () {
        return {
            'url_': '',
            'placeholder': '搜索编号、名称、关键字'
        }
    },
    props: ['searchObj'],
    beforeMount() {
        if (this.searchObj.Name === 'line') { this.placeholder = "名称、编号、创建人搜索" }
    },
    mounted() {
        this.url_ = window.location.href
    },
    watch: {
        // 针对了路书的搜索
        "searchObj.Boolean": function(val, oldVal) {
            if (this.searchObj.Name === 'line') {
                val && this.$refs.search.setFocus()
            }
        },
        deep: true
    },
    methods: {
        onFocus() {
            window.location.href = this.url_ + "#search"
            document.querySelector('.page-search').style.zIndex = 99999
            if (this.searchObj.Name === "club" && this.searchObj.Boolean === false) {
                this.$parent.showFun()
            }
        },
        onCancel() {
            window.location.href = this.url_
            document.querySelector('.page-search').style.zIndex = 'auto'
            // 子组件使用 $parent触发父组件事件
            if (this.searchObj.Name === "line") {
                this.$parent.searchFun()
                return
            } else if (this.searchObj.Name === "club") {
                this.$parent.showFun()
                return
            }
        }
    }
}
</script>

<style lang="less">

.page-search .weui-search-bar_focusing {
    background-color: #000;
}
.page-search .weui-search-bar_focusing { margin-top: -1px; padding-top: 12px; padding-bottom: 10px; }
.page-search .weui-search-bar_focusing > form { border-radius: 6px; }
.page-search .weui-search-bar_focusing .weui-search-bar__cancel-btn { color: #fff; }
.page-search .search-list {
    padding: 40px 10px 30px;
}
.page-search .search-list .search-item {
    float: left;
    width: 33.33%;

    text-align: center;
}
.search-list .search-item > span {
    display: block;
    width: 60px; height: 60px;
    margin: 0 auto 10px;
    padding: 10px;
    border-radius: 50%;
    background-color: #f2f2f2;
    
    font-size: 30px;
    color: #888;
}
.search-list .search-item > p {
    color: #333;
    font-size: 14px;
}
</style>
