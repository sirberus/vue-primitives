import createPrimitive from './createPrimitive'

export default function registerPrimitive(Vue, oldTag, newTag, options) {
  Vue.component(newTag, createPrimitive(oldTag, newTag, options))
}