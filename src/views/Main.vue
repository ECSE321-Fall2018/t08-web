<template>
  <mu-flex v-if='$route.params.username'
    class='flex-parent'
    direction='column'
    wrap='wrap'
    justify-content='center'
    align-items='center'
  >
    <section class='flex-item'>
      <img alt='RideShare Logo' src='../assets/temp-logo.png' width='300'>
    </section>
    <section class='flex-item'>
      <h1>Welcome back, {{$route.params.username}}</h1>
    </section>
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
      <ActiveUserToggle style='width: initial; margin: 0 10px' />
      <RankingsDatePicker style='width: initial; margin: 0 10px' />
      <RankingsDatePicker style='width: initial; margin: 0 10px' />
    </mu-flex>
  </mu-flex>
  <div v-else>
    {{goToLogin}}
  </div>
</template>

<script>
import Listing from '@/components/Listing.vue'
import ActiveUserToggle from '@/components/ActiveUserToggle.vue'
import RankingsDatePicker from '@/components/RankingsDatePicker.vue'

export default {
  name: 'Main',
  components: {
    Listing,
    ActiveUserToggle,
    RankingsDatePicker,
  },
  computed: {
    goToLogin() {
      this.$router.push('login');
    }
  }
};
</script>

<style>
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