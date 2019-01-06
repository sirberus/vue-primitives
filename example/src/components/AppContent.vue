<template>
  <page p-2 md:p-10>
    <container>
      
      <headline>Hello World!</headline>
      <txt>This was made with vue-primitives and Tailwind CSS</txt>
      <darkmode-toggler w-64 mb-12 @click="$store.commit('toggle-dark')"/>
      
      <headline>Check out <code>AppContent.vue</code> and <code>primitives.js</code> for best examples</headline>
      <txt mb-12>The benefits are much more clear when the elements are used more than once.</txt>
      
      <headline>Why does the example not use global registration?</headline>
      <txt mb-12>You'll want to develop with hot reloading, but changes to global registrations always trigger a full reload. It's better practice to keep registration local until the API is cemented and if you use the element in other files.</txt>
    
      <headline>Lorem ipsum dolor sit amet</headline>
      <txt mb-12>Nunc orci est, malesuada non ligula quis, facilisis malesuada lectus. Curabitur sed odio non sapien tincidunt rutrum. Ut cursus ut magna vitae feugiat. Praesent et lectus tortor. Aenean pharetra magna id nisi tempus consectetur. Cras eget felis nisi. In ut turpis a ex aliquam finibus. Vestibulum vitae tellus hendrerit, rutrum nunc sed, imperdiet ipsum. Donec mauris sem, gravida id vestibulum ac, vehicula non ipsum. Maecenas porta sapien auctor volutpat sollicitudin. Vivamus ut velit non nisl ultrices hendrerit sit amet eu nunc. Nunc tincidunt dignissim consequat. Integer non ornare orci. Duis vel congue elit, ut suscipit ligula.</txt>
    
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