<template>
  <div id="app">
    <Header/>
    <div class="container is-fluid">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html, body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #424242;
}
#app {
  height: 100vh;
  width: 100vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  margin-top: 40px;
}
</style>
