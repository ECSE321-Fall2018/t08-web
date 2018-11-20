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
    statusFilters() {
      const {searchBoxFilter, switchFilter, sortList} = store.filters
      const {showInactiveUsers, activeUsersAndTrips, routesBetweenDates, searchBoxFilters} = store.data

      return sortList(
        searchBoxFilter(
          switchFilter(activeUsersAndTrips, routesBetweenDates, showInactiveUsers),
          searchBoxFilters
        ),
        'status'
      )
    },
    rankingsFilters() {
      const {searchBoxFilter, dateFilter, sortList} = store.filters
      const {startDate, endDate, usersBetweenDates, routesBetweenDates, searchBoxFilters} = store.data

      return sortList(
        searchBoxFilter(
          dateFilter(usersBetweenDates, routesBetweenDates, startDate, endDate),
          searchBoxFilters
        ),
        'rankings'
      )
    },
  },
  filters: {
    switchFilter(activeUsersAndTrips, routesBetweenDates, showInactiveUsers) {
      let clonedActiveUsersAndTrips = [...activeUsersAndTrips]
      let clonedRoutesBetweenDates = [...routesBetweenDates]
      let drivers = {}
      let passengers = {}
      let trips = {}

      if (!showInactiveUsers) {
        /*
         * INSTRUCTIONS (DON'T WORK ON IT YET)
         * Fill the empty arrays `drivers`, passengers`, and `trips` with active drivers/passengers/trips
         * clonedActiveUsersAndTrips contains the 
         */
        // console.log(clonedActiveUsersAndTrips)

        // INSERT CODE HERE


        
        // return {drivers, passengers, trips}
        return {
          drivers: store.data.drivers,
          passengers: store.data.passengers,
          trips: clonedRoutesBetweenDates,
        }
      } else {
        // return {drivers, passengers, trips}
        return {
          drivers: store.data.drivers,
          passengers: store.data.passengers,
          trips: clonedRoutesBetweenDates,
        }
      }
    },
    searchBoxFilter({drivers, passengers, trips}, searchBoxFilters) {
      let clonedDrivers = [...drivers]
      let clonedPassengers = [...passengers]
      let clonedTrips = [...trips]

      /*
       * INSTRUCTIONS
       * Filter drivers/passengers/trips by keyword in search box
       *
       * USE THESE VARIABLES
       * `clonedDrivers`: contains an array of driver info
       * `clonedPassengers`: contains an array of passenger info
       * `clonedTrips`: contains an array of trip info
       * searchBoxFilters: an array containing what's in the three searchboxes (don't edit it)
       *
       * UNCOMMENT BELOW TO SEE WHAT THESE VARIABLES CONTAIN (or go to dummy-data.js)
       */
      // console.log(clonedDrivers)
      // console.log(clonedPassengers)
      // console.log(clonedTrips)
      // console.log(searchBoxFilters)

      // INSERT CODE HERE

      
      function searchStringUser(searchFilterIndex) {
        return function(value) {
          return value.username.toLowerCase().includes(searchBoxFilters[searchFilterIndex].toLowerCase())
        }
      }

      function searchStringRoute(searchFilterIndex) {
        return function(value) {
          return value.toLowerCase().includes(searchBoxFilters.searchFilterIndex.toLowerCase())
        }
      }

      let driversFiltered = clonedDrivers.filter(searchStringUser('drivers'))
      let passengersFiltered = clonedPassengers.filter(searchStringRoute('passengers'))
      let tripsFiltered = clonedTrips.filter(seachString('routes'))


       console.log(clonedDrivers)
     //  console.log(driversFiltered.username)
       console.log(clonedPassengers)
       console.log(clonedTrips)
       console.log(searchBoxFilters)

      

      return {
        drivers: clonedDrivers,
        passengers: clonedPassengers,
        trips: clonedTrips,
      }
    },
    dateFilter(usersBetweenDates, routesBetweenDates, startDate, endDate) {
      let clonedUsersBetweenDates = [...usersBetweenDates]
      let clonedRoutesBetweenDates = [...routesBetweenDates]

      /*
      DONT WORK ON THIS YET!!!!!!
      */
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
       * TIPS: Use Date.parse(..) to convert string date to number date
       *
       * UNCOMMENT BELOW TO SEE WHAT THESE VARIABLES CONTAIN (or go to dummy-data.js)
       */
      //console.log(drivers)
      //console.log(passengers)
      //console.log(trips)
      //console.log(startDate)
      //console.log(endDate)
      /*
		let count;
		let Sdate;
		let Edate;
		let Starto;
		let Endo;
		
		Starto = Date.parse(startDate);
		Endo = Date.parse(endDate);
		
		if(startDate == null && endDate == null){
		return {drivers, passengers, trips}
		}
		else if(startDate !== null && endDate == null){
			for (count = 0; count < trips.length; count ++){
				Sdate = new Date(trips[count]['startdate']);
				console.log(Starto);
				console.log(startDate.getMonth() == Sdate.getMonth());
				if(Sdate < Starto){
					trips.splice(count, 1);
				}
			}
		}
		else if(startDate == null && endDate !== null){
			for (count = 0; count < trips.length; count ++){
				Edate = new Date(trips[count]['enddate']);
				if(Edate > Endo){
					trips.splice(count, 1);
				}
			}
		}		
		else{
			for (count = 0; count < trips.length; count ++){
				Sdate = new Date(trips[count]['startdate']);
				Edate = new Date(trips[count]['enddate']);
				if(Sdate < Starto || Edate > Endo){
					trips.splice(count, 1);
				}
			}		
    }
		
    return {drivers, passengers, trips}
    */

      return {
        drivers: store.data.drivers,
        passengers: store.data.passengers,
        trips: clonedRoutesBetweenDates,
      }
    },
    sortList({drivers, passengers, trips}, sortBy) {
      let clonedDrivers = [...drivers]
      let clonedPassengers = [...passengers]
      let clonedTrips = [...trips]

      if (sortBy === 'status') {
        // Sort by alphabetical order of username (`username`)
        clonedDrivers.sort((a, b) => a.username.localeCompare(b.username))
        clonedPassengers.sort((a, b) => a.username.localeCompare(b.username))
        // clonedTrips.sort((a, b) => a.startLocation.localeCompare(b.startLocation))

      } else if (sortBy === 'rankings') {
        // Sort by most trips taken (`tripnumber`) 
        //cloneDrivers.sort((a, b) => a.tripnumber.localeCompare(b.tripnumber));
        clonedDrivers.sort(function(a, b){
          return a.tripnumber - b.tripnumber
        })
        clonedPassengers.sort(function(a, b){
          return a.tripnumber - b.tripnumber
        })
      }

      return {
        drivers: clonedDrivers, 
        passengers: clonedPassengers, 
        trips: clonedTrips,
      }
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

// You can access the variable store directly in the console
// (for debugging purposes)
window.store = store // MAKE SURE YOU DELETE THIS LINE AFTER THE PROEJCT IS FINISHED (FOR SECURITY REASONS)

export default store
