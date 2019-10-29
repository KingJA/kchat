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
  body {
    height: 100vh;
    margin: 0;
    font-size: 5rem;
  }

  #app {
    height: 100vh;
  }
</style>
