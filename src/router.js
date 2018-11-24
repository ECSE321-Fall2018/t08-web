import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Main from  './views/Main'
import PageNotFound from './views/PageNotFound'

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
      name: 'login',
      component: Login,
    },
    {
      path: '/status',
      name: 'status',
      component: Main,
      props: {pageName: 'status'},
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: Main,
      props: {pageName: 'rankings'},
    },
    {
      path: '/settings',
      name: 'settings',
      component: Main,
      props: {pageName: 'settings'},
    },
    {
      path: "/*",
      name: 'page not found',
      component: PageNotFound,
    },
  ]
})
