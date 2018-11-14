import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Muse UI imports
import 'muse-ui/lib/styles/base.less'
import {Button, Checkbox, DateInput, Form, Grid, Paper, Switch, TextField, theme} from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import * as colors from 'muse-ui/lib/theme/colors'

// Muse UI use components
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(DateInput)
Vue.use(Form)
Vue.use(Grid)
Vue.use(Paper)
Vue.use(Switch)
Vue.use(TextField)

// Muse UI add theme
theme.add('custom-theme', {
  primary: colors.indigo,
  secondary: colors.pinkA200
})

// Disable tips
Vue.config.productionTip = false

// Mount Vue router
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// var history = require('connect-history-api-fallback');

