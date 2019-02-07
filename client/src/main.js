// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bulma/css/bulma.min.css'
import {
  faHome,
  faUser,
  faKey,
  faTasks,
  faCog,
  faCogs,
  faSignOutAlt,
  faWallet,
  faCreditCard,
  faCashRegister,
  faTools,
  faChartBar,
  faPizzaSlice,
  faUsers,
  faUserFriends,
  faHamburger,
  faTruckLoading,
  faUtensils
} from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false

library.add(faHome)
library.add(faUser)
library.add(faKey)
library.add(faTasks)
library.add(faCog)
library.add(faCogs)
library.add(faSignOutAlt)
library.add(faWallet)
library.add(faCreditCard)
library.add(faCashRegister)
library.add(faTools)
library.add(faChartBar)
library.add(faPizzaSlice)
library.add(faUsers)
library.add(faUserFriends)
library.add(faHamburger)
library.add(faTruckLoading)
library.add(faUtensils)

Vue.component('font-awesome-icon', FontAwesomeIcon)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
