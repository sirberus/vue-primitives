import Vue from 'vue'
// import { registerPrimitive } from 'vue-primitives'
import { registerPrimitive } from '../../src/index.js'

registerPrimitive(Vue, 'div', 'box')
registerPrimitive(Vue, 'span', 'headline')
registerPrimitive(Vue, 'span', 'txt', {
  conditionals: [
    ({store}) => store.getters.dark ? 'white-text' : ''
  ]
})
registerPrimitive(Vue, 'button', 'btn', {
  classes: 'pb-3',
  conditionals: [
    ({store}) => store.getters.dark ? 'white-text white-border' : ''
  ]
})
registerPrimitive(Vue, 'hr', 'bar', ['thick'])
