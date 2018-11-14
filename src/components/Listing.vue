<template>
  <mu-paper :z-depth='2' style='padding: 0 20px'>
    <mu-flex justify-content='center'>
      <h2>{{title}}</h2>
    </mu-flex>
    <mu-flex justify-content='center'>
      <List v-bind:users='sort(filtered(users))' />
    </mu-flex>
    <mu-flex justify-content='center'>
      <mu-text-field v-model='filter' type='text' icon='search' style='width: 100%'></mu-text-field>
    </mu-flex>
  </mu-paper>
</template>

<script>
import List from '@/components/List.vue'

export default {
  name: 'Listing',
  components: {List},
  data() {
    return {
      filter: '',
      users: [
        {name: 'projeffboy', completed: 10},
        {name: 'zhaoliang10500', completed: 20},
        {name: 'cyrilyared', completed: 35},
        {name: 'S1o3urn', completed: 27},
        {name: '1048596BetaConvergence', completed: 5},
        {name: 'Len-MY', completed: 2},
      ]
    }
  },
  props: ['title'],
  methods: {
    filtered(users) {
      return users
    },
    sort(users) {
      return users
    },
    hideInactive(users) {

    },
    dateConstrain(users) {

    },
  }
}
</script>
