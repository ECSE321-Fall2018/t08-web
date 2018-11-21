<template>
  <mu-flex
    class='flex-parent'
    direction='column'
    wrap='wrap'
    justify-content='center'
    align-items='center'
  >
    <section class='flex-item'>
      <img alt='RideShare Logo' src='../assets/temp-logo.png' width='300'>
    </section>
    <mu-paper :z-depth='2' style='margin: 40px 0' class='paper'>
      <mu-flex direction='column' justify-content='center' align-items='center'>
        <h1>Settings</h1>
        <ul>
          <li style='height: 48px'>
            <div>ID</div>
            <div>{{store.adminDetails.userID}}</div>
          </li>
          <SettingsList
            label='Full Name'
            property='fullName'
            :editing='editing'
          />
          <SettingsList
            label='Username'
            property='username' 
            :editing='editing'
          />
          <SettingsList
            label='Email Address'
            property='emailAddress'
            :editing='editing'
          />
          <mu-text-field
            v-if='editing'
            tag='li'
            v-model='newPassword'
            placeholder='New Password'
            :action-icon='visibility ? "visibility_off" : "visibility"'
            :action-click='() => (visibility = !visibility)'
            :type='visibility ? "text" : "password"'
          ></mu-text-field>
          <mu-text-field
            v-if='editing'
            tag='li'
            v-model='reenterNewPassword'
            placeholder='Re-enter New Password'
            :action-icon='visibility ? "visibility_off" : "visibility"'
            :action-click='() => (visibility = !visibility)'
            :type='visibility ? "text" : "password"'
          ></mu-text-field>
        </ul>
      </mu-flex>
    </mu-paper>
    <mu-button color='primary' @click='edit'>
      {{editing ? 'Save' : 'Edit'}}
      <mu-icon right :value='editing ? "save" : "edit"'></mu-icon>
    </mu-button>
      <mu-dialog
        title="Enter Your Password to Save Changes"
        width='600'
        max-width='80%'
        :esc-press-close='false'
        :overlay-close='false'
        :open.sync='isDialogOpen'
      >
      <mu-text-field
        v-model='password'
        label='Password'
        :action-icon='visibility ? "visibility_off" : "visibility"'
        :action-click='() => (visibility = !visibility)'
        :type='visibility ? "text" : "password"'
      ></mu-text-field>
      <mu-button slot='actions' flat color='primary' @click='cancel'>Cancel</mu-button>
      <mu-button slot='actions' flat color='primary' @click='confirm'>Confirm</mu-button>
  </mu-dialog>
  </mu-flex>
</template>

<script>
import axios from '@/axios.js'
import store from '@/store.js'
import SettingsList from '@/components/SettingsList'

export default {
  components: {SettingsList},
  data() {
    return {
      store: store.data,
      editing: false,
      isDialogOpen: false,
      password: null,
      visibility: false,
      newPassword: null,
      reenterNewPassword: null,
    }
  },
  created() {   
    this.updateAdminDetails()
  },
  methods: {
    updateAdminDetails() {
      let that = this
      let {username, password} = store.data

      axios.post(`/user/authorize?username=${username}&password=${password}&role=Administrator`)
      .then(function (jsonObject) {
        let id = jsonObject.data.data
        if (id === -1) {
          that.$router.push('/')
        } else {
          axios.get(`/user/users/${id}?adminusername=${username}&adminpass=${password}`)
            .then(function (jsonObject) {
              that.store.adminDetails = jsonObject.data
            })
        }
      })
    },
    edit() {
      if (this.editing) {
        if (
          this.newPassword === this.reenterNewPassword
          && this.newPassword.length > 7
        ) {
          this.isDialogOpen = true
        }
      } else {
        this.editing = true
      }
    },
    cancel() {
      this.updateAdminDetails()

      this.resetStates()
    },
    confirm() {
      let {username, emailAddress, fullName} = this.store.adminDetails
      let submitPassword = this.password
      if (this.newPassword) {
        submitPassword = this.newPassword
      }
      axios.post(`/user/update?username=${username}&email=${emailAddress}&name=${fullName}&role=Administrator&oldpass=${this.password}&newpass=${submitPassword}`)
      .then()
      .catch()
      .then(() => this.updateAdminDetails())

      this.resetStates()
    },
    resetStates() {
      this.isDialogOpen = false
      this.editing = false
      this.password = null
      this.newPassword = null
      this.reenterNewPassword = null
      this.visibility = false
    }
  }
}
</script>

<style scoped>
 ul {
    width: 400px;
    overflow: auto;
    padding: 0 0 20px;
  }

  li {
    display: flex;
  }

  li div {
    flex-grow: 1;
    text-align: center;
    line-height: 200%;
  }

  .list-item {
    margin: 10px 0 10px -24px;
  }

  input {
    text-align: center;
  }

  .paper {
    border-radius: 8px;
  }
</style>