<template>
  <div class="search-root">
    <!--搜索栏-->
    <div class="search">
      <input placeholder="请输入关键字" v-model="keyword"/>
      <button type="primary" v-on:click="send" class="send">搜索</button>

    </div>
    <!--搜索结果栏-->
    <div class="result">


    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        keyword: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.search-root
  height 100%
  .search
    background  #42b983
    height 20%
  .result
    background #4692b9
    height 80%



</style>
