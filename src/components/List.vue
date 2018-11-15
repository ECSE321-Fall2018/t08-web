<template>
  <div style='width: 100%'>
    <mu-flex class='flex-wrapper' justify-content='center' fill>
      <h3 style='width: 50%; text-align: left'>User</h3>
      <h3 style='width: 50%; text-align: right'>Trips Done</h3>
    </mu-flex>
    <ul v-if='title === "Routes"'>
      <li v-for='trip in store["trips"]' class='list-item'>
        <div style='float: left'>{{trip.startLocation}} {{trip.stops}}</div>
        <div style='float: right'>{{trip.status}}</div>
      </li>
    </ul>
    <ul v-else>
      <li v-for='user in store[title.toLowerCase()]' class='list-item'>
        <div style='float: left'>{{user.username}}</div>
        <div style='float: right'>{{user.tripnumber}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  props: ['title'],
  data() {
    return {
      store: store.data,
    }
  },
}
</script>

<style scoped>
  ul {
    height: 250px;
    overflow: auto;
  }

  .list-item {
    margin: 10px 0 10px -24px;
  }
</style>