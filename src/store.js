import dummyData from '@/dummy-data.js'

let store = {
  data: {
    username: null,
    password: null,
    searchBoxFilters: {
      drivers: null,
      passengers: null,
      routes: null,
    }, // since there are 3 search boxes
    showInactiveUsers: false,
    startDate: null,
    endDate: null,
    ...dummyData, // We don't actually use the dummy data anymore, it gets overwritten by backend data
    adminDetails: {},
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
      let routes = {}

      if (!showInactiveUsers) {
        /*
         * INSTRUCTIONS (DON'T WORK ON IT YET)
         * Fill the empty arrays `drivers`, passengers`, and `routes` with active drivers/passengers/routes
         * clonedActiveUsersAndTrips contains the 
         */
        // console.log(clonedActiveUsersAndTrips)

        // INSERT CODE HERE


        
        // return {drivers, passengers, routes}
        return {
          drivers: store.data.drivers,
          passengers: store.data.passengers,
          routes: clonedRoutesBetweenDates,
        }
      } else {
        // return {drivers, passengers, routes}
        return {
          drivers: store.data.drivers,
          passengers: store.data.passengers,
          routes: clonedRoutesBetweenDates,
        }
      }
    },
    searchBoxFilter({drivers, passengers, routes}, searchBoxFilters) {
      let clonedDrivers = [...drivers]
      let clonedPassengers = [...passengers]
      let clonedRoutes = [...routes]

      /*
       * INSTRUCTIONS
       * Filter drivers/passengers/routes by keyword in search box
       *
       * USE THESE VARIABLES
       * `clonedDrivers`: contains an array of driver info
       * `clonedPassengers`: contains an array of passenger info
       * `clonedRoutes`: contains an array of trip info
       * searchBoxFilters: an array containing what's in the three searchboxes (don't edit it)
       *
       * UNCOMMENT BELOW TO SEE WHAT THESE VARIABLES CONTAIN (or go to dummy-data.js)
       */
      // console.log(clonedDrivers)
      // console.log(clonedPassengers)
      // console.log(clonedRoutes)
      // console.log(searchBoxFilters)

      // INSERT CODE HERE

      /*
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
      */

      if (searchBoxFilters.drivers) {
        clonedDrivers = clonedDrivers.filter(
          driver => driver.username.toLowerCase().includes(
            searchBoxFilters.drivers.toLowerCase()
          )
        )
      }
      if (searchBoxFilters.passengers) {
        clonedPassengers = clonedPassengers.filter(
          passenger => passenger.username.toLowerCase().includes(
            searchBoxFilters.passengers.toLowerCase()
          )
        )
      }
      if (searchBoxFilters.routes) {
        clonedRoutes = clonedRoutes.filter(
          trip => trip.toLowerCase().includes(
            searchBoxFilters.routes.toLowerCase()
          )
        )
      }


       //console.log(clonedDrivers)
     //  console.log(driversFiltered.username)
       //console.log(clonedPassengers)
       //console.log(clonedRoutes)
       //console.log(searchBoxFilters)

      

      return {
        drivers: clonedDrivers,
        passengers: clonedPassengers,
        routes: clonedRoutes,
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
       * Filter drivers/passengers/routes by start and end date
       * 
       *
       * USE THESE VARIABLES
       * `drivers`: contains an array of driver info
       * `passengers`: contains an array of passenger info
       * `routes`: contains an array of trip info
       * startDate: self-explanatory
       * endDate: self-explanatory
       * 
       * TIPS: Use Date.parse(..) to convert string date to number date
       *
       * UNCOMMENT BELOW TO SEE WHAT THESE VARIABLES CONTAIN (or go to dummy-data.js)
       */
      //console.log(drivers)
      //console.log(passengers)
      //console.log(routes)
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
		return {drivers, passengers, routes}
		}
		else if(startDate !== null && endDate == null){
			for (count = 0; count < routes.length; count ++){
				Sdate = new Date(routes[count]['startdate']);
				console.log(Starto);
				console.log(startDate.getMonth() == Sdate.getMonth());
				if(Sdate < Starto){
					routes.splice(count, 1);
				}
			}
		}
		else if(startDate == null && endDate !== null){
			for (count = 0; count < routes.length; count ++){
				Edate = new Date(routes[count]['enddate']);
				if(Edate > Endo){
					routes.splice(count, 1);
				}
			}
		}		
		else{
			for (count = 0; count < routes.length; count ++){
				Sdate = new Date(routes[count]['startdate']);
				Edate = new Date(routes[count]['enddate']);
				if(Sdate < Starto || Edate > Endo){
					routes.splice(count, 1);
				}
			}		
    }
		
    return {drivers, passengers, routes}
    */

      return {
        drivers: store.data.drivers,
        passengers: store.data.passengers,
        routes: clonedRoutesBetweenDates,
      }
    },
    sortList({drivers, passengers, routes}, sortBy) {
      let clonedDrivers = [...drivers]
      let clonedPassengers = [...passengers]
      let clonedRoutes = [...routes]      

      // console.log(routes)
      // console.log(clonedRoutes)

      if (sortBy === 'status') {
        // Sort by alphabetical order of username (`username`)
        clonedDrivers.sort((a, b) => a.username.localeCompare(b.username))
        clonedPassengers.sort((a, b) => a.username.localeCompare(b.username))
        clonedRoutes.sort()//(a, b) => a.startLocation.localeCompare(b.startLocation))

      } else if (sortBy === 'rankings') {
        // Sort by most trips taken (`tripnumber`) 
        //clonedDrivers.sort((a, b) => a.tripnumber.localeCompare(b.tripnumber));
        //following methods do not work --> shall work on it lataaaa
        clonedDrivers.sort(function(a, b){
          return b.tripnumber - a.tripnumber
        })
        clonedPassengers.sort(function(a, b){
          return b.tripnumber - a.tripnumber
        })
        clonedRoutes.sort(function(a, b){
          return a - b
        })
      }

      // console.log(clonedRoutes)
      // console.log(routes)

      return {
        drivers: clonedDrivers, 
        passengers: clonedPassengers, 
        routes: clonedRoutes,
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
