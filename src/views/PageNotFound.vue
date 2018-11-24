<template>
  <section class='flex-item error'>
    <img v-if='store.darkMode' alt='RideShare Logo' src='../assets/RideShareDarkMode.png' width='300'>
    <img v-else alt='RideShare Logo' src='../assets/temp-logo.png' width='300'>
    <h1>404 - Page Not Found</h1>
  </section>
</template>

<script>
import store from '@/store.js'

export default {
  data() {
    return {store: store.data}
  }
}
</script>

<style scroped>
  .error {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>