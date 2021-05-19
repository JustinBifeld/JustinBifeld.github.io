<template>
  <div id="app">
    
    <MainBody/>
    <Projects class="proj"/>
    <Header class="head"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainBody from './components/MainBody.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainBody,
    Projects
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
  margin-top: 0px;
}

.proj {
  position: relative;
  top: 100vh;
}

.head {
  position: absolute;
  top: 0;
}

</style>
