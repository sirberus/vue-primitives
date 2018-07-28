import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VuePrimitives from '../../src/index.js'

Vue.config.productionTip = false

Vue.use(VuePrimitives.plugin) // the plugin registers a span named txt and a div named box
VuePrimitives.createPrimitive(Vue, 'hr', 'bar') // This is how you make your own

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
