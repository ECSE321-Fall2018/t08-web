import axios from '@/axios.js'
import _ from 'lodash'

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
    //...dummyData, // We don't actually use the dummy data anymore, it gets overwritten by backend data
    drivers: [],
    passengers: [],
    routes: [],
    activeDrivers: [],
    activePassengers: [],
    frequentDrivers: [],
    frequentPassengers: [],
    popularRoutesBetweenDates: [],
    activeRoutes: [],
    allRoutes: [],
    adminDetails: {},
    pageWidth: null,
    darkMode: false,
  },
  computed: {
    inactiveUsersDisplay() {
      return store.data.showInactiveUsers
    },
    statusFilters() {
      const {searchBoxFilter, switchFilter, sortList} = store.filters
      const {
        drivers,
        passengers,
        activeDrivers,
        activePassengers,
        activeRoutes,
        allRoutes,
        showInactiveUsers,
        searchBoxFilters
      } = store.data
      let ranking = false

      return searchBoxFilter(
          switchFilter(
            drivers, 
            passengers, 
            activeDrivers,
            activePassengers,
            activeRoutes,
            allRoutes,
            showInactiveUsers
          ),
          searchBoxFilters,
          ranking
        )
    },
    rankingsFilters() {
      const {searchBoxFilter, sortList} = store.filters
      const {frequentDrivers, frequentPassengers, popularRoutesBetweenDates, searchBoxFilters} = store.data
      let drivers = frequentDrivers
      let passengers = frequentPassengers
      let routes = popularRoutesBetweenDates
      let ranking = true
      return searchBoxFilter(
        sortList({drivers, passengers, routes}, 'rankings'),
        searchBoxFilters, ranking)
/*
      return sortList(
        searchBoxFilter({drivers, passengers, routes}, searchBoxFilters),
        'rankings'
      )
      */
    },
  },
  filters: {
    switchFilter(
      drivers, 
      passengers, 
      activeDrivers,
      activePassengers,
      activeRoutes,
      allRoutes,
      showInactiveUsers
    ) {
      // GENERAL INSTRUCTIONS
      // Filter drivers/passengers/routes by whether they are active or not

      // VARIABLES (ALL ARRAYS)
      let clonedDrivers = [...drivers] // contains the drivers
      let clonedPassengers = [...passengers] // contains the passengers
      let clonedActivePassengers = [...activePassengers]
      let clonedActiveDrivers = [...activeDrivers]
      let clonedActiveRoutes = [...activeRoutes] // contains the active routes
      let clonedAllRoutes = [...allRoutes]
    
      // SPECIFIC INSTRUCTIONS
      // I want clonedDrivers to only contain drivers that are also in clonedActiveUsersAndTrips
      // Same for clonedPassengers
      // I want clonedRoutesBetweenDates to only contains routes which have the same start location and last stop as one of the trips in clonedActiveUsersAndTrips

      if (showInactiveUsers) {

        return {
          drivers: clonedDrivers,
          passengers: clonedPassengers,
          routes: clonedAllRoutes,
        }
      } else {
        return {
          drivers: clonedActiveDrivers,
          passengers: clonedActivePassengers,
          routes: clonedActiveRoutes,
        }
      }
      
    }, 
    searchBoxFilter({drivers, passengers, routes}, searchBoxFilters, ranking) {
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
        if(ranking) {
          clonedRoutes = clonedRoutes.filter(
            trip => (trip.path.toLowerCase()).includes(
              searchBoxFilters.routes.toLowerCase()
            )
          )
        } else {
          clonedRoutes = clonedRoutes.filter(
            trip => (trip.startLocation.toLowerCase()+ ' - ' + trip.stops.split(/[;]+/).pop().toLowerCase()).includes(
              searchBoxFilters.routes.toLowerCase()
            )
          )
        }
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
      

      clonedDrivers = _.orderBy(clonedDrivers, ['tripnumber'], ['desc'])
      clonedPassengers = _.orderBy(clonedPassengers, ['tripnumber'], ['desc'])
      clonedRoutes = _.orderBy(clonedRoutes, ['tripnumber'], ['desc'])

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
      let that = this

      if (startDate === null) {
        startDate = 0
      }

      if (endDate === null) {
        endDate = 3000000000000
      }

      startDate = Math.round(startDate / 1000)
      endDate = Math.round(endDate / 1000)
      
      store.data.activePassengers = []
      /*
      axios.post(`/trip/usertripstatus?username=${username}&password=${password}&status=0&role=Passenger`)
        .then(jsonObject => {
          store.data.activePassengers = jsonObject.data
          console.log(jsonObject.data)
        })
        .catch(() => {
          store.data.activePassengers = []
        })
  */
      //Gets all users
      store.data.drivers = []
      store.data.passengers = []
      axios.post(`/user/userlist?username=${username}&password=${password}`)
      .then(jsonObject => {
          for (let user of jsonObject.data) {
            if (user.role === 'Driver') {
              store.data.drivers.push(user)
            }
            if (user.role === 'Passenger') {
              store.data.passengers.push(user)
            }
          }
      })
      .catch((error) => {
        console.log(error)
        store.data.drivers = []
        store.data.passengers = []
        })

      //Gets all trips
      store.data.allRoutes = []
      axios.post(`/trip/utripslist?username=${username}&password=${password}`)
        .then(jsonObject => {
          for (let trip of jsonObject.data) {
            store.data.allRoutes.push(trip)
          }
        })
        .catch((error) => {
          console.log(error)
          store.data.allRoutes = []
        })
      
      //Gets only passengers currently on trip  
      store.data.activePassengers = []
      axios.post(`/trip/usertripstatus?username=${username}&password=${password}&status=0&role=Passenger`)
      .then(jsonObject => {
          for (let user of jsonObject.data) {
            store.data.activePassengers.push(user)
          }
      })
      .catch((error) => {
        console.log(error)
        store.data.activePassengers = []
      })

      //Gets only drivers currently on trip  
      store.data.activeDrivers = []
      axios.post(`/trip/usertripstatus?username=${username}&password=${password}&status=0&role=Driver`)
      .then(jsonObject => {
          for (let user of jsonObject.data) {
            store.data.activeDrivers.push(user)
          }
      })
      .catch((error) => {
        console.log(error)
        store.data.activeDrivers = []
      })
      
      //Gets only trips currently ongoing
      store.data.activeRoutes = []
      axios.post(`/trip/findtripstatus?username=${username}&password=${password}&status=0`)
      .then(jsonObject => {
          for (let trip of jsonObject.data) {
            store.data.activeRoutes.push(trip)
          }
      })
      .catch((error) => {
        store.data.activeRoutes = []
      })

      //Gets popular routes between dates
      store.data.popularRoutesBetweenDates = []
      axios.post(`/trip/popularroute?username=${username}&password=${password}&startdate=${startDate}&enddate=${endDate}`)
      .then(jsonObject => {
        for (let trip of jsonObject.data.data) {
          let route = trip.split(";")
          let routeBetweenDate = {
            tripnumber: route[1],
            path: route[0]
          }
          store.data.popularRoutesBetweenDates.push(routeBetweenDate)
        }
      })
      .catch((error) => {
          console.log(error)
          store.data.popularRoutesBetweenDates = []
      })

      //Gets user rankings between dates for passenger
      store.data.frequentPassengers = []
      axios.post(`/trip/ranking?username=${username}&password=${password}&startdate=${startDate}&enddate=${endDate}&role=Passenger`)
      .then(jsonObject => {
        for (let user of jsonObject.data) {
          store.data.frequentPassengers.push(user)
        }
      })
      .catch((error) => {
          console.log(error)
          store.data.frequentPassengers = []
      })

      //Gets user rankings between dates for driver
      store.data.frequentDrivers = []
      axios.post(`/trip/ranking?username=${username}&password=${password}&startdate=${startDate}&enddate=${endDate}&role=Driver`)
      .then(jsonObject => {
        for (let user of jsonObject.data) {
          store.data.frequentDrivers.push(user)
        }
      })
      .catch((error) => {
          console.log(error)
          store.data.frequentDrivers = []
      })
    }
  }
}

// You can access the variable store directly in the console
// (for debugging purposes)
// window.store = store // MAKE SURE YOU DELETE THIS LINE AFTER THE PROEJCT IS FINISHED (FOR SECURITY REASONS)

export default store
