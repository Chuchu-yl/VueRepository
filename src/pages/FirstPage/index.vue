<template v-if='isIfNone'>
    <div class="first">
    Home
    </div>
</template>
<script>
import {mapState} from 'vuex'
    export default{
        name:'Home',
        computed:{
            ...mapState(['isLogin'])
        },
        mounted(){
            console.log(111,this.isLogin);
        }
    }
</script>
<style scoped lang="less">
.first{
    font-weight: bold;
    height: 100%;
    background-color: rgb(179, 189, 178);
    .text-danger{
        color: red;
    }
    .active{
        background-color: pink;
    }
}
</style>
