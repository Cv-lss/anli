import axios from "axios";
//引入store仓库 拿到token生成的字符串
import store from "@/store/index";
const request = axios.create({
  baseURL: "http://liufusong.top:8080/",
});

// 添加请求拦截器 在请求发送之前 请求拦截器可以检测到 可以在请求之前做一些事情
request.interceptors.request.use((config) => {
  //请求拦截器 用请求头把token带给服务器
  if (store.state.tokenObj) {
    config.headers.authorization = store.state.tokenObj;
  }

  //consign：配置对象，对象里面有一个属性很重要 里面的headers请求头
  return config;
});

export default request;
