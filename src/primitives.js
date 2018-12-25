import createPrimitive  from './createPrimitive.js'

export default function primitives(schema) {
  let components = {}
  for (let [name, options] of Object.entries(schema)) {
    if (typeof options === 'string') {
      let tag = options
      options = { tag, name }
    } else if (typeof options === 'object' && options !== null) {
      options.name = name
    } else {
      throw new Error(`primitives({}) Object values must be String or Object, instead got ${options}`)
    }
    components[name] = createPrimitive(options)
  }
  return components
}