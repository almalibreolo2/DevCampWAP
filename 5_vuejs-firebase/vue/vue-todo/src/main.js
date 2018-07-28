import Vue from 'vue'
import App from './App.vue'
// var App = require('./App.vue')   // 위와 같은 코드임.

// 다음시간에..
// var bus = new Vue({
//   data: {
//     msg: 'Event Bus'
//   }
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
// // 위의 코드와 같음
// new Vue({
//   el: '#app',
//   render: function (h) {    // h는 hyperScript의 약자. 통상적으로 이렇게 씀
//     return h(App, data)
//   }
// })