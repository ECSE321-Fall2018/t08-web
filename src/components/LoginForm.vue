<template>
  <mu-form ref='form' :model='formDetails' class='login-form' v-on:keyup.13='() => submit(formDetails)'>
    <mu-form-item prop='username' :rules='usernameRules'>
      <mu-text-field
        placeholder='Username'
        v-model='formDetails.username'
        prop='username'
        :action-icon='"arrow_forward"'
        :action-click='() => submit(formDetails)'
      ></mu-text-field>
    </mu-form-item>
    <mu-form-item prop='password' :rules='passwordRules'>
        <mu-text-field
          placeholder='Password'
          v-model='formDetails.password'
          prop='password'
          :action-icon='visibility ? "visibility_off" : "visibility"'
          :action-click='() => visibility = !visibility'
          :type='visibility ? "text" : "password"'
        ></mu-text-field>
    </mu-form-item>
    <mu-form-item prop='staySignedIn'>
      <mu-checkbox label='Keep me signed in' v-model='formDetails.staySignedIn'></mu-checkbox>
    </mu-form-item>
  </mu-form>
</template>

<script>
  import store from '@/store.js'

  export default {
    data () {
      return {
        usernameRules: [{validate: val => !!val, message: 'Username must be filled in'}],
        passwordRules: [
          {validate: val => !!val, message: 'Password must be filled in'},
          {validate: val => val.length >= 8, message: 'Password length must be greater than 7'},
        ],
        formDetails: {
          username: '',
          password: '',
          staySignedIn: false,
        },
        visibility: false,
      }
    },
    methods: {
      submit(formDetails) {
        const {username, password, staySignedIn} = formDetails

        this.$refs.form.validate().then(result => {
          if (result) {
            /*
             * USER AUTHORIZATION INSTRUCTIONS
             * Check if username and password match our database
             * And if that user is an admin
             * If yes to both, log the user in
             * Otherwise, return an error
             * 
             * TIPS
             * Use axios
             * you have access to the variables `username` and `password`
             */
            // INSERT CODE HERE

            // The code to log the user in (put it in your axios)
            store.methods.setUsername(username)
            store.methods.setPassword(password)
            this.$router.push('status')
          }
        })
      },
      /*
      clear () {
        this.$refs.form.clear()
        this.formDetails = {
          username: '',
          password: '',
          staySignedIn: false
        }
      }
      */
    }
  }
</script>

<style>
.login-form {
  width: 400px
}
</style>