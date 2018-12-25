<template>
  <app-wrapper>
    <app-header>
      <app-title>Vue Primitives</app-title>
    </app-header>
    <app-content/>
  </app-wrapper>
</template>

<script>
import { primitives } from '../../src/index.js'
import AppContent from './components/AppContent.vue'

export default {
  name: 'app',
  components: {
    ...primitives({
      AppWrapper: { 
        tag: 'div', 
        classes: 'min-h-screen',
        conditionals: [
          ({store}) => store.getters.dark ? 'bg-black' : 'bg-white'
        ]
      },
      AppHeader: { tag: 'div', classes: 'bg-green h-16 flex items-center md:pl-10' },
      AppTitle: { 
        tag: 'span', 
        classes: 'font-bold text-3xl',
        conditionals: [
          ({store}) => store.getters.dark ? 'text-black' : 'text-white'
        ]  
      }
    }),
    AppContent
  }
}
</script>