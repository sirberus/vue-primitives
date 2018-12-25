export function mergeClasses(context, newTag, options) {
  const store = context.parent.$store || {}
  const boundClasses = context.data.class || ''
  const staticClasses = context.data.staticClass ? context.data.staticClass : ''
  let allClasses = [newTag, staticClasses]
  
  // Handle options polymorphism
  if (typeof options === 'string') {
    allClasses = allClasses.push(options)  
  } else if (Array.isArray(options)) {
    allClasses = allClasses.concat(options)
    options = {}  
  }  else {
    allClasses = allClasses.concat(options.classes || [])  
  }

  // Map attrs to allClasses
  if (context.data.attrs) {
    for (let [k, v] of Object.entries(context.data.attrs)) {
      if (typeof(v) == 'boolean') {
        if (v) allClasses.push(k)
      } else if (!v) {
        allClasses.push(k)
      }
    }
  }

  // Resolve allClasses into classes
  switch (boundClasses.__proto__.constructor) {
    case Array:
      allClasses = allClasses.concat(boundClasses)
      break
    case String:
      allClasses.push(boundClasses)
      break
    case Object:
      for (let [cssClass, bool] of Object.entries(boundClasses)) {
        if (bool) allClasses.push(cssClass)
      }
      break
  }

  let conditionals = options.conditionals || []
  for (let conditional of conditionals) {
    let output = conditional({context, store, newTag, options, classes: allClasses})
    if (output) allClasses.push(output)
  }

  return allClasses
}

export function kebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
} 

export default {}