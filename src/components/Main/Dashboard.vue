<template>
  <mu-flex
    class='flex-parent'
    direction='column'
    wrap='wrap'
    justify-content='center'
    align-items='center'
    v-resize='resize'
  >
    <section class='flex-item'>
      <img alt='RideShare Logo' src='../../assets/temp-logo.png' width='300'>
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
      <mu-flex class='listings' align-items='center' v-if='store.pageWidth >= 800'>
        <Listing :pageName='pageName' title='Drivers' />
        <Listing :pageName='pageName' title='Passengers' />
        <Listing :pageName='pageName' title='Routes' />
      </mu-flex>
      <mu-flex class='listings' align-items='center' v-else>
        <Listing :pageName='pageName' title='Drivers' />
      </mu-flex>
    </section>
    <mu-flex
      v-if='pageName === "status"'
      tag='section'
      justify-content='center'
    >
      <InactiveUserSwitch class='bottomFilter' />
    </mu-flex>
    <mu-flex
      v-else
      tag='section'
      justify-content='center'
      align-items='baseline'
      style='width: 100%'
    >
      <mu-button flat class='bottomFilter' v-on:click='resetDates(store)'>Reset Dates</mu-button>
      <RankingsDatePicker
        type='startDate'
        label='Start Date'
        class='bottomFilter'
      />
      <RankingsDatePicker
        type='endDate'
        label='End Date'
        class='bottomFilter'
      />
    </mu-flex>
  </mu-flex>
</template>

<script>
import Listing from '@/components/Main/Listing'
import InactiveUserSwitch from '@/components/InactiveUserSwitch'
import RankingsDatePicker from '@/components/RankingsDatePicker'
import Link from '@/components/Link'
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
    return {
      store: store.data,
    }
  },
  mounted() {
    store.data.pageWidth = window.innerWidth
  },
  methods: {
    resetDates() {
      store.data.startDate = null
      store.data.endDate = null
      store.methods.updateData()
    },
    resize() {
      store.data.pageWidth = window.innerWidth
    },
  },
  created() {
    /*
fetch('https://rideshare08.herokuapp.com/api/trip/findtripstatus?username=jeffery&password=password&status=0', {method: 'POST'}) // here we specify POST
.then(response => response.json())
.then(jsonObject => console.log(jsonObject))
      */
     store.methods.updateData()
  }
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