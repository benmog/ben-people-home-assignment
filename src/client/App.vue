<template>
  <div id="app">
    <people/>
  </div>
</template>

<script>
import People from './Widgets/People';
export default {
  components: { People },
  name: 'App',
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
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
