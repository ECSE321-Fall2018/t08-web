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
        <h1 class='zeroMargin'>Welcome back, {{store.username}}</h1>
      </mu-flex>
      <mu-flex tag='section' fill justify-content='end'>
        <router-link tag='h1' to='/status' class='zeroMargin' :style='"padding: 0 100px; color:" + "red"'>Status</router-link>
        <router-link tag='h1' to='/rankings' class='zeroMargin'>Rankings</router-link>
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
import store from '@/store.js'

export default {
  name: 'Dashboard',
  components: {
    Listing,
    InactiveUserSwitch,
    RankingsDatePicker,
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

<style>
  .zeroMargin {
    margin: 0;
  }

  .listings {
    width: 100%;
  }
  
  .listing {
    width: 30%;
    margin-left: calc(10% / 3);
  }
  
  .listing:last-child {
    margin-right: calc(10% / 3);
  }
</style>