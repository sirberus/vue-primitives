<template>
  <div class="app-wrapper min-h-screen" 
    :class="{ 'bg-black': $store.getters.dark, 'bg-white': !$store.getters.dark }"
  >
    <div class="app-header bg-green h-16 flex items-center md:pl-10">
      <span class="font-bold text-3xl"
        :class="{ 'text-black': $store.getters.dark, 'text-white': !$store.getters.dark }"
      >Vue Primitives</span>
    </div>
    <app-content/>
  </div>
</template>

<script>
import AppContent from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    AppContent
  }
}
</script>