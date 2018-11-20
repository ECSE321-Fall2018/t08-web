<template>
  <Dashboard :pageName='pageName' />
</template>

<script>
  import Dashboard from '@/components/Dashboard.vue'

  export default {
    components: {Dashboard},
    props: ['pageName'],
  }
</script>