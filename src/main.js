import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

new Vue({
  vuetify,
}).$mount('#app')
new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
})
