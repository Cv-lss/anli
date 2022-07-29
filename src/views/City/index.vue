<template>
  <div>
    <!-- 头部区域 -->
    <div>
      <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 列表区域 -->
    <div>
      <van-index-bar sticky>
        <van-index-anchor index="当前城市" />
        <van-cell title="北京" />

        <van-index-anchor index="热门城市" />
        <van-cell
          :title="item.label"
          v-for="(item, index) in hotList"
          :key="index"
        />

        <van-index-anchor index="A" />
        <van-cell :title="item.label" v-for="item in list" :key="item.value" />
      </van-index-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      hotList: [],
    };
  },
  mounted() {
    this.getCityInfo();

    this.getHotCity();
  },
  methods: {
    //点击顶部箭头要做的事
    onClickLeft() {
      //   Toast("返回");
      //   console.log(111);this.
      this.$router.push({
        path: "/layout/home",
      });
    },

    //获取城市列表
    async getCityInfo() {
      let result = await this.$API.reqCityInfo();
      console.log(result);
      this.list = result.data.body;
    },

    //获取热门城市
    async getHotCity() {
      let result = await this.$API.reqHotCity();
      console.log(result);
      this.hotList = result.data.body;
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #21b97a;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
:deep(.van-nav-bar .van-icon) {
  color: #fff;
}
</style>