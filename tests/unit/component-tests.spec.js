import {shallowMount} from '@vue/test-utils'
import Link from '@/components/Link.vue'
import LoginForm from '@/components/LoginForm.vue'
import RankingsDatePicker from '@/components/RankingsDatePicker.vue'
import store from '@/store.js'
import dummyData from '@/dummy-data.js'

// COMPONENT TESTING

describe('Link.vue', () => {
  it('Props are passed properly for link', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        pageName: 'rankings',
        text: 'Rankings',
        iconName: 'format_list_bulleted',
      },
      stubs: [
        'mu-icon',
        'router-link',
      ],
    })
    expect(wrapper.vm.pageName).toMatch('rankings')
    expect(wrapper.vm.text).toMatch('Rankings')
    expect(wrapper.vm.iconName).toMatch('format_list_bulleted')
  })
})

describe('LoginForm.vue', () => {
  it('Data is processed properly for login form', () => {
    const wrapper = shallowMount(LoginForm, {
      stubs: [
        'mu-form',
        'mu-form-item',
        'mu-text-field',
        'mu-icon',
        'mu-snackbar',
        'mu-button',
        'router-link',
      ]
    })
    expect(wrapper.vm.visibility).toBe(false)
    expect(wrapper.vm.formDetails).toEqual({
      username: '',
      password: '',
    })
    expect(wrapper.vm.color).toEqual({
      color: 'error',
      message: 'Invalid administrator username or password.',
      open: false,
      timeout: 5000,
    })
  })
})

describe('RankingsDatePicker.vue', () => {
  it('The dates and labels on the calendar for the date picker are all present', () => {
    const wrapper = shallowMount(RankingsDatePicker, {
      propsData: {
        label: 'Start Date',
        type: 'startDate',
      },
      stubs: ['mu-date-input']
    })

    const date = new Date('Fri Nov 23 2018 20:50:20 GMT-0500 (Eastern Standard Time)')

    expect(wrapper.vm.enDateFormat.formatDisplay(date)).toMatch('Fri, Nov 23')
    expect(wrapper.vm.enDateFormat.formatMonth(date)).toMatch('November 2018')
    expect(wrapper.vm.enDateFormat.getWeekDayArray(2)).toEqual(['T', 'W', 'T', 'F', 'S', 'S', 'M'])
    expect(wrapper.vm.enDateFormat.getMonthList(date)).toEqual(
      [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    )
  })
})