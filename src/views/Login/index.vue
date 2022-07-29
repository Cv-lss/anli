<template>
  <div>
    <div>
      <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />
    </div>

    <div>
      <van-form @submit="onSubmit" style="margin-top: 21px">
        <van-field
          v-model="username"
          name="username"
          placeholder="请输入账号"
          :rules="[
            { required: true, message: '请填写用户名', trigger: 'onChange' },
          ]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          placeholder="请输入密码"
          :rules="[
            { required: true, message: '请填写密码', trigger: 'onChange' },
          ]"
        />
        <div style="margin: 16px">
          <van-button
            style="background: #21b97a"
            block
            type="info"
            native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>

      <div class="register">
        <router-link to="/layout/register" style="color: #000; font-size: 14px"
          >没有账号，去注册~</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    //点击顶部箭头要做的事
    onClickLeft() {
      //   Toast("返回");
      //   console.log(111);this.
      this.$router.push({
        path: "/layout/my",
      });
    },

    //点击登录之后做的事
    async onSubmit(values) {
      //   console.log("submit", values);
      try {
        let result = await this.$API.reqUserRegistered({
          username: this.username,
          password: this.password,
        });
        console.log(result);
        //成功之后的提示
        this.$toast.success("登录成功");
        //然后把用户的token储存在本地
        localStorage.setItem("token", result.data.body.token);
        //如果登录成功就跳转到我的页面
        this.$router.push({
          path: "/layout/my",
        });
      } catch (error) {
        console.log(error);
        this.$toast.fail("登录失败");
      }
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
.van-cell {
  height: 60px;
}
.register {
  margin-top: 45px;
  text-align: center;
}
</style>