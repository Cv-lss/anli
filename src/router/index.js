import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home'
import LayOut from '@/views/LayOut'
import Search from '@/views/Search'
import Consult from '@/views/Consult'
const routes = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: LayOut,
        redirect: '/layout/home',
        children: [
            {
                path: '/layout/home',
                component: Home
            },
            {
                path: '/layout/search',
                component: Search
            },
            {
                path: '/layout/Consult',
                component: Consult
            }
        ]
    },

]
const router = new VueRouter({
    routes
})

export default router