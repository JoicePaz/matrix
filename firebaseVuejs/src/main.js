import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'

Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
