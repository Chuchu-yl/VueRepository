/**
 * Vue 渐进式的js框架
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

// 确定是否需要登录
router.beforeEach((to,from,next)=>{
  const isAuthenticated=localStorage.getItem('user')
  console.log(to);
  // to,即将要进入的目标路由对象
  // from 当前导航正要离开的路由
  // next 函数，执行效果依赖于next方法调用的参数
    // next（）执行管道中的下一个钩子
    // next（false）中断当前路由
    // next（/） next（{path:"/"}）跳转到不同地址
    if(to.path!='/Login' && !isAuthenticated) next({path:'/Login'})
    next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
