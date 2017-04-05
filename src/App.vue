<template>
  <div id="app">
    <h1> This is a single page app: </h1>
    <hr>
    <h2> Nav links: </h2>
    <router-link to="/25">Home</router-link>
    <router-link to="/message">Message</router-link>
    <router-link to="/someview">Someview</router-link>
    <router-link to="/vuex">Vuex</router-link>
    <hr>
    <h2> View: </h2>
    <router-view></router-view>
    <hr>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
