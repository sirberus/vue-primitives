<template>
  <page p-2 md:p-10>
    <container>
      <headline>Hello World!</headline>
      <txt>This was made with vue-primitives and Tailwind CSS</txt>
      <darkmode-toggler w-64 mb-12 @click="$store.commit('toggle-dark')"/>
      
      <headline>Check out AppContent.vue for best examples</headline>
      <txt mb-12>The benefits are much more clear when the elements are used more than once.</txt>
      
      <headline>Remember, this is just a dumb one-page app</headline>
      <txt mb-12>For scaffoling a proper application, you could separate conditionals into utility files and use global registration to keep the &lt;script&gt; block clean.</txt>
    
      <headline>Why does the example not use global registration?</headline>
      <txt>You'll want to develop with hot reloading, but changes to global registrations always trigger a full reload. It's better practice to keep registration local until the API is cemented and if you use the element in other files.</txt>
      <txt>Take care to not globally register everything. If it's only used in one file, keep it in that file.</txt>
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
        tag: 'p',
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