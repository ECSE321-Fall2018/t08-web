<template>
  <li style='height: 48px'>
    <div>{{label}}</div>
    <div v-if='!editing'>{{store.adminDetails[property]}}</div>
    <div v-else>
      <mu-text-field v-model='store.adminDetails[property]' style='width: 80%; margin: 0'></mu-text-field>
    </div>
  </li>
</template>

<script>
import store from '@/store'

export default {
  props: ['label', 'property', 'editing'],
  data() {
    return {store: store.data}
  }
}
</script>

<style scoped>
 ul {
    width: 400px;
    overflow: auto;
    padding: 0 0 20px;
  }

  li {
    display: flex;
  }

  li div {
    flex-grow: 1;
    text-align: center;
    line-height: 200%;
  }

  .list-item {
    margin: 10px 0 10px -24px;
  }
</style>