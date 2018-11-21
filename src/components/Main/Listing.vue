<template>
  <mu-paper :z-depth='2' class='listing'>
    <mu-flex justify-content='center'>
      <h2>{{title}}</h2>
    </mu-flex>
    <mu-flex justify-content='center'>
      <List :pageName='pageName' :title='title' />
    </mu-flex>
    <mu-flex justify-content='center'>
      <mu-text-field v-model='store.searchBoxFilters[title.toLowerCase()]' type='text' icon='search' style='width: 100%'></mu-text-field>
    </mu-flex>
  </mu-paper>
</template>

<script>
import List from '@/components/Main/List'
import store from '@/store.js'

export default {
  name: 'Listing',
  components: {List},
  data() {
    return {store: store.data}
  },
  props: ['title', 'pageName'],
  methods: {
    filter(users) {
      return users
    },
    sort(users) {
      return users
    },
    hideInactive(users) {

    },
    dateConstrain(users) {

    },
  },
}
</script>

<style scoped>
  h2 {
    margin: 0 0 20px;
  }

  .listing {
    width: 30%;
    margin-left: calc(10% / 3);
    padding: 10px 20px;
    border-radius: 8px;
  }
  
  .listing:last-child {
    margin-right: calc(10% / 3);
  }
</style>
