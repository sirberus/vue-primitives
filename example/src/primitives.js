import Vue from 'vue'
import { registerPrimitives } from '../../src/index.js'

// Just an example of global registration. This isn't used in the application.
registerPrimitives(Vue, {
  Column: { tag: 'div', classes: 'flex flex-col' }
})
