import { mergeClasses } from './utils.js'

export default function createPrimitive(oldTag, newTag, options={}) {
  return {
    functional: true,
    name: newTag,
    props: {
      'vp-debug': Boolean,
    },
    render: function (h, context) {
      if (context.props.vpDebug) console.log(context)
      
      const data = Object.assign({}, 
        context.data, 
        {class: mergeClasses(context, newTag, options)}
      )

      return h(oldTag, data, context.children)
    },
  }
}
