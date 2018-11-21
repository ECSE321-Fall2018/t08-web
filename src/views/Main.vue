<template>
  <Authorization :pageName='pageName' />
</template>

<script>
  import Authorization from '@/components/Main/Authorization'

  export default {
    components: {Authorization},
    props: ['pageName'],
  }
</script>