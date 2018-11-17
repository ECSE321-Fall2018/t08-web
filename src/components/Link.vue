<template>
  <router-link
    tag='h1'
    :to='"/" + text.toLowerCase()'
    class='link'
    :class='true ? "focused" : ""'
  >
    <mu-icon :value='iconName' class='icon'></mu-icon>
    <span>{{text}}</span>
  </router-link>
</template>

<script>
export default {
  props: ['text', 'iconName'],
}
</script>


<style>
  .icon {
    font-size: 28px;
    margin-right: 5px;
  }

  .link {
    margin: 0;
    display: flex;
    align-items: center;
  }
</style>