<template>
  <page p-2 md:p-10>
    <container>
      <headline>Hello World!</headline>
      <txt>This was made with vue-primitives and Tailwind CSS</txt>
      <darkmode-toggler w-64 @click="$store.commit('toggle-dark')"/>
    </container>
  </page>
</template>

<script>
// import { createPrimitive } from 'vue-primitives'
import { primitives } from '../../../src/index.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ...primitives({
      Page: { tag: 'div', classes: 'flex flex-col w-full h-full' },
      Container: { tag: 'div', classes: 'mx-auto flex flex-col'},
      Headline: { 
        tag: 'span', 
        classes: 'text-3xl pb-2',
        conditionals: [
          ({store}) => store.getters.dark ? 'text-white' : ''
        ]
      },
      Txt: { 
        tag: 'span',
        classes: 'text-lg pb-4',
        conditionals: [
          ({store}) => store.getters.dark ? 'text-white' : ''
        ]
      },
      DarkmodeToggler: { 
        tag: 'button',
        classes: 'focus:outline-none text-xl bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded',
        data: {
          domProps: {
            innerHTML: 'Toggle Dark Mode'
          }
        }
      },
    }),
  }
}
</script>