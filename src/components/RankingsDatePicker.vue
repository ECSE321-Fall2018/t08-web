<template>
  <mu-date-input
    icon='today'
    v-model='date'
    label='Start Date'
    container='dialog'
    label-float
    full-width
  ></mu-date-input>
</template>

<script>
export default {
  data() {
    return {date: undefined}
  }
}
</script>