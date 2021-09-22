<template>
    <div>购物车{{count}}</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
   name:'Shopping',
      computed:{
            ...mapState(['count'])
        },
}
</script>
<style lang="less">

</style>