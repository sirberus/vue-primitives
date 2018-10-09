import Vue from 'vue'
import { registerPrimitive } from 'vue-primitives'

registerPrimitive(Vue, 'div', 'box')
registerPrimitive(Vue, 'span', 'txt')
registerPrimitive(Vue, 'hr', 'bar', ['thick'])
