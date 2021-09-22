// test
 const increment = ({ commit }) => {
    commit('INCREMENT')
  }
 const decrement = ({ commit }) => {
    commit('DECREMENT')
  }
  const getLogin=({commit})=>{
    setTimeout(() => {
      const flag=false
      commit('LOGIN',flag)
    }, 5000);
    commit('LOGIN',true)
  }
  export default{
    increment,
    decrement,
    getLogin
  }
  