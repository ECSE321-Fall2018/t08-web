<template>
  <div v-if='store.username'>
    <Dashboard :pageName='pageName' />
  </div>
  <div v-else>
    {{goToLogin()}}
  </div>
</template>

<script>
import Dashboard from '@/components/Main/Dashboard'
import store from '@/store.js'

export default {
  name: 'Authentication',
  components: {Dashboard},
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