<template>
    <!-- 测试count计数在Home中显示-vuex -->
    <div class="count">
        计数君：{{count}}
        <!-- <ul >
            <li v-for="(i,index) in testArr " :key='index'>{{i.name}}</li>
        </ul> -->
        <div>{{a}}</div>
        <div>{{b}}</div>
        <div @click="emit">测试computed计算属性{{aPlus}}</div>
        <div>{{title}}</div>
        <!-- 通过$emit实现单向数据绑定 -->
        <input @input='fun($event)'/>
    </div>

</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            a:1,
            b:''
        }
    },
    computed:{
            ...mapState(['count']),
            // aPlus:function(){
            //     return this.a + 1
            // },
            aPlus:{
                get:function(){
                    return this.a+1
                },
                set:function(v){
                    console.log(111,v);
                    this.a=v-1
                }
            }
    },
    props:{
        arr:{
                type:Array,
                default:()=>{return [2,2,3]}
            },
            // testArr:Array
            title:String
        },
        inject:['foo'],
        created(){
            this.b=this.foo
        },
        mounted(){
            //  this.b=this.foo 也可
            console.log(this.$parent.msg);
        },
        methods:{
            //  rootFUN(e){
            //     console.log(e);
            // },
            emit(){
            this.$emit('onAndemit','我是来测试 vm.$on与vm.$emit 的')
            this.$emit('click','我是来测试 click 的')
            this.$emit('update','111')
            },
            fun(e){
                this.$emit('input',e.target.value)
            }
        }
}
</script>
<style lang="less" scoped>

</style>