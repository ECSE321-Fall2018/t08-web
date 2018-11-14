<template>
  <mu-switch v-model='isOn' label='Hide Inactive Users'></mu-switch>
</template>

<script>
export default {
  data() {
    return {isOn: false}
  }
}
</script>
