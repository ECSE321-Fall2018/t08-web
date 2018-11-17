import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// Muse UI imports
import 'muse-ui/lib/styles/base.less'
import {Button, Checkbox, DateInput, Form, Grid, Icon, Paper, Switch, TextField, theme} from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import customTheme from './theme.js'

// Muse UI use components
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(DateInput)
Vue.use(Form)
Vue.use(Grid)
Vue.use(Icon)
Vue.use(Paper)
Vue.use(Switch)
Vue.use(TextField)

// Muse UI add theme
theme.add('customTheme', customTheme);

theme.use('customTheme');

// Disable tips
Vue.config.productionTip = false

// Mount Vue router
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// let history = require('connect-history-api-fallback');

