import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Status from './views/Status.vue'
import Rankings from './views/Rankings.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      component: Login,
    },
    {
      path: '/login',
      name: 'login2',
      component: Login,
    },
    {
      path: '/status',
      name: 'status',
      component: Status,
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: Rankings,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ]
})
