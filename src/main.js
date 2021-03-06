import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'

Vue.config.productionTip = false

Vue.use(iView, {
  transfer: true,
  size: 'large'
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
