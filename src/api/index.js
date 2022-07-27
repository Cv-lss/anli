import request from './request'

export const reqSwiep = () => request({ url: `home/swiper`, method: 'get' })

//租房小组接口/home/groups?area=AREA%7C88cff55c-aaa4-e2e0
export const reqHouseTeam = () => request({ url: `/home/groups?area=AREA%7C88cff55c-aaa4-e2e0`, method: 'get' })