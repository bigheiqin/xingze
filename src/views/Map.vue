<template>
<div class="page page-map">
    <div class="page-content">
        <header class="top_hd"></header>
        <div class="main_bd">
            <baidu-map class="bm-view"
                :center='this.center'
                :zoom="18"
                mapType="BMAP_NORMAL_MAP"
                @ready="test()"
            >
                <!--地图类型-->
                <bm-map-type 
                 :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" 
                 anchor="BMAP_ANCHOR_TOP_RIGHT"
                 type="BMAP_MAPTYPE_CONTROL_HORIZONTAL"
                 ></bm-map-type>
                <!--缩放-->
                <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" ></bm-navigation>
                <!--坐标点-->
                <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
            </baidu-map>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'  // vue百度地图组件
Vue.use(BaiduMap, {
  ak: 'VGmV0F5n96wZ8yFGTVUNGocpbMH6mjmX'
})
export default {
    data() {
        return {
            center: {lng: 108.294956, lat: 22.844252}
        }
    },
    mounted() {
    },
    methods: {
        test() {
            let _this = this
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    _this.center.lng = position.coords.longitude
                    _this.center.lat = position.coords.latitude
                    // position.coords.longitude
                    console.log(position)
                })
            } else { alert("该浏览器不支持获取地理位置。") }
        }
    }
}
</script>

<style lang="less" scoped>
.page-map .main_bd { top: 0; }

// 百度地图
.page-map .bm-view { width: 100%; height: 100%; }
</style>
