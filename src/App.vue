<template>
  <div id='app'>
    <main>
      <router-view />
    </main>
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

main {
  height: 95%;
}

footer {
  height: 5%;
}
</style>
