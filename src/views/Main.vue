<template>
  <Dashboard :pageName='pageName' />
</template>

<script>
  import Dashboard from '@/components/Main/Authentication.vue'

  export default {
    components: {Dashboard},
    props: ['pageName'],
  }
</script>