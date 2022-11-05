import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import VueTheMask from 'vue-the-mask'
import store from './store.js'


Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  VueTheMask,
  store,
  render: h => h(App),
}).$mount('#app')
