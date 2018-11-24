<template>
  <div style='width: 100%'>
    <mu-flex
      v-if='title === "Routes"'
      class='flex-wrapper'
      justify-content='center'
      fill
    >
      <h3>Start - End</h3>
      <h3 v-if='pageName === "status"'>Status</h3>
      <h3 v-else>Times Taken</h3>
    </mu-flex>
    <mu-flex v-else-if='inactiveUsersDisplay' class='flex-wrapper' justify-content='center' fill>
      <h3>User</h3>
      <h3 v-if='pageName === "status"'>Trips Registered</h3>
      <h3 v-else>Trips Completed</h3>
    </mu-flex>
    <mu-flex v-else class='flex-wrapper' justify-content='center' fill>
      <h3>User</h3>
      <h3>Current Trip</h3>
    </mu-flex>
    <ul v-if='title === "Routes" && pageName === "status"'>
      <li
        v-for='trip, i in statusFilters["routes"]'
        class='list-item'
      >
        <div>{{trip.startLocation}} - {{trip.stops.split(/[;]+/).pop()}}</div>
        <div :style='"color: " + tripColor(trip.status)'>{{trip.status | tripStatus}}</div>
      </li>
    </ul>
    <ul v-else-if='title === "Routes" && pageName === "rankings"'>
      <li
        v-for='trip, i in rankingsFilters["routes"]'
        class='list-item'
      >
        <div :style='"color: " + medal(i)'>{{i + 1 + '.'}} {{trip.path}} <mu-icon value=''></mu-icon></div>
        <div :style='"color: " + medal(i)'>{{trip.tripnumber}}</div>
      </li>
    </ul>
    <ul v-else-if='pageName === "status"'>
      <li v-for='user, i in statusFilters[title.toLowerCase()]' class='list-item'>
        <div>{{pageName === 'rankings' ? i + 1 + '.' : ''}} {{user.username}}</div>
        <div>{{inactiveUsersDisplay ? user.tripnumber : user.startlocation + ' - ' + user.stops.split(/[;]+/).pop() }}</div>
      </li>
    </ul>
    <ul v-else>
      <li v-for='user, i in rankingsFilters[title.toLowerCase()]' class='list-item'>
        <div :style='"color: " + medal(i)'>{{pageName === 'rankings' ? i + 1 + '.' : ''}} {{user.username}}</div>
        <div :style='"color: " + medal(i)'>{{user.tripnumber}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  props: ['title', 'pageName'],
  computed: store.computed,
  filters: {
    tripStatus(status) {
      if (status === 0) {
        return 'Ongoing'
      } else if (status === 1) {
        return 'Completed'
      } else if (status === 2) {
        return 'Planned'
      }
    }
  },
  methods: {
    medal(i) {
      if (i === 0) {
        return 'gold'
      } else if (i === 1) {
        return 'silver'
      } else if (i === 2) {
        return '#cd7f32'
      } else {
        return ''
      }
    },
    tripColor(status) {
      if (status === 0) {
        return '#ffd600'
      } else if (status === 1) {
        return '#00c853'
      } else if (status === 2) {
        return '#f44336'
      }
    }
  }
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