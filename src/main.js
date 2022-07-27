import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/font/iconfont.css'
Vue.config.productionTip = false
import { Search, Col, Row, Tabbar, TabbarItem, Icon, Swipe, SwipeItem, Image, Grid, GridItem } from 'vant';
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Image);
Vue.use(Grid);
Vue.use(GridItem);


import * as API from '@/api'

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    //把api挂载在vue的原型对象上
    Vue.prototype.$API = API
  },
}).$mount('#app')
