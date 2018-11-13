<template>
  <mu-form ref='form' :model='validateForm' class='mu-demo-form'>
    <mu-form-item prop='username' :rules='usernameRules'>
      <mu-text-field
        placeholder='Username'
        v-model='validateForm.username'
        prop='username'
        :action-icon='"arrow_forward"'
      ></mu-text-field>
    </mu-form-item>
    <mu-form-item prop='password' :rules='passwordRules'>
        <mu-text-field
          placeholder='Password'
          type='password'
          v-model='validateForm.password'
          prop='password'
          :action-icon='"visibility"'
        ></mu-text-field>
    </mu-form-item>
    <mu-form-item prop='isAgree' :rules='argeeRules'>
      <mu-checkbox label='Keep me signed in' v-model='validateForm.isAgree'></mu-checkbox>
    </mu-form-item>
    <mu-form-item>
      <mu-button color='primary' @click='submit'>submit</mu-button>
      <mu-button @click='clear'>reset</mu-button>
    </mu-form-item>
  </mu-form>
</template>

<script>
  export default {
    data () {
      return {
        usernameRules: [
          { validate: (val) => !!val, message: 'Username must be filled in'},
          { validate: (val) => val.length >= 3, message: 'Username length greater than 3'}
        ],
        passwordRules: [
          { validate: (val) => !!val, message: 'Password must be filled in'},
          { validate: (val) => val.length >= 3 && val.length <= 10, message: 'Password length must be greater than 3 and less than 10'}
        ],
        argeeRules: [{ validate: (val) => !!val, message: 'Must agree with user agreement'}],
        validateForm: {
          username: '',
          password: '',
          isAgree: false
        }
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
      clear () {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
          isAgree: false
        };
      }
    }
  };
</script>

<style>
.mu-demo-form {
  width: 400px;
}
</style>