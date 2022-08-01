<template>
    <div>
        <van-nav-bar :title="houseInfo.title" left-arrow @click-left="onClickLeft" />

        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item, index in houseInfo.houseImg" :key="index">
                <template #default>
                    <img :src="`http://liufusong.top:8080${item}`" alt="" style="width:375px;height:250px" />
                </template>
            </van-swipe-item>
        </van-swipe>

        <div class="HouseDetail_info__w_ymp">
            <h3 class="HouseDetail_infoTitle__E1ASO">舒服便宜</h3>
            <div class="am-flexbox HouseDetail_tags__3VXf3 am-flexbox-align-center">
                <div class="am-flexbox-item"><span class="HouseDetail_tag__o8UuR HouseDetail_tag1__2-k0O">近地铁</span>
                </div>
            </div>
            <div class="am-flexbox HouseDetail_infoPrice__3SZhW am-flexbox-align-center">
                <div class="am-flexbox-item HouseDetail_infoPriceItem__Rxzot">
                    <div>{{ houseInfo.price }}<span class="HouseDetail_month__uBAXz">/月</span></div>
                    <div>租金</div>
                </div>
                <div class="am-flexbox-item HouseDetail_infoPriceItem__Rxzot">
                    <div>{{ houseInfo.roomType }}</div>
                    <div>房型</div>
                </div>
                <div class="am-flexbox-item HouseDetail_infoPriceItem__Rxzot">
                    <div>{{ houseInfo.size }}</div>
                    <div>面积</div>
                </div>
            </div>
            <div class="am-flexbox HouseDetail_infoBasic__3prns am-flexbox-align-start">
                <div class="am-flexbox-item">
                    <div><span class="HouseDetail_title__iGpj_">装修：</span>精装</div>
                    <div><span class="HouseDetail_title__iGpj_">楼层：</span>低楼层</div>
                </div>
                <div class="am-flexbox-item">
                    <div><span class="HouseDetail_title__iGpj_">朝向：</span>{{ houseInfo.oriented }}</div>
                    <div><span class="HouseDetail_title__iGpj_">类型：</span>普通住宅</div>
                </div>
            </div>
        </div>

        <div class="HouseDetail_mapTitle__3reEo">小区：<span>{{ houseInfo.community }}</span></div>

        <!-- 房屋配套 -->
        <div class="HouseDetail_about__1W1Px">
            <div class="HouseDetail_houseTitle__3dg6k">房屋配套</div>
            <ul class="HousePackage_root__1MUw0">
                <li class="HousePackage_item__2q4AQ ">
                    <p><i class="iconfont icon-wardrobe HousePackage_icon__2hT31"></i></p>衣柜
                </li>
                <li class="HousePackage_item__2q4AQ ">
                    <p><i class="iconfont icon-wash HousePackage_icon__2hT31"></i></p>洗衣机
                </li>
                <li class="HousePackage_item__2q4AQ ">
                    <p><i class="iconfont icon-gas HousePackage_icon__2hT31"></i></p>天然气
                </li>
                <li class="HousePackage_item__2q4AQ ">
                    <p><i class="iconfont icon-Heat HousePackage_icon__2hT31"></i></p>暖气
                </li>
                <li class="HousePackage_item__2q4AQ ">
                    <p><i class="iconfont icon-heater HousePackage_icon__2hT31"></i></p>热水器
                </li>
                <li class="HousePackage_item__2q4AQ ">
                    <p><i class="iconfont icon-broadband HousePackage_icon__2hT31"></i></p>宽带
                </li>
            </ul>
        </div>

        <!-- 房源概括 -->
        <div class="HouseDetail_set__26npJ">
            <div class="HouseDetail_houseTitle__3dg6k">房源概况</div>
            <div>
                <div class="HouseDetail_contact__O_lsw">
                    <div class="HouseDetail_user__TZj3w"><img src="http://liufusong.top:8080/img/avatar.png" alt="头像">
                        <div class="HouseDetail_useInfo__FrBlz">
                            <div>王女士</div>
                            <div class="HouseDetail_userAuth__Xr6gY"><i class="iconfont icon-auth"></i>已认证房主</div>
                        </div>
                    </div><span class="HouseDetail_userMsg__3mcRl">发消息</span>
                </div>
                <div class="HouseDetail_descText__2JsQA">1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
                    2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。 3.人车分流，环境优美。 4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。</div>
            </div>
        </div>

        <!-- 猜你喜欢 -->
        <div class="HouseDetail_recommend__1L7WT">
            <div class="HouseDetail_houseTitle__3dg6k">猜你喜欢</div>
            <div class="HouseDetail_items__1nCaB">
                <div class="HouseItem_house__29lYP">
                    <div class="HouseItem_imgWrap__3ZPoa"><img class="HouseItem_img__1BaJK"
                            src="http://liufusong.top:8080/img/message/1.png" alt=""></div>
                    <div class="HouseItem_content__1gVhj">
                        <h3 class="HouseItem_title__2dXar">安贞西里 3室1厅</h3>
                        <div class="HouseItem_desc__5-mp4">72.32㎡/南 北/低楼层</div>
                        <div><span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD">随时看房</span></div>
                        <div class="HouseItem_price__1_r8v"><span class="HouseItem_priceNum__RGpsE">4500</span> 元/月
                        </div>
                    </div>
                </div>
                <div class="HouseItem_house__29lYP">
                    <div class="HouseItem_imgWrap__3ZPoa"><img class="HouseItem_img__1BaJK"
                            src="http://liufusong.top:8080/img/message/2.png" alt=""></div>
                    <div class="HouseItem_content__1gVhj">
                        <h3 class="HouseItem_title__2dXar">天居园 2室1厅</h3>
                        <div class="HouseItem_desc__5-mp4">83㎡/南/高楼层</div>
                        <div><span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD">近地铁</span></div>
                        <div class="HouseItem_price__1_r8v"><span class="HouseItem_priceNum__RGpsE">7200</span> 元/月
                        </div>
                    </div>
                </div>
                <div class="HouseItem_house__29lYP">
                    <div class="HouseItem_imgWrap__3ZPoa"><img class="HouseItem_img__1BaJK"
                            src="http://liufusong.top:8080/img/message/3.png" alt=""></div>
                    <div class="HouseItem_content__1gVhj">
                        <h3 class="HouseItem_title__2dXar">角门甲4号院 1室1厅</h3>
                        <div class="HouseItem_desc__5-mp4">52㎡/西南/低楼层</div>
                        <div><span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD">集中供暖</span></div>
                        <div class="HouseItem_price__1_r8v"><span class="HouseItem_priceNum__RGpsE">4300</span> 元/月
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部按钮 -->
        <div class="am-flexbox HouseDetail_fixedBottom__3qos1 am-flexbox-align-center">
            <div class="am-flexbox-item"><img src="http://liufusong.top:8080/img/unstar.png"
                    class="HouseDetail_favoriteImg__hAmZ4" alt="收藏"><span class="HouseDetail_favorite__3hYRk"
                    @click="collection">收藏</span>
            </div>
            <div class="am-flexbox-item">在线咨询</div>
            <div class="am-flexbox-item"><a href="tel:400-618-4000" class="HouseDetail_telephone__yGu1I">电话预约</a></div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'DetailsList',
    data() {
        return {
            houseInfo: {},

        }
    },
    async mounted() {
        console.log(this.houseInfo);
        let result = await this.$API.reqGetHouseInfo(this.$route.query.id)
        console.log(result);
        this.houseInfo = result.data.body
    },
    methods: {
        onClickLeft() {
            // console.log(111);
            this.$router.push('/layout/search')
        },

        //添加收藏
        async collection() {
            try {
                // console.log(111);
                let result = await this.$API.reqCollection(this.$route.query.id)
                console.log(result);
                this.$toast.success('添加收藏成功');
            } catch (error) {
                this.$toast.fail('添加收藏失败');
            }
        }
    }
}
</script>

