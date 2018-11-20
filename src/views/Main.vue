<template>
  <Dashboard :pageName='pageName' />
</template>

<script>
  import Authorization from '@/components/Main/Authorization.vue'

  export default {
    components: {Authorization},
    props: ['pageName'],
  }
</script>