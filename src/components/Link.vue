<template>
  <router-link
    tag='h1'
    :to='"/" + text.toLowerCase()'
    class='link'
  >
    <mu-icon :value='iconName' class='icon'></mu-icon>
    <span>{{text}}</span>
  </router-link>
</template>

<script>
export default {
  props: ['text', 'iconName'],
}

//    :class='true ? "focused" : ""'
</script>


<style scoped>
  .icon {
    font-size: 28px;
    margin-right: 5px;
  }

  .link {
    margin: 0;
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding-left: 50px;
  }
</style>