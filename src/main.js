import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import storage from './utils/storage'

// require plugin
import '@/assets/js/rem'
import MintUI from 'mint-ui'
import Cookie from '@/utils/cookie.js'
import JsCookie from 'js-cookie'

// require styles
import '@/assets/css/reset.less'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(storage)
Vue.use(Cookie, JsCookie)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
