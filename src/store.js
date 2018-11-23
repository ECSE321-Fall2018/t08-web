import dummyData from '@/dummy-data.js'
import axios from '@/axios.js'

let store = {
  data: {
    username: null,
    password: null,
    searchBoxFilters: {
      drivers: null,
      passengers: null,
      routes: null,
    }, // since there are 3 search boxes
    showInactiveUsers: true,
    startDate: null,
    endDate: null,
    ...dummyData, // We don't actually use the dummy data anymore, it gets overwritten by backend data
    adminDetails: {},
    pageWidth: null,
    darkMode: false,
  },
  computed: {
    statusFilters() {
      const {searchBoxFilter, switchFilter, sortList} = store.filters
      const {
        drivers,
        passengers,
        activeUsersAndTrips,
        routesBetweenDates,
        showInactiveUsers,
        searchBoxFilters
      } = store.data

      return sortList(
        searchBoxFilter(
          switchFilter(
            drivers, 
            passengers, 
            routesBetweenDates, 
            activeUsersAndTrips, 
            showInactiveUsers
          ),
          searchBoxFilters
        ),
        'status'
      )
    },
    rankingsFilters() {
      const {searchBoxFilter, sortList} = store.filters
      const {drivers, passengers, routesBetweenDates, searchBoxFilters} = store.data

      return sortList(
        searchBoxFilter({drivers, passengers, routesBetweenDates}, searchBoxFilters),
        'rankings'
      )
    },
  },
  filters: {
    switchFilter(
      drivers, 
      passengers, 
      routesBetweenDates, 
      activeUsersAndTrips, 
      showInactiveUsers
    ) {
      // GENERAL INSTRUCTIONS
      // Filter drivers/passengers/routes by whether they are active or not

      // VARIABLES (ALL ARRAYS)
      let clonedDrivers = [...drivers] // contains the drivers
      let clonedPassengers = [...passengers] // contains the passengers
      let clonedRoutesBetweenDates = [...routesBetweenDates] // contains the active routes
      let clonedActiveUsersAndTrips = [...activeUsersAndTrips] // contains the active users and trips

      // SPECIFIC INSTRUCTIONS
      // I want clonedDrivers to only contain drivers that are also in clonedActiveUsersAndTrips
      // Same for clonedPassengers
      // I want clonedRoutesBetweenDates to only contains routes which have the same start location and last stop as one of the trips in clonedActiveUsersAndTrips

      // Check what these variables contain
      // console.log(clonedDrivers)
      // console.log(clonedPassengers)
      // console.log(clonedRoutesBetweenDates)
      // console.log(clonedActiveUsersAndTrips)
      // console.log(clonedPassengers)

      if (!showInactiveUsers) {
        // INSERT CODE HERE
		let fakeDrivers = []
		let fakePassengers = []
		let fakeTrips = []
		let count
		let counter
		for(count = 0; count < clonedDrivers.length; count ++){
			for(counter = 0; counter < clonedActiveUsersAndTrips.length; counter++){
				if(clonedDrivers[count]['username'].toLowerCase() === clonedActiveUsersAndTrips[counter]['username'].toLowerCase()){
					fakeDrivers.push(cloneDrivers[count])
				}
			}		
		}
		
		for(count = 0; count < clonedPassengers.length; count ++){
			for(counter = 0; counter < clonedActiveUsersAndTrips.length; counter++){
				if(clonedPassengers[count]['username'].toLowerCase() === clonedActiveUsersAndTrips[counter]['username'].toLowerCase()){
					fakePassengers.push(clonedPassengers[count])
				}
			}		
		}
		
		for(count = 0; count < clonedRoutesBetweenDates.length - 1; count ++){
			for(counter = 0; counter < clonedActiveUsersAndTrips.length - 1; counter++){
				if(clonedRoutesBetweenDates[count].split('-')[0].toLowerCase().trim() == clonedActiveUsersAndTrips[counter]['startLocation'].toLowerCase().trim()){
					if(clonedRoutesBetweenDates[count].split('-')[1].split(';')[0].toLowerCase().trim() == clonedActiveUsersAndTrips[counter]['stops'].split(';')[clonedActiveUsersAndTrips[counter]['stops'].split(';').length - 1].toLowerCase().trim()){
						fakeTrips.push(clonedRoutesBetweenDates[count])
					}
				}	
			}		
		}		
		
		return {
			drivers: fakeDrivers,
			passengers: fakePassengers,
			routes: fakeTrips,
		}
      }

      return {
        drivers: clonedDrivers,
        passengers: clonedPassengers,
        routes: clonedRoutesBetweenDates,
      }
    },
    searchBoxFilter({drivers, passengers, routes}, searchBoxFilters) {
      let clonedDrivers = [...drivers]
      let clonedPassengers = [...passengers]
      let clonedRoutes = [...routes]

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

      return {
        drivers: clonedDrivers,
        passengers: clonedPassengers,
        routes: clonedRoutes,
      }
    },
    sortList({drivers, passengers, routes}, sortBy) {
      let clonedDrivers = [...drivers]
      let clonedPassengers = [...passengers]
      let clonedRoutes = [...routes]    
      
      // INSTRUCTIONS
      // If sortBy === 'status', sort the above cloned variables in alphabetical order of their username
      // If sortBy === 'rankings', sort the above cloned variables in descending order of their tripnumber
      
      // CHECK WHAT THEY CONTAIN
      // console.log(clonedDrivers)
      // console.log(clonedPassengers)
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
      }

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
    updateData() {
      let {username, password, startDate, endDate} = store.data

      if (startDate === null) {
        startDate = 0
      }

      if (endDate === null) {
        endDate = 3000000000000
      }

      startDate = Math.round(startDate / 1000)
      endDate = Math.round(endDate / 1000)

      axios.post(`/trip/usertripstatus?username=${username}&password=${password}&status=0&role=Passenger`)
        .then(jsonObject => {
          store.data.activeUsersAndTrips = jsonObject.data
        })
        .catch(() => {
          store.data.activeUsersAndTrips = []
        })
  
      axios.post(`/trip/ranking?username=${username}&password=${password}&startdate=${startDate}&enddate=${endDate}&role=Driver`)
        .then(jsonObject => {
          store.data.drivers = jsonObject.data
  
          axios.post(`/user/userlist?username=${username}&password=${password}&startdate=${startDate}&enddate=${endDate}&role=Driver`)
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
  
      axios.post(`/trip/ranking?username=${username}&password=${password}&startdate=${startDate}&enddate=${endDate}&role=Passenger`)
        .then(jsonObject => {
          store.data.passengers = jsonObject.data
  
          axios.post(`/user/userlist?username=${username}&password=${password}&startdate=${startDate}&enddate=${endDate}&role=Passenger`)
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
  
      axios.post(`/trip/popularroute?username=${username}&password=${password}&startdate=${startDate}&enddate=${endDate}`)
        .then(jsonObject => {
          store.data.routesBetweenDates = jsonObject.data.data
        })
        .catch(() => {
          store.data.routesBetweenDates = []
        })
    }
  }
}

// You can access the variable store directly in the console
// (for debugging purposes)
window.store = store // MAKE SURE YOU DELETE THIS LINE AFTER THE PROEJCT IS FINISHED (FOR SECURITY REASONS)

export default store
