
<template>

  <div id="app">
    <div id='wrap'>
      <router-view></router-view>
    </div>
    <!-- <div v-if='this.$router.history.current.path!="/Login"' class="footer">
      
      <Footer />
    </div> -->
  </div>
  

  
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  mounted(){
    console.log(11111111111,process.env);
    console.log(22222222222,process.env.VUE_APP_BUILD_ENV);
    console.log(this.$router);
  },
  // 在页面中使用组件，需要在components中声明使用！
  components:{
    Footer
  },

}
</script>


<style>
body,html{
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
/* #wrap{
min-height: calc(100% - 50px);
} */
.footer{
  width: 100%;
  height: 50px;
  background-color: pink;
  margin-bottom: -50px;
}
</style>
