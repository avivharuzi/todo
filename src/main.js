import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

// Store
import { store } from '@/store/index'

// Styles
import '@/scss/main.scss'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
