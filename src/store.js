import dummyData from '@/dummy-data.js'

let store = {
  data: {
    username: null,
    password: null,
    searchBoxFilters: {
      drivers: null,
      passengers: null,
      trips: null,
    }, // since there are 3 search boxes
    showInactiveUsers: false,
    startDate: null,
    endDate: null,
    ...dummyData, // GO TO dummy-data.js TO SEE THE DUMMY DATA
  },
  computed: {
    allFilters() {
      const {
        drivers, 
        passengers, 
        trips, 
        searchBoxFilters,
        showInactiveUsers, 
        startDate, 
        endDate,
        activeUsersAndTrips
      } = store.data
      const {searchBoxFilter, switchFilter, sortList} = store.filters

      return sortList(
        searchBoxFilter(
          switchFilter(
            {drivers, passengers, trips},
            showInactiveUsers,
            activeUsersAndTrips
          ),
          searchBoxFilters
        ),
        startDate,
        endDate
      )
    }
  },
  filters: {
    searchBoxFilter({drivers, passengers, trips}, searchBoxFilters) {
      /*
       * INSTRUCTIONS
       * Filter drivers/passengers/trips by keyword in search box
       *
       * USE THESE VARIABLES
       * `drivers`: contains an array of driver info
       * `passengers`: contains an array of passenger info
       * `trips`: contains an array of trip info
       * searchBoxFilters: an array containing what's in the three searchboxes
       *
       * UNCOMMENT BELOW TO SEE WHAT THESE VARIABLES CONTAIN (or go to dummy-data.js)
       */
      // console.log(drivers)
      // console.log(passengers)
      // console.log(trips)
      // console.log(searchBoxFilters)

      // INSERT CODE HERE

      

      return {drivers, passengers, trips}
    },
    switchFilter(
      {drivers, passengers, trips},
      showInactiveUsers,
      activeUsersAndTrips
    ) {
      if (!showInactiveUsers) {
        /*
         * INSTRUCTIONS
         * Return only active drivers, passengers, and trips
         * 
         *
         * USE THESE VARIABLES
         * `drivers`: contains an array of driver info
         * `passengers`: contains an array of passenger info
         * `trips`: contains an array of trip info
         * showInactiveUsers: either true (show inactive users) or false (don't show inactive users)
         * activeUsersAndTrips: contains all the active users and trips in the format userid;tripid
         * 
         * (In dummy-data.js, "status" is broken, don't use it)
         *
         * UNCOMMENT BELOW TO SEE WHAT THESE VARIABLES CONTAIN (or go to dummy-data.js)
         */
        // console.log(drivers)
        // console.log(passengers)
        // console.log(trips)
        // console.log(showInactiveUsers)
        // console.log(activeUsersAndTrips)

        // INSERT CODE HERE


        
        return {drivers, passengers, trips}
      } else {
        return {drivers, passengers, trips}
      }
    },
    dateFilter({drivers, passengers, trips}, startDate, endDate) {
      /*
       * INSTRUCTIONS
       * Filter drivers/passengers/trips by start and end date
       * 
       *
       * USE THESE VARIABLES
       * `drivers`: contains an array of driver info
       * `passengers`: contains an array of passenger info
       * `trips`: contains an array of trip info
       * startDate: self-explanatory
       * endDate: self-explanatory
       *
       * UNCOMMENT BELOW TO SEE WHAT THESE VARIABLES CONTAIN (or go to dummy-data.js)
       */
      // console.log(drivers)
      // console.log(passengers)
      // console.log(trips)
      // console.log(startDate)
      // console.log(endDate)
      return {drivers, passengers, trips}
    },
    sortList({drivers, passengers, trips}) {
      /*
       * WRITE SOMETHING
       */
      // INSERT CODE HERE



      return {drivers, passengers, trips}
    },
  },
  methods: {
    setUsername(username) {
      store.data.username = username
    },
    setPassword(password) {
      store.data.password = password
    },
  }
}

export default store