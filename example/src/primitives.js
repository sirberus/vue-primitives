import Vue from 'vue'
// import { registerPrimitive } from 'vue-primitives'
import { registerPrimitive } from '../../src/index.js'

registerPrimitive(Vue, 'div', 'box')
registerPrimitive(Vue, 'span', 'txt')
registerPrimitive(Vue, 'hr', 'bar', ['thick'])
