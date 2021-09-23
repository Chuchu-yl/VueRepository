/**
 * Vue 渐进式的js框架
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
// 全局引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI)
router.beforeEach((to,from,next)=>{
  const isAuthenticated=localStorage.getItem('user')
  if(to.path!='/Login' && !isAuthenticated) next({path:'/Login'})
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
