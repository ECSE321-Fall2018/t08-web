import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// Muse UI imports
import 'muse-ui/lib/styles/base.less'
import {Button, Checkbox, DateInput, Form, Grid, Icon, Paper, Switch, TextField, theme} from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import * as colors from 'muse-ui/lib/theme/colors'

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
theme.add('teal', {
  primary: '#009688',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#ffeb3b',
});

theme.use('teal');

// Disable tips
Vue.config.productionTip = false

// Mount Vue router
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// let history = require('connect-history-api-fallback');

