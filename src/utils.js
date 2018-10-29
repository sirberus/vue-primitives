export function mergeClasses(context, newTag, bakeInClasses) {
  let classes = context.data.class ? context.data.class : []
  let staticClasses = context.data.staticClass ? context.data.staticClass : ''
  let mappedClasses = [newTag]
  
  // Map attrs to mappedClasses
  if (context.data.attrs) {
    for (let [k, v] of Object.entries(context.data.attrs)) {
      if (typeof(v) == 'boolean') {
        if (v) mappedClasses.push(k)
      } else if (!v) {
        mappedClasses.push(k)
      }
    }
  }

  // Resolve staticClasses into mappedClasses
  mappedClasses.push(staticClasses)
  
  // Resolve mappedClasses into classes
  switch (classes.__proto__.constructor) {
    case Array:
      classes = classes.concat(mappedClasses)
      break
    case String:
      mappedClasses.push(classes)
      classes = mappedClasses
      break
    case Object:
      for (let [cls, bool] of Object.entries(classes)) {
        if (bool) mappedClasses.push(cls)
        classes = mappedClasses
      }
      break
  }

  // Respolve bakeInClasses into classes
  classes = classes.concat(bakeInClasses)
  return classes
}

export default {}