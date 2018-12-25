# Vue Primitives

#### A clever component factory that makes templates even more legible

#### Before:
```
<div class="alert-box" role="alert">
  <div class="alert-title bg-red text-white font-bold rounded-t px-4 py-2">Danger</div>
  <div class="alert-body border border-t-0 border-red-light rounded-b bg-red-lightest px-4 py-3 text-red-dark">
    <p>Something not ideal might be happening.</p>
  </div>
</div>
```

#### After:
```
<alert-box>
  <alert-title>Danger</alert-title>
  <alert-body>
    <p>Something not ideal might be happening.</p>
  </alert-body>
</alert-box>
```

## Getting Started

`npm install --save vue-primitives`

## Creating Primitives

#### Register individually with createPrimitive():
```js
import { createPrimitive } from 'vue-primitives'

export default {
  components: {
    Message: createPrimitive({ tag: 'span', name: 'Message' }),
    Card: createPrimitive({ tag: 'div', name: 'Card', classes: 'bg-red' })
  }
}
// Before: <span class="message"> <div class="card bg-red">
// After:  <message>
```

> **Names are converted to kebab case** so use PascalCase or kebab-case or whatever you prefer

#### [Recommended] Register as a batch with `...primitives()`:

> Note that the name is external the Object.

```js
import { primitives } from 'vue-primitives'

export default {
  components: {
    ...primitives({
      Message: { tag: 'span' },
      Card: { tag: 'div', classes: 'bg-red' },
    }),
  }
}
```

#### Bake in additional classes:
```js
createPrimitive({ tag: 'div', name: 'Card', classes: 'p-1 md:p-3'})
// Before: <div class="card pa-sm-1 pa-md-3">
// After:  <card>
```

#### [Advanced] Conditionally apply classes:
```js
createPrimitive({ 
  tag: 'div', 
  name: 'Frame',
  conditionals: [
    ({store}) => store.getters.darkMode ? 'white-text white-border' : 'black-text black-border' 
  ]
})
```

> Conditionals should return Strings. The data passed into each conditional is an object `{context, store, newTag, options, classes}` where `context` is the render context of a Vue render function, `store` is a helper to access the Vuex store if present, `newTag` is the target name for the new primitive, `options` is the Object passed into createPrimitive(), and `classes` is a list of all classes to be applied to the primitive so far.

#### [Advanced] Access the render context:

The `data` key will be merged with `context.data` of the functional component render context. [For full API see here](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth).

```js
createPrimitive({ 
  tag: 'div', 
  name: 'CloseBtn',
  data: {
    domProps: {
      innerHTML: ''
    }
  }
})
```

## Using Primitives

#### Unknown attrs without values become classes

This:

```html
<message text-2xl id="1">
```

Results in:

```html
<span class="message text-2xl" id="1">
```

* `class` and `:class` work as expected, as do `style` and `:style`. *(This is not true by default for functional components - it must be constructed from scratch)*

* Common attrs like `id` will fall through, but `data-` attrs will not. You can use the Functional Context Data interface (see above).

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

* Pass-through events, and otherwise make the primitives behave more like actual primitives