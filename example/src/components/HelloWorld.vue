<template>
  <div style="width: 100%">
    
    <card>
      <p style="text-align: left; display: inline-block;"><txt>
        This example shows off many of the things you need to know about <code>vue-primitives</code>.<br>
        Open HelloWorld.vue to explore further.
      </txt></p>
    </card>

    <br>

    <btn mb-3 @click="$store.commit('toggle-dark')">
      {{ $store.getters.dark ? 'Dark' : 'Light' }} (Click to toggle)
    </btn>
    
    <box half-width>

      <headline mint 
        :class="['big']" class="italic" 
        style="text-decoration: orange underline;" :style="{'font-weight': 'bold'}" 
        vp-debug
      >
        Vue
      </headline>

      <bar mint/>

      <headline big bold italic mint>
        Primitives
      </headline>

    </box>

  </div>
</template>

<script>
// import { createPrimitive } from 'vue-primitives'
import { createPrimitive } from '../../../src/index.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    card: createPrimitive('div', 'card'),
  }
}
</script>

<style scoped>
.thick {
  border-bottom-width: 5px;
  border-style: solid;
}
.mint {
  color: #42b983;
}
.elevated {
  box-shadow: 0px 2px 5px 0px black;
}
.italic {
  font-style: italic;
}
.big {
  font-size: 50px;
}
.bold {
  font-weight: bold;
}
</style>
