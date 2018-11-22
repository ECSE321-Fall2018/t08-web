<template>
  <div style='width: 100%'>
    <mu-flex class='flex-wrapper' justify-content='center' fill>
      <h3>User</h3>
      <h3>Trips Done</h3>
    </mu-flex>
    <ul v-if='title === "Routes"'>
      <li
        v-for='trip, i in pageName === "status" ? statusFilters["routes"] : rankingsFilters["routes"]'
        class='list-item'
      >
        <div>{{pageName === 'rankings' ? i + 1 + '.' : ''}} {{trip.slice(0, trip.indexOf(';'))}}</div>
        <div>{{trip.slice(trip.indexOf(';')).slice(1)}}</div>
      </li>
    </ul>
    <ul v-else>
      <li v-for='user, i in statusFilters[title.toLowerCase()]' class='list-item'>
        <div>{{pageName === 'rankings' ? i + 1 + '.' : ''}} {{user.username}}</div>
        <div>{{user.tripnumber}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  props: ['title', 'pageName'],
  computed: store.computed,
}
</script>

<style scoped>
  h3 {
    width: 50%;
    margin: 0;
  }

  h3:last-child {
    text-align: right;
  }

  ul {
    height: 250px;
    overflow: auto;
    margin: 0 0 0 -15px;
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