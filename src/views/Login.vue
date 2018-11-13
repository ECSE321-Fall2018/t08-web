<template>
  <mu-flex
    class='login'
    direction='column'
    wrap='wrap'
    justify-content='center'
    align-items='center'
  >
    <img alt='RideShare Logo' src='../assets/temp-logo.png' width='400'>
    <div class='login-form'>
      <LoginForm />
    </div>
  </mu-flex>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    HelloWorld,
    LoginForm,
  }
}
</script>

<style scoped>
  .login {
    height: 100%;
  }

  .login img, .login-form {
    padding: 20px 0;
  }
</style>