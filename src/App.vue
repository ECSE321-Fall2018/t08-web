<template>
  <div id='app'>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {Footer},
}
</script>


<style>
html, body, #app {
  height: 100%;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

footer {
  height: 5%;
}

.flex-parent {
  height: 100%;
}

.flex-item {
  padding: 20px 0;
}
</style>
