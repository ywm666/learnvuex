<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是App组件'
    }
  },
  methods: {
    add() {
      this.$store.commit('Increment')
    },
    sub() {
      this.$store.commit('decrement')
    } 
  }
}
</script>

<style>

</style>
