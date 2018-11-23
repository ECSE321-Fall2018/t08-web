<template>
  <mu-switch v-model='store.showInactiveUsers' label='Show Users and Trips Not Currently En Route'></mu-switch>
</template>

<script>
import store from '@/store.js'

export default {
  data() {
    return {store: store.data}
  }
}
</script>
