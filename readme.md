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

## Getting Started

`npm install --save vue-primitives`

To make a component:

```js
import createPrimitive from 'vue-primitives'

createPrimitive('span', 'msg') // <span class="msg"> -> <msg>
// Bake in additional classes
createPrimitive('div', 'card', ['pa-sm-1', 'pa-md-3'])  // <div class="card pa-sm-1 pa-md-3"> -> <card>
```

Full example:

```html
<grid>
  <row v-for="j in 3" :key="j">
    <cell v-for="i in 3" :key="i-j" v-text="i+j"/>
  </row>
</grid>
```

```js
import { createPrimitive } from 'vue-primitives'

export default {
  components: {
    grid: createPrimitive('div', 'grid', ['flex', 'flex-direction-column']),
    row: createPrimitive('div', 'row', ['flex', 'flex-direction-row']),
    cell: createPrimitive('div', 'cell', ['flex', 'flex-center'])
  },
}
```

## Notes

* These are *functional components*, so they won't show up in Vue dev tools (yet) and they are ultra lightweight.

* `class` and `:class` work as expected, as do `style` and `:style`. *This is not how functional normally components work* - I wired it up myself

* Other than class and style, only one other attr is special: `vp-debug`. Add this prop to any Vue Primitive and it will console log its context information on render.

* All attrs except `class`, `style`, and `vp-debug` become classes - very useful with helper classes! You can also v-bind them to a boolean to toggle them as expected.

* The GitHub repo (see below) has a working example you can pull down

## Dev Setup

* Clone from GitHub repo (https://github.com/sirberus/vue-primitives)

* In /example/, open a terminal, npm install, and npm run serve

## ToDos:

* Make attribute-to-class mapping toggleable.

* Prop aliasing system. Supports a few use cases:
  
  * Prettify ugly helper classes, eg 'red' instead of 'text--red'

  * Shortening, eg 'row' instead of 'display-flex flex-direction-row'

  * Usable as baked-in suggestions and defaults, usable in auto-documentation

* "Subclassing" - created primitives should contain a "subclasser" function that returns a new primitive with additional classes and a different name
