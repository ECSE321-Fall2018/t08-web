<template>
  <mu-paper :z-depth='2' style='padding: 0 20px'>
    <mu-flex justify-content='center'>
      <h2>{{title}}</h2>
    </mu-flex>
    <mu-flex justify-content='center'>
      <List />
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
    return {filter: ''}
  },
  props: ['title'],
}
</script>
