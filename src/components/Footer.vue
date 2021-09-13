<!-- 

-->
<template>
    <div class="footer_wrap">
        <div>
            <router-link to="/">首页</router-link>
        </div>
        <div> 
            <router-link to="/Shopping">购物车</router-link>
        </div>
        <div> 
            <router-link to="/Main">我的</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
.footer_wrap{
display: flex;
}
.footer_wrap div{
    flex: 1;
}
</style>