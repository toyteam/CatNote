<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
  import MainPage from './components/MainPage'
  export default {
    name: 'catnote',
    components: {
      'MainPage': MainPage
    }
  }
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
