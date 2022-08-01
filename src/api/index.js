import request from "./request";

export const reqSwiep = () => request({ url: `home/swiper`, method: "get" });

//租房小组接口/home/groups?area=AREA%7C88cff55c-aaa4-e2e0
export const reqHouseTeam = () =>
  request({
    url: `/home/groups?area=AREA%7C88cff55c-aaa4-e2e0`,
    method: "get",
  });

//获取房屋的接口/houses/condition?id=AREA%7C88cff55c-aaa4-e2e0
export const reqHouseInfo = () =>
  request({
    url: `/houses?cityId=AREA%7C88cff55c-aaa4-e2e0&stat=20&end=29`,
    method: "get",
  });

//用户登录的接口/user/login
export const reqUserRegistered = (data) =>
  request({ url: `/user/login`, data, method: "post" });

//用户信息接口user
export const reqUserInfo = () => request({ url: `user`, method: "get" });

//获取城市列表区域/area/city?level=1
export const reqCityInfo = () =>
  request({ url: `/area/city?level=1`, method: "get" });

//获取热门城市/area/hot
export const reqHotCity = () => request({ url: `/area/hot`, method: "get" });

//获取详情页/houses/{id}
export const reqGetHouseInfo = (id) =>
  request({ url: `/houses/${id}`, method: "get" });

//添加收藏/user/favorites/{id}
export const reqCollection = (id) =>
  request({ url: `/user/favorites/${id}`, method: "post" });

//查看收藏列表/user/favorites
export const reqCollectionList = () =>
  request({ url: `/user/favorites`, method: "get" });

//我的出租/user/houses
export const reqMyRent = () => request({ url: `/user/houses`, method: "get" });
