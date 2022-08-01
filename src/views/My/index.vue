<template>
  <div>
    <div>
      <!-- <img :src="`http://liufusong.top:8080${info.avatar}`" alt="" style="width: 100%" v-if="isshow" /> -->
      <img src="~@/assets/imgs/bg.png" alt="" style="width: 100%" />
    </div>



    <div class="UserPanel">
      <div class="userAvatar">
        <img :src="`http://liufusong.top:8080${info.avatar}`" alt="" style=" width: 100%" v-if="isshow" />
        <img src="~@/assets/imgs/avatar.png" alt="" style=" width: 100%" v-else />
      </div>
      <div class="userAccount">
        <div>
          <p v-if="isshow">{{ info.nickname }}</p>
          <p v-else>游客</p>
        </div>

        <div>
          <van-button type="primary" size="small" @click="removeInfo" v-show="isshow">退出</van-button>
          <van-button type="primary" size="small" @click="goLogin" v-show="!isshow">登录</van-button>
        </div>
        <p class="info" v-show="isshow">编辑个人资料▶</p>
      </div>
    </div>

    <div class="navList">
      <van-grid column-num="3" :border="false" gutter="1" :clickable="true">
        <van-grid-item icon="star-o" text="我的收藏" to="/collection" />
        <van-grid-item icon="wap-home-o" text="我的出租" to="/myrent" />
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
import { Dialog } from 'vant';
import { removeToken } from '@/utils/auth'
export default {
  data() {
    return {
      info: {},
      nickname: '游客',

    };
  },
  async mounted() {
    // console.log(this.token);
    let result = await this.$API.reqUserInfo();
    // console.log(result);
    this.info = result.data.body || {}


  },

  computed: {

    isshow() {
      return (localStorage.getItem('HEIMA_HAOKE_TOKEN'))
    }
  },

  methods: {
    goLogin() {
      this.$router.push({
        path: "/login",
      });

    },

    //用户点击退出
    removeInfo() {
      Dialog.confirm({
        title: '确定退出吗',
        message: '是否确定退出',
      })
        .then(() => {
          // on confirm
          //退出之后清空信息
          // this.$store.commit('SET_TOKEN', {})
          //然后路由跳转到登录页
          removeToken()
        })
        .catch(() => {
          // on cancel
        });


    }
  },

};
</script>

<style scoped>
.info {
  margin-top: 10px !important;
  font-size: 13px !important;
  color: #ccc !important;
}

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