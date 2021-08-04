import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

const store = new  Vuex.Store({
  // 保存状态信息
  state: {
    counter: 0
  },
  mutations: {
    // 方法
    Increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})
export default store