// 定义所需的 mutations
export default {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    SAVAUSERINFO(state,userInfo){
        // 当不需要走action发送异步请求时，可以直接this.$store.commit('mutation名称',新的state数据)
        // 与redux中的
        state.userInfo=userInfo
    },
    LOGIN(state,islogin){
        state.isLogin=islogin
    }
}