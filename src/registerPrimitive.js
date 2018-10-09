import createPrimitive from './createPrimitive'

export default function registerPrimitive(Vue, oldTag, newTag, bakeInClasses) {
  Vue.component(newTag, createPrimitive(oldTag, newTag, bakeInClasses))
}