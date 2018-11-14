import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Rankings from './views/Rankings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      component: Login
    },
    {
      path: '/login',
      name: 'login2',
      component: Login
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: Rankings
    },
    {
      path: '/main',
      name: 'main',
      component: () => import(/* webpackChunkName: "main" */ './views/Main.vue')
    }
  ]
})
