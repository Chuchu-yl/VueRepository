<template>
    <div class="first">
        <div >{{msg}}</div>
    </div>
    
</template>
<script>
    export default{
        name:'home',
        data(){
            return{
                msg:'首页'
            }
        }
    }
</script>
<style scoped lang="less">
.first{
    font-weight: bold;
    height: 100%;
    background-color: green;
}
</style>
