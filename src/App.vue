<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  html{
    font-size: 16px;
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
  }

  #app {
    height: 100%;
  }
</style>
