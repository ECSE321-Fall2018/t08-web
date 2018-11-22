<template>
  <mu-flex
    class='flex-parent'
    direction='column'
    wrap='wrap'
    justify-content='center'
    align-items='center'
  >
    <section class='flex-item'>
      <img v-if='store.darkMode' alt='RideShare Logo' src='../assets/RideShareDarkMode.png' width='400'>
      <img v-else alt='RideShare Logo' src='../assets/temp-logo.png' width='400'>
    </section>
    <section class='flex-item'>
      <LoginForm />
    </section>
  </mu-flex>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm'
import store from '@/store.js'

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  data() {
    return {
      store: store.data
    }
  }
}
</script>