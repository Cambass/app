import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import router from '@/router'
import { dollarfilter } from '@/filters'

Vue.filter('dollar', dollarfilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