<style lang="less" scoped>
:deep(.van-nav-bar__content) {
    background-color: aquamarine;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    height: 250px;
}

:deep(.HouseDetail_info__w_ymp) {
    padding: 15px;
    background: #fff;

    .HouseDetail_infoTitle__E1ASO {
        font-weight: 400;
        font-size: 16px;
        color: #333;
    }

    .am-flexbox.am-flexbox-align-center {
        align-items: center;
    }

    .HouseDetail_tags__3VXf3 {
        position: relative;
        margin: 10px 0;
    }

    .am-flexbox {
        text-align: left;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    .am-flexbox .am-flexbox-item:first-child {
        margin-left: 0;
    }

    .am-flexbox .am-flexbox-item {
        box-sizing: border-box;
        flex: 1 1;
        margin-left: 8px;
        min-width: 10px;
    }

    .HouseDetail_tag1__2-k0O {
        color: #39becd;
        background: #e1f5f8;
    }

    .HouseDetail_tag__o8UuR {
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
    }

    .am-flexbox.am-flexbox-align-center {
        align-items: center;
    }

    .HouseDetail_infoPrice__3SZhW {
        border-top: 1px solid #cecece;
        border-bottom: 1px solid #cecece;
        margin: 15px 0;
        padding: 15px 0;
    }

    .am-flexbox {
        text-align: left;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    .am-flexbox.am-flexbox-align-start {
        align-items: flex-start;
    }

    .HouseDetail_infoBasic__3prns {
        font-size: 13px;
    }

    .am-flexbox {
        text-align: left;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    .am-flexbox .am-flexbox-item:first-child {
        margin-left: 0;
    }

    .am-flexbox .am-flexbox-item {
        box-sizing: border-box;
        flex: 1 1;
        margin-left: 8px;
        min-width: 10px;
    }

    .HouseDetail_infoPriceItem__Rxzot {
        text-align: center;
        color: #999;
    }

    .am-flexbox .am-flexbox-item {
        box-sizing: border-box;
        flex: 1 1;
        margin-left: 8px;
        min-width: 10px;
    }

    .HouseDetail_infoPriceItem__Rxzot {
        text-align: center;
        color: #999;


    }

    .HouseDetail_infoPriceItem__Rxzot div:first-child {
        color: #fa5741;
        font-size: 18px;
        font-weight: bolder;
    }

    .HouseDetail_infoPriceItem__Rxzot div {
        height: 26px;
        line-height: 26px;
    }

    .HouseDetail_infoPriceItem__Rxzot div {
        height: 26px;
        line-height: 26px;
    }

    .am-flexbox .am-flexbox-item {
        box-sizing: border-box;
        flex: 1 1;
        margin-left: 8px;
        min-width: 10px;


    }

    .HouseDetail_infoPriceItem__Rxzot {
        text-align: center;
        color: #999;
    }

    .am-flexbox .am-flexbox-item:first-child {
        margin-left: 0;
    }

    .am-flexbox .am-flexbox-item {
        box-sizing: border-box;
        flex: 1 1;
        margin-left: 8px;
        min-width: 10px;
    }

    .HouseDetail_infoBasic__3prns {
        font-size: 13px;
    }

    .am-flexbox .am-flexbox-item {
        box-sizing: border-box;
        flex: 1 1;
        margin-left: 8px px;
        min-width: 10px;
    }

    .HouseDetail_info__w_ymp {
        padding: 15px;
        background: #fff;
    }

}

:deep(.HouseDetail_mapTitle__3reEo) {
    margin: 0 3%;
    line-height: 44px;
    color: #666;
    margin-top: 5px;

    .HouseDetail_mapTitle__3reEo span {
        color: #333;
    }
}

:deep(.HouseDetail_about__1W1Px) {
    margin-bottom: 10px;
    padding: 0 10px;
    background: #fff;

    .HouseDetail_houseTitle__3dg6k {
        font-weight: 600;
        font-size: 15px;
        margin-bottom: 10px;
        padding: 15px 0;
        border-bottom: 1px solid #cecece;
    }

    .HousePackage_root__1MUw0 {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        background: #fff;
    }

    p,
    ul {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    .HousePackage_item__2q4AQ {
        margin: 10px 0;
        width: 20%;
        line-height: 23px;
    }
}

:deep(.HouseDetail_set__26npJ) {
    margin: 10px 0;
    padding: 0 10px;
    line-height: 150%;
    background: #fff;

    .HouseDetail_houseTitle__3dg6k {
        font-weight: 600;
        font-size: 15px;
        margin-bottom: 10px;
        padding: 15px 0;
        border-bottom: 1px solid #cecece;
    }

    .HouseDetail_contact__O_lsw {
        position: relative;
    }

    .HouseDetail_user__TZj3w {
        margin-bottom: 10px;
        display: flex;
    }

    .HouseDetail_userMsg__3mcRl {
        position: absolute;
        right: 15px;
        top: 20px;
        color: #33be85;
        border: 1px solid #33be85;
        border-radius: 3px;
        padding: 3px 15px;
    }

    .HouseDetail_descText__2JsQA {
        line-height: 1.6;
        padding: 10px 0;
        color: #333;
    }



    .HouseDetail_user__TZj3w img {
        width: 52px;
        height: 52px;
        margin: 10px 10px 0 0;
    }

    img {
        border-style: none;
    }

    .HouseDetail_useInfo__FrBlz {
        padding: 15px 0 0 5px;
    }

    .HouseDetail_userAuth__Xr6gY {
        font-size: 12px;
        color: #fa5741;
    }

    .HouseDetail_userAuth__Xr6gY .icon-auth {
        margin-right: 5px;
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .HouseDetail_userMsg__3mcRl {
        position: absolute;
        right: 15px;
        top: 20px;
        color: #33be85;
        border: 1px solid #33be85;
        border-radius: 3px;
        padding: 3px 15px;
    }

    .HouseDetail_descText__2JsQA {
        line-height: 1.6;
        padding: 10px 0;
        color: #333;
    }
}

:deep(.HouseDetail_recommend__1L7WT) {
    margin: 10px 0 0;
    padding: 0 15px;
    background: #fff;

    .HouseDetail_houseTitle__3dg6k {
        font-weight: 600;
        font-size: 15px;
        margin-bottom: 10px;
        padding: 15px 0;
        border-bottom: 1px solid #cecece;
    }

    .HouseItem_house__29lYP {
        height: 120px;
        position: relative;
        box-sizing: border-box;
        justify-content: space-around;
        padding-top: 18px;
        border-bottom: 1px solid #e5e5e5;
    }

    .HouseItem_imgWrap__3ZPoa {
        float: left;
        width: 106px;
        height: 80px;
    }

    .HouseItem_img__1BaJK {
        width: 106px;
        height: 80px;
    }

    .HouseDetail_items__1nCaB div:last-child {
        border-bottom: 0;
    }

    .HouseItem_content__1gVhj {
        overflow: hidden;
        line-height: 22px;
        padding-left: 12px;
    }

    .HouseItem_desc__5-mp4,
    .HouseItem_title__2dXar {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
    }

    .HouseItem_title__2dXar {
        margin: 0;
        font-size: 15px;
        color: #394043;
    }

    .HouseItem_desc__5-mp4 {
        font-size: 12px;
        color: #afb2b3;
    }

    .HouseItem_desc__5-mp4,
    .HouseItem_title__2dXar {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
    }

    .HouseItem_tag1__3VDnD {
        color: #39becd;
        background: #e1f5f8;
    }

    .HouseItem_tag__3MxYv {
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
    }

    .HouseDetail_items__1nCaB div:last-child {
        border-bottom: 0;
    }

    .HouseItem_price__1_r8v {
        font-size: 12px;
        color: #fa5741;
    }

    .HouseItem_priceNum__RGpsE {
        font-size: 16px;
        font-weight: bolder;
    }
}

:deep(.am-flexbox.am-flexbox-align-center) {
    align-items: center;
}

.HouseDetail_fixedBottom__3qos1 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #cecece;
    text-align: center;
    font-size: 17px;
    color: #999;
    background-color: #fff;
}

.am-flexbox {
    text-align: left;
    overflow: hidden;
    display: flex;
    align-items: center;
}

:deep(.am-flexbox .am-flexbox-item:first-child) {
    margin-left: 0;
}

.HouseDetail_fixedBottom__3qos1 div:first-child {
    border-right: 1px solid #e8e8e9;
}

.am-flexbox .am-flexbox-item {
    box-sizing: border-box;
    flex: 1 1;
    margin-left: 8px;
    min-width: 10px;
}

.HouseDetail_favoriteImg__hAmZ4 {
    width: 16px;
}

img {
    border-style: none;
}

.HouseDetail_fixedBottom__3qos1 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #cecece;
    text-align: center;
    font-size: 17px;
    color: #999;
    background-color: #fff;
}

.HouseDetail_favorite__3hYRk {
    margin-left: 6px;
}

.HouseDetail_fixedBottom__3qos1 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #cecece;
    text-align: center;
    font-size: 17px;
    color: #999;
    background-color: #fff;
}

.am-flexbox .am-flexbox-item {
    box-sizing: border-box;
    flex: 1 1;
    margin-left: 8px;
    min-width: 10px;
}

.HouseDetail_fixedBottom__3qos1 div:last-child {
    border-right: 1px solid #e8e8e9;
    background-color: #21b97a;
}

.am-flexbox .am-flexbox-item {
    box-sizing: border-box;
    flex: 1 1;
    margin-left: 8px;
    min-width: 10px;
}

.HouseDetail_fixedBottom__3qos1 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #cecece;
    text-align: center;
    font-size: 17px;
    color: #999;
    background-color: #fff;
}

.HouseDetail_telephone__yGu1I {
    color: #fff;
}

a {
    background: transparent;
    text-decoration: none;
}
</style>