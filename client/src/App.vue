<template>
  <appContainer></appContainer>
</template>

<script>
import appContainer from './components/Container.vue'

export default {
  name: 'App',
  components: {
    appContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
