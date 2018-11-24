import Vue from 'vue'
import App from './App'
import router from './router'
// Muse UI imports
import 'muse-ui/lib/styles/base.less'
import VueLodash from 'vue-lodash'
import {
  Button, 
  Checkbox, 
  DateInput, 
  Dialog, 
  Form, 
  Grid, 
  Helpers,
  Icon, 
  Paper, 
  Snackbar,
  Switch, 
  TextField, 
  theme
} from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
import {customLightTheme, customDarkTheme} from './theme.js'

// Muse UI use components
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(DateInput)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(Grid)
Vue.use(Helpers)
Vue.use(Icon)
Vue.use(Paper)
Vue.use(Snackbar)
Vue.use(Switch)
Vue.use(TextField)

// Muse UI add theme
theme.add('light', customLightTheme);
theme.add('dark', customDarkTheme);

theme.use('light');

// Vue Lodash
const options = { name: 'lodash' } // customize the way you want to call it
Vue.use(VueLodash, options) // options is optional

// Disable tips
Vue.config.productionTip = false

// Mount Vue router
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// let history = require('connect-history-api-fallback');

