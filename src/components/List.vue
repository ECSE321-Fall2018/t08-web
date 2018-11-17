<template>
  <div style='width: 100%'>
    <mu-flex class='flex-wrapper' justify-content='center' fill>
      <h3 style='width: 50%; text-align: left'>User</h3>
      <h3 style='width: 50%; text-align: right'>Trips Done</h3>
    </mu-flex>
    <ul v-if='title === "Routes"'>
      <li v-for='trip in allFilters["trips"]' class='list-item'>
        <div>{{trip.startLocation}} {{trip.stops}}</div>
        <div>{{trip.status}}</div>
      </li>
    </ul>
    <ul v-else>
      <li v-for='user in allFilters[title.toLowerCase()]' class='list-item'>
        <div>{{user.username}}</div>
        <div>{{user.tripnumber}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  props: ['title'],
  computed: store.computed,
}
</script>

<style scoped>
  ul {
    height: 250px;
    overflow: auto;
    margin-left: -15px;
  }

  li {
    display: flex;
  }

  li div {
    flex-grow: 1;
  }

  li div:last-child {
    text-align: right;
  }

  .list-item {
    margin: 10px 0 10px -24px;
  }
</style>