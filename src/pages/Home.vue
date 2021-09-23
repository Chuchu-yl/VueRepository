
<template>

  <div id="home">
    <div id='rouercomponents'>
      <router-view></router-view>
    </div>
    <div v-if='this.$router.history.current.path!="/Login"' class="footer">
      <Footer />
    </div>
  </div>
  

  
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
  name: 'Home',
  mounted(){
  },
  components:{
    Footer
  }


}
</script>


<style lang='less'>
/* #wrap{
min-height: calc(100% - 50px);
} */
#wrap{
  height: 100%;
}
#home{
    height: 100%;
  #rouercomponents{
  min-height: calc(100% - 50px);
  }
}

</style>
