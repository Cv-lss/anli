<template>
  <div>
    <div>
      <img src="~@/assets/imgs/bg.png" alt="" style="width: 100%" />
    </div>

    <div class="UserPanel">
      <div class="userAvatar">
        <img src="~@/assets/imgs/avatar.png" alt="" style="width: 100%" />
      </div>
      <div class="userAccount">
        <p>游客</p>
        <van-button type="primary" size="small" @click="goLogin"
          >去登录</van-button
        >
      </div>
    </div>

    <div class="navList">
      <van-grid column-num="3" :border="false" gutter="1" :clickable="true">
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="underway-o" text="看房记录" />
        <van-grid-item icon="peer-pay" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>

    <div style="padding: 0 15px; margin-top: 13px">
      <img src="~@/assets/imgs/join.png" alt="" style="width: 100%" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  async mounted() {
    // console.log(this.token);
    let result = await this.$API.reqUserInfo(this.token);
    console.log(result);
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: "/layout/login",
      });
    },
  },
};
</script>

<style scoped>
.UserPanel {
  position: absolute;
  top: 135px;
  left: 50%;
  width: 318px;
  height: 165px;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
}
.userAvatar {
  position: relative;
  left: 126px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transform: translateY(-50%);
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
.userAccount {
  position: absolute;
  top: 48px;
  width: 278px;
  min-height: 52px;
  margin-left: 20px;
  text-align: center;
}
.userAccount p {
  font-size: 14px;
}
.van-button {
  margin-top: 18px;
  border-radius: 3px;
  width: 69px;
}
.navList {
  margin-top: 115px;
}
</style>