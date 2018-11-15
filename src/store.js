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
    ...dummyData, // GO TO dummy-data.js TO SEE THE DUMMY DATA
  },
  computed: {
    allFilters() {
      const {drivers, passengers, trips} = store.data

      function searchBoxFilters(storeData) {
        /*
         * INSTRUCTIONS
         * Filter drivers/passengers/trips by keyword in search box
         *
         * TIPS
         * The variable `drivers` contains an array of driver info.
         * Similar for variables `passengers` and `trips`.
         * To see the actual data of these variables, go to dummy-data.js
         * 
         * store.searchBoxFilters is an array containing the three filter keywords in the three searchboxes
         */
        // INSERT CODE HERE
  
        // UNCOMMENT BELOW TO SEE WHAT THESE VARIABLES CONTAIN
        // console.log(drivers)
        // console.log(passengers)
        // console.log(trips)
        // console.log(store.searchBoxFilters)
  
        return {drivers, passengers, trips}
      }
      
      function switchFilter(storeData) {
        if (!storeData.showInactiveUsers) {
          /*
           * INSTRUCTIONS
           * Return only active drivers, passengers, and trips
           * 
           * TIPS
           * Look at the tips from above
           * 
           * Look in dummy-data.js:
           * - "status" is broken
           * - You will need to use the array "active"
           * - It contains all the active users and trips
           * - Each element in active is in the format userid;tripid
           */
          // INSERT CODE HERE

          
          return storeData
        } else {
          return storeData
        }
      }

      return searchBoxFilters(switchFilter({drivers, passengers, trips}))
    }
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