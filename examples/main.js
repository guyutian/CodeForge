import Vue from 'vue'
import App from './App.vue'
import store from './store'
import P8UI from '../src/index'


Vue.config.productionTip = false

Vue.use(P8UI)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
