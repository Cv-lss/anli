<template>
  <div>
    <!-- 头部区域 -->
    <div>
      <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 列表区域 -->
    <div>
      <!-- <van-index-bar sticky>
        <van-index-anchor index="当前城市" />
        <van-cell title="北京" />

        <van-index-anchor index="热门城市" />
        <van-cell />

        <van-index-anchor
          :index="First"
          v-for="(First, index) in FirstPin"
          :key="index"
        />
        <van-cell v-for="item in list" :key="item.value" :title="item.label" />
      </van-index-bar> -->
      <van-index-bar :sticky="false">
        <van-index-anchor index="当前城市" />
        <van-cell :title="currentCity" />
      </van-index-bar>


      <van-index-bar>
        <van-index-anchor index="1">热门城市</van-index-anchor>
        <van-cell :title="item.label" v-for="item, index in hotList" :key="index" @click="getCity(item.label)" />

      </van-index-bar>


      <van-index-bar :sticky="false">
        <van-index-anchor :index="name" v-for="(value, name) in list" :key="name">
          <p style="font-size:15px">{{ name }}</p>
          <p class="text" v-for="(item, index) in value" :key="index" @click="getCity(item.label)">
            {{ item.label }}
          </p>
        </van-index-anchor>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCity: '北京',
      FirstPin: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
      list: {},
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

      let list = result.data.body;
      let cityName = {};
      //循环26个字母
      this.FirstPin.forEach((item) => {
        cityName[item] = [];
        list.forEach((ele) => {
          //判断开头字母是不是相同
          let first = ele.pinyin.substring(0, 1).toUpperCase();
          if (first == item) {
            cityName[item].push(ele);
          }
        });
      });
      console.log(cityName);
      this.$nextTick(() => {
        this.list = cityName;
      });
    },

    //获取热门城市
    async getHotCity() {
      let result = await this.$API.reqHotCity();
      console.log(result);
      this.hotList = result.data.body;
    },

    //点击城市切换
    getCity(value) {
      // console.log(value);
      if (this.currentCity == '') {
        this.currentCity = 北京
      }
      this.currentCity = value
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

:deep(.van-index-bar__sidebar) {
  margin-top: 25px;
}

:deep(.van-index-bar__index) {
  margin-top: 7px;
  font-size: 13px;
}

:deep(.van-cell) {
  height: 50px;
  line-height: 30px;
}
</style>
