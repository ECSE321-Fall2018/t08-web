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
      <mu-flex tag='section'>
        <Link :pageName='pageName' text='Status' iconName='format_list_bulleted' />
        <Link :pageName='pageName' text='Rankings' iconName='format_list_numbered' />
        <Link :pageName='pageName' text='Settings' iconName='settings' />
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
      style='width: 100%'
    >
      <InactiveUserSwitch v-if='pageName === "status"' class='bottomFilter' />
      <RankingsDatePicker
        type='startDate'
        label='Start Date'
        v-if='pageName === "rankings"'
        class='bottomFilter'
      />
      <RankingsDatePicker
        type='endDate'
        label='End Date'
        v-if='pageName === "rankings"'
        class='bottomFilter'
      />
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
  props: ['pageName'],
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

  .bottomFilter {
    width: initial;
    margin: 0 10px;
    height: 72px;
    display: flex;
    align-items: center;
  }
</style>