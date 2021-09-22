<template v-if='isIfNone'>
    <div class="first">
        <Count :testArr='testArr' @click="rootFUN" @onAndemit='onAndemit' :arr='arr' @input='inputFun'/>
        <div >{{msg}}</div>
        <button @click.once="clickFun">点击我增加</button>
          <input v-model="fullname"/>
          <span v-text="msg"></span>
          <div v-html="html"></div>
          <div v-show="isShow">测试展示文字v-show</div>
          <button @click="clickFun2">点我show</button>
          <div v-if="isIf">测试展示文字v-if</div>
          <div v-else-if='isIfTwo'>测试展示文字v-else-if</div>
          <div v-else>测试展示文字v-else</div>
          <button @click="clickFun3">点我If</button>
          <div>==========遍历v-for=========</div>
          <ul ><li v-for="(item,index) in testArr" :key="index">{{item}}</li></ul>
          <div>==========v-on=========</div>
          <!-- 方法处理器 -->
        <button v-on:click="doThis">v-on方法处理器</button>
        <!-- 内联语句 -->
        <button v-on:click="doThat('hello', $event)">v-on内联语句</button>
        <div>==========v-bind=========</div>
        <div v-bind:class="{active:isActive,'text-danger':hasError}">class绑定bind<button @click="classchange">切换class</button></div>
        <div :style="styleObj">style绑定bind<button @click="classchange2">切换style</button></div>
        <!-- <Count  :title="msg" @update='msg=$event'/> -->
        <input :value='inputvalue'/> 通过$emit实现单向数据绑定{{inputvalue}}
        <div>====双向数据绑定v-model======</div>
        <input v-model="inputValue" /> 输入框：{{inputValue}}
        <div>复选框</div>
        <input type="checkbox" value="jack" id='jack' v-model="checked" />
        <label for="jack">jack</label>
        <input type="checkbox" value="marry" id='marry' v-model="checked" />
        <label for="marry">marry</label>
        <input type="checkbox" value="tom" id='tom' v-model="checked" />
        <label for="tom">tom</label>
        <label for="checkbox">checked{{checked}}</label>
        <div>单选框</div>
        <input type="radio" id='one' value="one" v-model="radio" />
        <label for="one">one</label>
        <input type="radio" id='two' value="two" v-model="radio" />
        <label for="two">two</label>
        <span>{{radio}}</span>
        <div>select 选择框</div>
        <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
  <div v-once>只渲染一次v-once{{msg}}</div>
    </div>
</template>
<script>
import Count from '@components/Count'
import {mapState} from 'vuex'
    export default{
        name:'home',
        data(){
            return{
                msg:'首页',
                arr:[1,2,3],
                fullname:'',
                html:'<span>测试v-html</span>',
                isShow:true,
                isIf:true,
                isIfTwo:false,
                isIfNone:true,
                testArr:[{name:'哈哈1',age:18},{name:'哈哈2',age:18},{name:'哈哈3',age:18},{name:'哈哈4',age:18}],
                isActive:false,
                hasError:true,
                styleObj:{
                    color:'grey',
                    fontSize:'10px'
                },
                testArr2:[{name:'哈哈1',age:18,id:1},{name:'哈哈2',age:18,id:2},{name:'哈哈3',age:18,id:3},{name:'哈哈4',age:18,id:4}],
                inputvalue:'',
                inputValue:'',
                checked:[],
                radio:'',
                selected:''
            }
        },
        errorCaptured(err,vm,info){
            console.log(err,vm,info);
        },
        mounted(){
            console.log('============测试promise============');
            let newpromise=new Promise((resolve,reject)=>{
                resolve('成功')
            })
            newpromise.then((res)=>{
                console.log(res);
            }),
            this.fun()
        
        },
        components:{
            Count
        },
        // 计算属性，与data用法一致
        computed:{
            ...mapState(['count']),
            
        },
        methods:{
            inputFun(msg){
                console.log(111,msg);
                this.inputvalue=msg
            },
            classchange(){
                this.isActive=!this.isActive
            },
            classchange2(){
                if(this.styleObj.fontSize=='22px'){
 this.styleObj={
                    color:'grey',
                    fontSize:'10px'
                }
                }else{
this.styleObj={
                    color:'blue',
                    fontSize:'22px'
                }
                }
                
            },

            doThis(){
                alert('v-on')
            },
            doThat(msg,event){
                console.log('内联语句v-on',msg,event.target);
            },
           
            clickFun(){
                console.log('点击啦');
                this.$store.dispatch('increment')
            },
            clickFun2(){
                this.isShow=!this.isShow
            },
            clickFun3(){
                this.isIf=!this.isIf
                this.isIfTwo=true
                this.isIfNone=!this.isIfNone
            },
            fun(){
               return new Promise((resolve,reject)=>{
                   resolve('成功！！！！')
                }).then((res)=>{
                    console.log(res);
                })
            },
            // 这是用来测试 vm.$on 与 vm.$emit
            onAndemit(msg){
                console.log(msg);
                this.msg=msg
            },
            update(msg){
                console.log(msg);
            },
             rootFUN(e){
                console.log(e);
            },
        },
        watch:{
            // 监听，当fullname发生变化的时候，msg就变化
            fullname(newValue,oldValue){
                this.msg=newValue+'looo'
            },
        
        },
        extends:{
            Count
        },
        provide:{
            foo:'从父组件传入的provide-inject'
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
