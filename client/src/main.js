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
  faPizzaSlice
} from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false

library.add(faHome)
library.add(faUser)
library.add(faKey)
library.add(faPizzaSlice)

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
