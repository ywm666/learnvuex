<template>
  <div>
    <!-- 拿到vuex里面  state里面的conster  -->
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>
<script>
export default {
  name: "HelloVuex",
  data () {
    return {

    };
  }
}
</script>
<style  scoped>
</style>