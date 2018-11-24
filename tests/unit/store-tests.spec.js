import {shallowMount} from '@vue/test-utils'
import Dashboard from '@/components/Main/Dashboard.vue'
import Settings from '@/components/Settings.vue'
import store from '@/store.js'
import dummyData from '@/dummy-data.js'

// TEST CASES FOR THE STORE

test('store.computed.showInactiveUsers returns the right value', () => {
  expect(store.computed.inactiveUsersDisplay()).toBe(true)
})

test('store.pageWidth is null initially', () => {
  expect(store.data.pageWidth).toBe(null)
})

describe('Dashboard.vue', () => {
  it('store.pageWidth adapts to resized window', () => {
    const wrapper = shallowMount(Dashboard, {
      propsData: {
        pageName: 'rankings',
      },
      stubs: ['mu-flex', 'mu-icon', 'mu-button'],
    })

    expect(store.data.pageWidth).toBe(window.innerWidth)
  })
})

/*
describe('Settings.vue', () => {
  it('Dark mode can be enabled', () => {
    const wrapper = shallowMount(Dashboard, {
      stubs: ['mu-flex', 'mu-icon', 'mu-button', 'mu-text-field', 'mu-flex'],
    })
    wrapper.find('mu-button', ).trigger('click')

    expect(store.data.pageWidth).toBe(window.innerWidth)
  })
})
*/

test('Username can be set', () => {
  store.methods.setUsername('shaneeee')
  expect(store.data.username).toBe('shaneeee')
})

test('Password can be set', () => {
  store.methods.setPassword('iamthesenate999')
  expect(store.data.password).toBe('iamthesenate999')
})

test('We can filter and sort statuses even if there is no data', () => {
  expect(store.computed.statusFilters()).toEqual({
    drivers: [],
    passengers: [],
    routes: [],
  })
})

test('We can filter and sort rankings even if there is no data', () => {
  expect(store.computed.rankingsFilters()).toEqual({
    drivers: [],
    passengers: [],
    routes: [],
  })
})

test('Testing sortList for rankings', () => {
  expect(store.filters.sortList(
    {
      drivers: dummyData.drivers,
      passengers: dummyData.passengers,
      routes: dummyData.routesBetweenDates
    }, 'rankings'
  )).toEqual({
    'drivers': [
      {
        'emailAddress': 'ali4glory@yahoo.com',
        'fullName': 'Thomas Yin',
        'password': 'lordoftheroses',
        'role': 'Driver',
        'status': true,
        'tripnumber': 10,
        'userID': 6,
        'username': 'Prof Brenda',
      },
      {
        'emailAddress': 'yunhao@pornhub.gov',
        'fullName': 'Yunhao',
        'password': 'goshujinsama',
        'role': 'Driver',
        'status': true,
        'tripnumber': 6,
        'userID': 41,
        'username': 'NeilArmstrongRotativeAcceleration',
      },
      {
        'emailAddress': 'yongjungsong@mail.mcgill.ca',
        'fullName': 'Yong Jung Song',
        'password': 'dissapointment',
        'role': 'Driver',
        'status': true,
        'tripnumber': 4,
        'userID': 23,
        'username': 'Weeb',
      },
      {
        'emailAddress': 'ali4glory@yahoo.com',
        'fullName': 'Hyacinth Ali',
        'password': 'strongman',
        'role': 'Driver',
        'status': true,
        'tripnumber': 2,
        'userID': 47,
        'username': 'Hyacinth',
      },
      {
        'emailAddress': 'dummyemail@email.com',
        'fullName': 'Dummy Name',
        'password': 'dummypass',
        'role': 'Driver',
        'status': true,
        'tripnumber': 1,
        'userID': 42,
        'username': 'dummyuser',
      },
    ],
    'passengers': [
      {
        'emailAddress': 'zhao.lyon@mail.mcgill.ca',
        'fullName': 'Zhao Lyon',
        'password': 'mvp12345',
        'role': 'Passenger',
        'status': true,
        'tripnumber': 14,
        'userID': 99,
        'username': 'Liang Zai',
      },
      {
        'emailAddress': 'shane.mcintosh@mail.mcgill.ca',
        'fullName': 'Shane McInTosh',
        'password': 'designpatterns',
        'role': 'Passenger',
        'status': true,
        'tripnumber': 2,
        'userID': 346,
        'username': 'Shane Pizza',
      },
      {
        'emailAddress': 'heynow@urarockstar.com',
        'fullName': 'Somebody Once Told Me',
        'password': 'theworldwasgonnarollme',
        'role': 'Passenger',
        'status': true,
        'tripnumber': 1,
        'userID': 246,
        'username': 'smashmouth',
      },
      {
        'emailAddress': 'dummypass@dummy.com',
        'fullName': 'Dummy Passenger',
        'password': 'password',
        'role': 'Passenger',
        'status': true,
        'tripnumber': 0,
        'userID': 46,
        'username': 'dummypassenger',
      },
      {
        'emailAddress': 'dummypass@dummy.com',
        'fullName': 'Dummy Passenger',
        'password': 'password',
        'role': 'Passenger',
        'status': true,
        'tripnumber': 0,
        'userID': 146,
        'username': 'dummypassenger2',
      },
    ],
    'routes': [
      'Montreal - Ottawa;1',
      'Montreal - Laval;2',
      'Gotham - Metropolis;10',
      'Lumbridge - Falador;4',
      'Barrows - God Wars Dungeon;6',
      'Glasgow - Edinbrugh;1',
      'London - Liverpool;1',
      'Montreal - Niagara;1',
      'Montreal - Sherbrooke;1',
      'Vermillion City - Cinnabar Island;2',
      'Busan - Pyongyang;2',
      'Hong Kong - Shenzhen;5',
      'Orlando - Miami;34',
    ],
  })
})