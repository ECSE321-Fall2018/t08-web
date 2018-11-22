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

      // console.log(trips)
      // console.log(clonedTrips)

      if (sortBy === 'status') {
        // Sort by alphabetical order of username (`username`)
        clonedDrivers.sort((a, b) => a.username.localeCompare(b.username))
        clonedPassengers.sort((a, b) => a.username.localeCompare(b.username))
        clonedTrips.sort()//(a, b) => a.startLocation.localeCompare(b.startLocation))

      } else if (sortBy === 'rankings') {
        // Sort by most trips taken (`tripnumber`) 
        //clonedDrivers.sort((a, b) => a.tripnumber.localeCompare(b.tripnumber));
        //following methods do not work --> shall work on it lataaaa

        function compareNumbers(a, b) {
          return a - b;
        }
        clonedDrivers.sort(compareNumbers);

        // can't use this cuz it's an array with diff properties and also other unknown reasons
        // clonedDrivers.sort((a, b) => a - b); 
        // clonedDrivers.sort((a, b) => a.SortOrder - b.SortOrder);

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
      }

      // console.log(clonedTrips)
      // console.log(trips)

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
