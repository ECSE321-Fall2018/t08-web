<template>
  <div style='width: 100%'>
    <mu-flex class='flex-wrapper' justify-content='center' fill>
      <h3 style='width: 50%; text-align: left'>User</h3>
      <h3 style='width: 50%; text-align: right'>Trips Done</h3>
    </mu-flex>
    <ol>
      <li v-for='user, i in store.driver' class='list-item'>
        <div style='float: left'>{{user.username}}</div>
        <div style='float: right'>{{user.tripnumber}}</div>
      </li>
    </ol>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  data() {
    return {store: store.data}
  }
}
</script>

<style scoped>
  ol {
    height: 250px;
    overflow: auto;
  }

  .list-item {
    margin: 10px 0 10px -24px;
  }
</style>