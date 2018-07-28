import {createPrimitive} from './componentFactory.js'

export default {
  install(Vue) {
    createPrimitive(Vue, 'span', 'txt')
    createPrimitive(Vue, 'div', 'box')
  }
}