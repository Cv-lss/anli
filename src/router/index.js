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
                path: 'home',
                component: Home
            },
            {
                path: 'search',
                component: Search
            },
            {
                path: 'Consult',
                component: Consult
            },
            {
                path: 'my',
                component: () => import('@/views/My')
            },
            {
                path: 'login',
                component: () => import('@/views/Login')
            },

        ]
    },
    {
        path: '/city',
        component: () => import('@/views/City')
    },
]
const router = new VueRouter({
    routes
})

export default router