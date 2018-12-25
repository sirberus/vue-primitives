import { mergeClasses, kebabCase } from './utils.js'

export default function createPrimitive(options) {
  // returns a Vue functional component
  
  let componentName = kebabCase(options.name)
  
  if (!options.data) options.data = {} 
  if (!options.props) options.props = {} 
  
  return {
    functional: true,
    name: componentName,
    props: {
      'vp-debug': Boolean,
      ...options.props
    },
    render: function (h, context) {
      if (context.props.vpDebug) console.log(context)
      
      const data = Object.assign({}, 
        context.data,
        options.data, // Exposes the full render context to vue-primitives
        {class: mergeClasses(context, componentName, options)}
      )
        
      // By passing context.data down to h(), attrs like 'id' are passed down as expected.
      return h(options.tag, data, context.children)
    },
  }
}
