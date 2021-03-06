import Vue from 'vue'
// 全局引入vuetouter
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 定义路由组件
import Tabbar from '../views/Tabber'
// 懒加载路由
const Detail = () => import('../views/Detail')

const Showlist = () => import('../views/show')


// 嵌套组件
// import Home from '../views/Tabbar/Home'
const Home = () => import('../views/Tabber/home.vue')
// 订单页 懒加载
const juyuan = () => import('../views/Tabber/juyuan.vue')
// 同步加载
// import Order from '../views/Tabbar/Order'
// 我的
import Mine from '../views/Tabber/mine.vue'
// 票夹
import piaojia from '../views/Tabber/piaojia.vue'
// 登陆注册
import Sign from '../views/Sign'

// import axios from 'axios'

const routes = [{
        name: 'tabbar',
        path: '/tabbar',
        component: Tabbar,
        // 嵌套路由，先进底部选项卡，再去找首页
        children: [{
            name: 'home',
            // 第二层路由的path是没有/
            path: 'home',
            component: Home,
        }, {
            name: 'juyuan',
            path: 'juyuan',
            component: juyuan,
        }, {
            name: 'piaojia',
            path: 'piaojia',
            component: piaojia,
        }, {
            name: 'mine',
            path: 'mine',
            component: Mine,
        }],
        // 局部守卫
        // beforeEnter: (to, from, next) => {
        //     // ...
        // }
    },
    {
        name: 'detail',
        path: '/detail/:id',
        component: Detail,
        // 我往detail组建里面传入了props
        props: {
            default: true,
            sidebar: false
        }
    }, {
        name: 'showlist',
        path: '/showlist/:id',
        component: Showlist,
        // 我往detail组建里面传入了props
        props: {
            default: true,
            sidebar: false
        }
    },
    {
        name: 'sign',
        path: '/sign',
        component: Sign,
    },
    // 重定向
    {
        path: '/',
        // 别名
        alias: '/tabbar',
        redirect: () => {
            // 我要跳进/123获取路由的一些详情信息
            // console.log(to)
            // 方法接收 目标路由 作为参数
            // return 重定向的 字符串路径/路径对象
            return '/tabbar/home'
        }
    }
]

const router = new VueRouter({
    // 你默认是哈希模式，改为H5 history模式
    // mode: 'history',
    routes // (缩写) 相当于 routes: routes
})

// 全局前置守卫

// 要进入路由，都要先通过这个守卫

// router.beforeEach(async (to, from, next) => {
//     const data = await axios.post('https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/login', {
//         params: {
//             // 存在cookie里面
//             // 用token代替你的用户名和密码
//             token: 'ahsdioasydhkaujhdaskj'
//         }
//     })
//     let isLogin = data.data.data.status
//     // 如果你没登陆你就进sign
//     // 如果你登陆 next

//     // 如果你登陆了你就next
//     // 或者你就要去登陆页，你也可以next

//     // 如果你是首页，详情页，登录页或者你登陆了，都可以进去，否则不给你进去
//     if (isLogin || to.path === '/sign' || to.path === '/tabbar/home' || to.name === 'detail') {
//         next()
//     } else {
//         // 编程式导航
//         router.push({
//             name: 'sign'
//         })
//     }

// })

export default router