<template>
  <mu-switch v-model='store.showInactiveUsers' label='Show Inactive Users and Trips'></mu-switch>
</template>

<script>
import store from '@/store.js'

export default {
  data() {
    return {store: store.data}
  }
}
</script>
