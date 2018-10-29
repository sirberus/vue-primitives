import { mergeClasses } from './utils.js'

export default function createPrimitive(oldTag, newTag, options={}) {

  let bakeInClasses
  if (Array.isArray(options)) {
    bakeInClasses = options
    options = {}  
  } else {
    bakeInClasses = options.classes || []  
  }
  let conditions = options.conditions || []

  return {
    functional: true,
    name: newTag,
    props: {
      'vp-debug': Boolean,
    },
    render: function (h, context) {
      // Debug Logging
      if (context.props.vpDebug) {
        console.log(context)
      }
      
      const data = Object.assign({}, 
        context.data, 
        {class: mergeClasses(context, newTag, bakeInClasses)}
      )

      return h(oldTag, data, context.children)
    },
  }
}
