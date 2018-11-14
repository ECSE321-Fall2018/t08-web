<template>
  <div style='width: 100%'>
    <mu-flex class='flex-wrapper' justify-content='center' fill>
      <h3 style='width: 50%; text-align: left'>User</h3>
      <h3 style='width: 50%; text-align: right'>Trips Done</h3>
    </mu-flex>
    <ol>
      <li v-for='user, i in users' class='list-item'>
        <div style='float: left'>{{user.name}}</div>
        <div style='float: right'>{{user.completed}}</div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {name: 'projeffboy', completed: 10},
        {name: 'zhaoliang10500', completed: 20},
        {name: 'cyrilyared', completed: 35},
        {name: 'S1o3urn', completed: 27},
        {name: '1048596BetaConvergence', completed: 5},
        {name: 'Len-MY', completed: 2},
      ]
    }
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