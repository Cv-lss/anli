<template>
  <div>
 

    <div>
      <router-view></router-view>
    </div>

    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">找房</van-tabbar-item>
      <van-tabbar-item to="/layout/Consult" icon="friends-o">咨询</van-tabbar-item>
      <van-tabbar-item to="/layout/Consult" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
}
</script>

<style>
</style>