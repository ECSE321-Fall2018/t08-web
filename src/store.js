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
    ...dummyData, // GO TO dummy-data.js TO SEE THE DUMMY DATA
  },
  computed: {
    searchBoxFilters() {
      const {drivers, passengers, trips} = store.data
      /*
       * INSTRUCTIONS
       * Filter drivers/passengers/trips by keyword in search box
       *
       * The variable `drivers` contains an array of driver info.
       * Similar for variables `passengers` and `trips`.
       * To see the actual data of these variables, go to dummy-data.js
       * 
       * store.searchBoxFilters is an array
       */
      console.log(drivers)
      // console.log(passengers)
      // console.log(trips)
      console.log(store.searchBoxFilters)
      // INSERT CODE HERE

      return {drivers, passengers, trips}
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