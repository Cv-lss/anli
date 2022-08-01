<template>
  <div>
    <div class="searchBox">
      <van-icon name="arrow-left" class="left" @click="goBack" />
      <van-search v-model="value" placeholder="请输入搜索关键词">
        <template #label>
          <span @click="goCity">北京▼</span>
        </template>
      </van-search>
      <van-icon name="map-marked" class="map" />
    </div>

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>

    <!-- 列表 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item.id" @click="goDetails(item.houseCode)">
          <van-image width="100" height="100" :src="`http://liufusong.top:8080${item.houseImg}`" />
          <div class="listText">
            <p class="titleText title">{{ item.title }}</p>
            <p class="titleText info">{{ item.desc }}</p>
            <p v-for="(tags, index) in item.tags" :key="index" class="subway">
              {{ tags }}
            </p>
            <p class="titleText red">{{ item.price }} 元 / 月</p>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,

      value: "", //是搜索框的值
      value1: 0,
      value2: "a",
      value3: "b",
      value4: "c",
      option1: [
        { text: "区域", value: 0 },
        { text: "地铁", value: 1 },

      ],
      option2: [
        { text: "方式", value: "a" },
        { text: "租金", value: "b" },
        { text: "筛选", value: "c" },
      ],
      option3: [
        { text: "租金", value: "a" },
        { text: "租金", value: "b" },
        { text: "租金", value: "c" },
      ],
      option4: [
        { text: "筛选", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "筛选", value: "c" },
      ],
    };
  },

  mounted() {
    this.getHouseInfo();
  },
  methods: {

    async getHouseInfo() {
      let result = await this.$API.reqHouseInfo();
      console.log(result);
      this.list = result.data.body.list;
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },

    //顶部返回按钮
    goBack() {
      // console.log(111);
    },
    //点击去城市列表
    goCity() {
      this.$router.push({
        path: "/city",
      });
    },

    //点击列表去详情页
    async goDetails(id) {
      // console.log(id);
      // console.log(result);
      this.$router.push({
        path: '/detailslist',
        query: {
          id: id
        }
      })
    }
  },
};
</script>

<style scoped >
.searchBox {
  background-color: #21b97a;
}

.van-search {
  margin: 0 auto;
  width: 320px;
  background: #21b97a;
}

.left {
  position: absolute;
  top: 16px;
  left: 7px;
  font-size: 25px;
}

.map {
  position: absolute;
  top: 13px;
  right: 7px;
  font-size: 25px;
}

.listText {
  float: left;
}

.red {
  color: #fa5741;
}

.van-image {
  float: left;
  width: 106px;
  height: 80px;
  margin-right: 10px;
}

.titleText {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title {
  font-weight: 700;
}

.info {
  font-size: 15px;
  color: #ccc;
}

.subway {
  width: 46px;
  height: 20px;
  font-size: 12px;
  color: #39b1cd;
  padding: 0 0 5px 5px;
  background-color: #e1f5f8;
}
</style>