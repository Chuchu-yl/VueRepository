import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/Home'
import Main from '@pages/Main'
import Shopping from '@pages/Shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    }
  ]
})
