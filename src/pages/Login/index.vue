<template>
    <div>
        <header>这是登录界面</header>
    <div>
      姓名：  <input type="text" value="admin111" />
    </div>
    <div>
      密码：  <input type="password" v-model='passwordvalue'  />
    </div>
    <button @click="routerFun">登录</button>
    </div>
</template>
<script>
export default{
  data(){
    return{
      passwordvalue:''
    }
  },
  methods:{
    routerFun(){
      console.log(this.passwordvalue);
      if(this.passwordvalue!='123456'){
        alert('密码输入错误，请重新输入！')
      }else{
       localStorage.setItem('user','jiazhuangshiToken')
        this.$router.push('/firstPage')
        // this.$store.dispatch('getLogin')
      }
    },
  }
}
</script>
<style lang="less" scoped>

</style>
