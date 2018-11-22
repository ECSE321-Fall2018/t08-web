<template>
  <mu-form ref='form' :model='formDetails' class='login-form' v-on:keyup.13='() => submit(formDetails)'>
    <mu-form-item prop='username' :rules='usernameRules'>
      <mu-text-field
        placeholder='Administrator Username'
        v-model='formDetails.username'
        prop='username'
        :action-icon='"arrow_forward"'
        :action-click='() => submit(formDetails)'
      ></mu-text-field>
    </mu-form-item>
    <mu-form-item prop='password' :rules='passwordRules'>
        <mu-text-field
          placeholder='Administrator Password'
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
    <mu-snackbar :color="color.color" :open.sync="color.open">
    <mu-icon left :value="icon"></mu-icon>
    {{color.message}}
    <mu-button flat slot="action" color="#fff" @click="color.open = false">Close</mu-button>
  </mu-snackbar>
  </mu-form>
</template>

<script>
  import store from '@/store.js'
  import AXIOS from '@/axios.js'

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

        color: {
        color: 'error',
        message: 'Invalid administrator username or password.',
        open: false,
        timeout: 5000
      }
      }
    },
    computed: {
    icon () {
      return {
        success: 'check_circle',
        info: 'info',
        warning: 'priority_high',
        error: 'warning'
      }[this.color.color]
    }
  },
    methods: {
      submit(formDetails) {
        const {username, password, staySignedIn} = formDetails
        let that = this

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
              /*AXIOS.post(`/user/authorize?username=${username}&password=${password}&role=Administrator`)
                  .then(function (jsonObject) {
                      let id = jsonObject.data.data
                      if (id === -1) {
                          that.formDetails.username = ''
                          that.formDetails.password = ''
                      } else {*/
                          AXIOS.post(`/user/login?username=${username}&password=${password}`)
                              .then(function (jsonObject) {
                                  let loggedin = jsonObject.data.data
                                  if (loggedin !== 'Administrator') {
                                      that.formDetails.username = ''
                                      that.formDetails.password = ''
                                      that.openColorSnackbar()
                                  }
                                  else {
                                      store.data.username = username
                                      store.data.password = password
                                      that.$router.push('status')
                                  }
                              })
                      /*}
                  })*/
            // The code to log the user in (put it in your axios)
              /*
            store.methods.setUsername(username)
            store.methods.setPassword(password)
            this.$router.push('status')
            */
          }
        })
      },
      openColorSnackbar() {
      if (this.color.timer) clearTimeout(this.color.timer);
      this.color.open = true;
      this.color.timer = setTimeout(() => {
        this.color.open = false;
      }, this.color.timeout);
    }
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

<style scoped>
.login-form {
  width: 400px
}
.demo-snackbar-radio {
  margin: 8px 0;
}
</style>