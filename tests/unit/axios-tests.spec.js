import store from '@/store.js'
import axios from '@/axios.js'

test('Axios base URL is correct', () => {
  expect(axios.defaults.baseURL).toBe('https://rideshare08.herokuapp.com/api/')
})