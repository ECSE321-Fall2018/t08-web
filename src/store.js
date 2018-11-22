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
    ...dummyData, // GO TO dummy-data.js TO SEE THE DUMMY DATA
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

        function compareNumbers(a, b) {
          return a - b;
        }
        clonedDrivers.sort(compareNumbers);

        // can't use this cuz it's an array with diff properties and also other unknown reasons
        // clonedDrivers.sort((a, b) => a - b); 
        // clonedDrivers.sort((a, b) => a.SortOrder - b.SortOrder);
        // can't use this bc we are sorting numbers, not Strings
        //clonedDrivers.sort((a, b) => a.tripnumber.localeCompare(b.tripnumber));

        //-------try 1-------
        // This seems like a good solution, but somehow it doesn't work which is pissing me off
        // function sortProperties(obj){
        //   // convert object into array
        //   var sortable=[];
        //   for(var key in obj)
        //     if(obj.hasOwnProperty(key))
        //       sortable.push([key, obj[key]]); // each item is an array in format [key, value]
          
        //   // sort items by value
        //   sortable.sort(function(a, b){
        //     return a[1]-b[1]; // compare numbers
        //   });
        //   return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
        // }
        // clonedDrivers = sortProperties(clonedDrivers);
        // clonedPassengers = sortProperties(clonedPassengers);
        // clonedTrips = sortProperties(clonedTrips);

        //-------try 2-------
        // function compare(a, b) {
        // // Use toUpperCase() to ignore character casing
        //   const genreA = a.genre.toUpperCase();
        //   const genreB = b.genre.toUpperCase();

        //-------try 3-------
        // sort_array_by = function(field, reverse, pr){
        //   reverse = (reverse) ? -1 : 1;
        //   return function(a,b){
        //     a = a[field];
        //     b = b[field];
        //     if (typeof(pr) != 'undefined'){
        //       a = pr(a);
        //       b = pr(b);
        //     }
        //     if (a<b) return reverse * -1;
        //     if (a>b) return reverse * 1;
        //     return 0;
        //   }
        // }
        // clonedDrivers.sort(sort_array_by(tripnumber, true, function(a){
        //   return new tripnumber(a);
        // }));
        // clonedDrivers.sort(sort_array_by(tripnumber, true, function(a){
        //   return parseInt(a);
        // }));

        //OG (that worked before cloning everything)
        // clonedDrivers.sort(function(a, b){
        //   return b.tripnumber - a.tripnumber
        // })
        // clonedPassengers.sort(function(a, b){
        //   return b.tripnumber - a.tripnumber
        // })
        // clonedTrips.sort(function(a, b){
        //   return a - b
        // })

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
