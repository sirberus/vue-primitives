# Vue Primitives

#### Increase the readability of your templates with custom semantic primitives

#### Before:
```
<div class="card pa-sm-1 pa-md-3 red elevated">
  <span class="msg white big bold">Hello World</span>
</div>
```

#### After:
```
<card red elevated>
  <msg white big bold>Hello World</msg>
</card>
```

> They're also functional components so they're super performant!

## Getting Started

`npm install --save vue-primitives`

#### Make a component with `createPrimitive`:

```js
import { createPrimitive } from 'vue-primitives'

createPrimitive('span', 'msg') // <span class="msg"> -> <msg>
// Bake in additional classes
createPrimitive('div', 'card', ['pa-sm-1', 'pa-md-3'])  // <div class="card pa-sm-1 pa-md-3"> -> <card>
```

#### Locally register:

```js
export default {
  components: {
    row: createPrimitive('div', 'row', ['flex', 'flex-direction-row']),
  },
}
```

#### Globally register with `registerPrimitive` for best effect:

```js
import Vue from 'vue'
import { registerPrimitive } from 'vue-primitives'

registerPrimitive(Vue, 'hr', 'bar', ['thick'])
```

#### Conditionally apply classes:

```js
import Vue from 'vue'
import { registerPrimitive } from 'vue-primitives'

registerPrimitive(Vue, 'div', 'frame', {
  conditionals: [
    ({store}) => store.getters.darkMode ? 'white-text white-border' : 'black-text black-border' 
  ]
})
```

> The data passed into each conditional is an object `{context, store, newTag, options, classes}` where `context` is the render context of a Vue render function, `store` is a helper to access the Vuex store if present, `newTag` is the target name for the new primitive, `options` is the final argument passed to registerPrimitive or createPrimitive, and `classes` is a list of all classes to be applied to the primitive so far.

## Notes on Props

* `class` and `:class` work as expected, as do `style` and `:style`. *(This is not true by default for functional components - it must be constructed from scratch)*

* **All other attrs become classes.** Ex. `<box big>` will be a `box` with the additional class `big`. This is very useful with helper classes. You can also v-bind them to a boolean to toggle them as expected.

## Dev Setup

The GitHub repo has a working example you can pull down.

* Clone from GitHub repo (https://github.com/sirberus/vue-primitives)

* In /example/, open a terminal, npm install, and npm run serve

## ToDos:

* Make attribute-to-class mapping toggleable.

* Prop aliasing system. Supports a few use cases:
  
  * Prettify ugly helper classes, eg 'red' instead of 'text--red'

  * Shortening, eg 'row' instead of 'display-flex flex-direction-row'

  * Usable as baked-in suggestions and defaults, usable in auto-documentation

* "Subclassing" - created primitives should contain a "subclasser" function that returns a new primitive with additional classes and a different name
