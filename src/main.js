import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store/index";
import "@/assets/font/iconfont.css";
Vue.config.productionTip = false;

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import * as API from "@/api";

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    //把api挂载在vue的原型对象上
    Vue.prototype.$API = API;
  },
}).$mount("#app");
