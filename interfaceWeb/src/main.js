import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import VueTheMask from 'vue-the-mask'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueTheMask)
Vue.use(BootstrapVue) 
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  VueTheMask,
  render: h => h(App),
}).$mount('#app')
