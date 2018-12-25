import Vue from 'vue'
import { createPrimitive } from '../../src/index.js'
// import { createPrimitive } from 'vue-primitives'

// Just an example of global registration. This isn't used in the application.
Vue.component('column', createPrimitive({ name: 'Column', tag: 'div', classes: 'flex flex-col' }))
