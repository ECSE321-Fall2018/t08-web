<template>
  <mu-paper :z-depth='2' style='padding: 0 20px'>
    <mu-flex justify-content='center'>
      <h2>{{title}}</h2>
    </mu-flex>
    <mu-flex justify-content='center'>
      <List :title='title' />
    </mu-flex>
    <mu-flex justify-content='center'>
      <mu-text-field v-model='filterString' type='text' icon='search' style='width: 100%'></mu-text-field>
    </mu-flex>
  </mu-paper>
</template>

<script>
import List from '@/components/List.vue'

export default {
  name: 'Listing',
  components: {List},
  data() {
    return {filterString: ''}
  },
  props: ['title'],
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
