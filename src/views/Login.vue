<template>
  <mu-flex
    class='flex-parent'
    direction='column'
    wrap='wrap'
    justify-content='center'
    align-items='center'
  >
    <section class='flex-item'>
      <img alt='RideShare Logo' src='../assets/temp-logo.png' width='400'>
    </section>
    <section class='flex-item'>
      <LoginForm />
    </section>
  </mu-flex>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LoginForm from '@/components/LoginForm.vue'
import store from '@/store.js'

export default {
  name: 'Login',
  components: {
    HelloWorld,
    LoginForm,
  },
  beforeDestroy() {
    store.methods.changePageName('status')
  }
}
</script>