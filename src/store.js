import dummyData from '@/dummy-data.js'

let store = {
  data: {
    username: null,
    password: null,
    ...dummyData,
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