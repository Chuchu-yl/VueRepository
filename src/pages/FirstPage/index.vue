<template v-if='isIfNone'>
    <div class="first">
    <p style="textAlign:left">测试下拉加载</p>
    </div>
</template>
<script>
import {mapState} from 'vuex'
    export default{
        name:'Home',
        computed:{
        },
        mounted(){
        }
    }
</script>
<style scoped lang="less">
.first{
    height: 1000px;
    font-weight: bold;
    height: 100%;
    // background-color: rgb(179, 189, 178);
    .text-danger{
        color: red;
    }
    .active{
        background-color: pink;
    }
}
</style>
