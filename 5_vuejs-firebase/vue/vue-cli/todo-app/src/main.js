import Vue from 'vue'
import _ from 'lodash'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

Vue.use(_)
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
