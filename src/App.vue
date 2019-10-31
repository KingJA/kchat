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
  }
  body {
    height: 100vh;
    margin: 0;
  }

  #app {
    height: 100vh;
  }
</style>
