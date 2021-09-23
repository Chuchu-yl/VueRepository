import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
// import Home from '@pages/Test'
import Main from '@pages/Main'
import FirstPage from '@pages/FirstPage'
import Shopping from '@pages/Shopping'
import Login from '@pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: '登录',
      component: ()=>import('@pages/Login'),
    },
    // Home组件相当于基础页面
    // 首页路由
    {
      path: '/',
      name: '首页',
      component: Home,
      redirect:'/firstPage',
      children:[{
        path:'/firstPage',
        component:FirstPage,
        // name:'第一页'
      }]
    },
    // 我的页面路由
    {
      path: '/Main',
      name: '我的',
      component: Home,
      redirect:'/Main',
      children:[{
        path:'/Main',
        component:Main,
        // name:'第一页'
      }]
    },
    {
      path: '/Shopping',
      name: '购物车',
      component: Home,
      redirect:'/Shopping',
      children:[{
        path:'/Shopping',
        component:Shopping,
        // name:'第一页'
      }]
    },
    // {
    //   path: '/Shopping',
    //   name: '购物车',
    //   component: Shopping
    // }
  ]
})
