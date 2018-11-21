<template>
  <div v-if='store.username'>
    <Settings v-if='pageName === "settings"' />
    <Dashboard v-else :pageName='pageName' />
  </div>
  <div v-else>
    {{goToLogin()}}
  </div>
</template>

<script>
import Dashboard from '@/components/Main/Dashboard'
import Settings from '@/components/Settings'
import store from '@/store.js'

export default {
  name: 'Authentication',
  components: {
    Dashboard,
    Settings
  },
  props: ['pageName'],
  data() {
    return {store: store.data}
  },
  methods: {
    goToLogin() {
      this.$router.push('login')
    }
  }
};
</script>