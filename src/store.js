import dummyData from '@/dummy-data.js'

let store = {
  data: {
    currentPageName: 'login',
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
        currentPageName,
        searchBoxFilters,
        showInactiveUsers, 
        startDate, 
        endDate,
        drivers, 
        passengers, 
        trips, 
        activeUsersAndTrips
      } = store.data
      const {searchBoxFilter, switchFilter, dateFilter, sortList} = store.filters

      return sortList(
        dateFilter(
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
        ),
        currentPageName
      )
    }
  },
  filters: {
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
       * TIPS: Use Date.parse(..) to convert string date to number date
       *
       * UNCOMMENT BELOW TO SEE WHAT THESE VARIABLES CONTAIN (or go to dummy-data.js)
       */
      //console.log(drivers)
      //console.log(passengers)
      //console.log(trips)
      //console.log(startDate)
      //console.log(endDate)
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
    },
    sortList({drivers, passengers, trips}, currentPageName) {
      
      if (currentPageName === 'status') {
        // Sort by alphabetical order of username (`username`)
        drivers.sort((a, b) => a.username.localeCompare(b.username))
        passengers.sort((a, b) => a.username.localeCompare(b.username))
        trips.sort((a, b) => a.startLocation.localeCompare(b.startLocation))

      } else if (currentPageName === 'rankings') {
        // Sort by most trips taken (`tripnumber`) 
        //drivers.sort((a, b) => a.tripnumber.localeCompare(b.tripnumber));
        drivers.sort(function(a, b){
          return a.tripnumber - b.tripnumber
        })
        passengers.sort(function(a, b){
          return a.tripnumber - b.tripnumber
        })
      }

      return {drivers, passengers, trips}
    },
  },
  methods: {
    changePageName(newPageName) {
      store.data.currentPageName = newPageName
    },
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
