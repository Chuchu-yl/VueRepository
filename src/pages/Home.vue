
<template>

  <!-- <div id="home">
    <div id='rouercomponents'> -->
      <el-container>
      <el-aside v-if="isClose" width="200px">Aside</el-aside>
      <el-container>
    <el-header @click.native="showAside">Header</el-header>
     <el-main><router-view></router-view></el-main>
      
    <!-- <el-footer> <Footer /></el-footer> -->
     <div v-if='this.$router.history.current.path!="/Login"' :class="isClose ?'footer2':'footer'">
      <Footer />
    </div>
  </el-container>
</el-container>
    
    <!-- </div>
    <div v-if='this.$router.history.current.path!="/Login"' class="footer">
      <Footer />
    </div>
  </div> -->
  

  
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
  name: 'Home',
  data(){
    return{
      isClose:false
    }
  },
  mounted(){
  },
  components:{
    Footer
  },
  methods:{
    showAside(){
      this.isClose=!this.isClose
    }
  }


}
</script>


<style lang='less'>
#wrap{
  height: 100%;
}
#home{
    height: 100%;
  #rouercomponents{
  min-height: calc(100% - 50px);
  }
}
.el-container{
  height: 100%;
    .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 50px !important;
  }
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  .footer{
  width: 100%;
  height: 50px;
  background-color: pink;
  margin-bottom: -50px;
}
.footer2{
  margin-left: -50px;
  width: calc(100% + 50px);
  height: 50px;
  background-color: pink;
}
</style>
