<template>
  <mu-flex v-if='store.username'
    class='flex-parent'
    direction='column'
    wrap='wrap'
    justify-content='center'
    align-items='center'
  >
    <section class='flex-item'>
      <img alt='RideShare Logo' src='../assets/temp-logo.png' width='300'>
    </section>
    <mu-flex tag='section' class='flex-item' style='width: 93%'>
      <mu-flex tag='section' fill>
        <h1 style='margin: 0'>Welcome back, {{store.username}}</h1>
      </mu-flex>
      <mu-flex tag='section' fill justify-content='end'>
        <Link text='Status' iconName='list' />
        <Link text='Rankings' iconName='format_list' />
        <Link text='Settings' iconName='settings' />
      </mu-flex>
    </mu-flex>
    <section class='flex-item' style='width: 100%'>
      <mu-flex class='listings' align-items='center'>
        <Listing title='Drivers' class='listing' />
        <Listing title='Passengers' class='listing' />
        <Listing title='Routes' class='listing' />
      </mu-flex>
    </section>
    <mu-flex
      tag='section'
      justify-content='center'
      align-items='baseline'
      class='flex-item'
      style='width: 100%'
    >
      <InactiveUserSwitch v-if='type === "status"' style='width: initial; margin: 0 10px' />
      <RankingsDatePicker v-if='type === "rankings"' style='width: initial; margin: 0 10px' />
      <RankingsDatePicker v-if='type === "rankings"' style='width: initial; margin: 0 10px' />
    </mu-flex>
  </mu-flex>
  <div v-else>
    {{goToLogin}}
  </div>
</template>

<script>
import Listing from '@/components/Listing.vue'
import InactiveUserSwitch from '@/components/InactiveUserSwitch.vue'
import RankingsDatePicker from '@/components/RankingsDatePicker.vue'
import Link from '@/components/Link.vue'
import store from '@/store.js'

export default {
  name: 'Dashboard',
  components: {
    Listing,
    InactiveUserSwitch,
    RankingsDatePicker,
    Link,
  },
  props: ['type'],
  data() {
    return {store: store.data}
  },
  computed: {
    goToLogin() {
      this.$router.push('login')
    }
  },
};
</script>

<style scoped>
  .listings {
    width: 100%;
  }
</style>