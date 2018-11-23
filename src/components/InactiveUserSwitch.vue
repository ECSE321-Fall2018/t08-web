<template>
  <mu-switch v-model='store.showInactiveUsers' label='Show inactive users and trips'></mu-switch>
</template>

<script>
import store from '@/store.js'

export default {
  data() {
    return {store: store.data}
  }
}
</script>
