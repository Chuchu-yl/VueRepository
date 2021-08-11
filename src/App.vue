<template>
  <div id="app">
    <!-- <transition name="fade" mode="out-in"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    console.log(11111111111,process.env);
    console.log(22222222222,process.env.VUE_APP_BUILD_ENV);
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
