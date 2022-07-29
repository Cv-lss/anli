<template>
  <div>
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in list" :key="item.id">
          <van-image
            width=" 100%"
            height="100%"
            :src="`http://liufusong.top:8080${item.imgSrc}`"
          />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="search">
      <van-search placeholder="小区或地址">
        <template #label>
          <span @click="goCity">地址▼</span>
        </template>
      </van-search>
    </div>

    <div>
      <van-grid>
        <van-grid-item icon="wap-home-o" @click="goSearch" />
        <van-grid-item icon="friends-o" @click="goSearch" />
        <van-grid-item icon="gem-o" />
        <!-- <img src="~@/assets/imgs/1.png" alt="" /> -->
        <van-grid-item icon="service-o" />
      </van-grid>
    </div>

    <div class="text" style="padding: 0 10px">
      <h3>租房小组</h3>
      <a href="#">更多</a>
    </div>
    <div class="tema">
      <div>
        <ul>
          <li v-for="item in listImg" :key="item.id">
            <div class="img">
              <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
            </div>
            <div class="text">
              <p>{{ item.desc }}</p>
              <p>{{ item.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="item in listImg" :key="item.id">
          <van-image :src="`http://liufusong.top:8080${item.imgSrc}`" />
          <p>{{ item.desc }}</p>
          <p>{{ item.title }}</p>
        </van-grid-item>
      </van-grid> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      listImg: [],
    };
  },
  mounted() {
    //轮播图的图片
    this.getSwipe();

    //租房小组的图片
    this.getHouseTeam();
  },
  methods: {
    async getSwipe() {
      try {
        let result = await this.$API.reqSwiep();
        // console.log(result);
        this.list = result.data.body;
      } catch (error) {
        console.log(error);
      }
    },

    async getHouseTeam() {
      let result = await this.$API.reqHouseTeam();
      console.log(result);
      this.listImg = result.data.body;
    },

    goSearch() {
      // console.log(111);
      this.$router.push({
        path: "/layout/search",
      });
    },

    //点击地址去到城市页面
    goCity() {
      // console.log(111);
      this.$router.push({
        path: "/city",
      });
    },
  },
};
</script>

<style scoped>
.search {
  position: absolute;
  top: 10px;
  width: 100%;
}

.van-search {
  background-color: rgba(0, 0, 0, 0);
}

.my-swipe .van-swipe-item {
  color: rgb(36, 23, 23);
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  /* background-color: #39a9ed; */
  height: 212px !important;
}

.text {
  margin: 10px 0;
}

.text h3 {
  display: inline;
}

.text a {
  float: right;
}

.tema {
  /* height: 187px; */
  padding: 0 10px;
}

.tema li {
  display: inline-block;
  width: 50%;
}

.tema ul li .img {
  float: left;
  margin-right: 5px;
}

.tema ul li .img img {
  width: 60px;
}

.tema ul li text {
  float: left;
}

.tema ul li text p {
  font-size: 16px;
}
</style>