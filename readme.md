# Vue Primitives

#### Increase the readability of your templates with custom semantic primitives

#### Before:
```
<div class="card red elevated">
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

In your main.js or in a Nuxt plugin:

```js
import VuePrimitives from 'vue-primitives'

// Register the defaults
VuePrimitives.plugin
// Same as this:
// VuePrimitives.createPrimitive('span', 'txt')
// VuePrimitives.createPrimitive('div', 'box')

// Register a component of your own
VuePrimitives.createPrimitive('div', 'card')
VuePrimitives.createPrimitive('span', 'msg')
```

## Notes

* These are functional components, so they won't show up in Vue dev tools and they are ultra lightweight.

* `class` and `:class` merge as expected, as do `style` and `:style` - this is not how functional components work, I wired it up myself

* Other than class and style, only one other attr is special: `vp-debug`. Add this prop to any Vue Primitive and it will console log its context information on render.

* All other attrs become classes

* The name of the component also becomes a class

* The GitHub repo (see below) has a working example you can pull down

## Dev Setup

* Clone from GitHub repo (https://github.com/sirberus/vue-primitives)

* In /example/, open a terminal, npm install, and npm run serve
