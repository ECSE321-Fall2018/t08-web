<template>
  <mu-flex
    class='flex-parent'
    direction='column'
    wrap='wrap'
    justify-content='center'
    align-items='center'
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
      <mu-flex class='listings' align-items='center'>
        <Listing :pageName='pageName' title='Drivers' />
        <Listing :pageName='pageName' title='Passengers' />
        <Listing :pageName='pageName' title='Routes' />
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
import axios from '@/axios.js'

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
  methods: {
    resetDates(store) {
      store.startDate = null
      store.endDate = null
    },
  },
  created() {
    /*
fetch('https://rideshare08.herokuapp.com/api/trip/findtripstatus?username=jeffery&password=password&status=0', {method: 'POST'}) // here we specify POST
.then(response => response.json())
.then(jsonObject => console.log(jsonObject))
      */

    axios.post('/trip/usertripstatus?username=jeffery&password=password&status=0&role=Passenger')
      .then(jsonObject => {
        store.data.activeUsersAndTrips = jsonObject.data
      })
      .catch(() => {
        store.data.activeUsersAndTrips = []
      })

    axios.post('/trip/ranking?username=jeffery&password=password&startdate=0&enddate=3000000000&role=Driver')
      .then(jsonObject => {
        store.data.drivers = jsonObject.data

        axios.post('/user/userlist?username=jeffery&password=password&startdate=0&enddate=3000000000&role=Driver')
          .then(jsonObject => {
            for (let driver of jsonObject.data) {
              if (driver.tripnumber === 0) {
                store.data.drivers.push(driver)
              }
            }
          })
      })
      .catch(() => {
        store.data.drivers = []
      })

    axios.post('/trip/ranking?username=jeffery&password=password&startdate=0&enddate=3000000000&role=Passenger')
      .then(jsonObject => {
        store.data.passengers = jsonObject.data

        axios.post('/user/userlist?username=jeffery&password=password&startdate=0&enddate=3000000000&role=Passenger')
          .then(jsonObject => {
            for (let passenger of jsonObject.data) {
              if (passenger.tripnumber === 0) {
                store.data.passengers.push(passenger)
              }
            }
          })
      })
      .catch(() => {
        store.data.passengers = []
      })

    axios.post('/trip/popularroute?username=jeffery&password=password&startdate=0&enddate=3000000000')
      .then(jsonObject => {
        store.data.routesBetweenDates = jsonObject.data.data
      })
      .catch(() => {
        store.data.routesBetweenDates = []
      })
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