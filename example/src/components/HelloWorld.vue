<template>
  <div style="width: 100%">
    
    <p style="text-align: left; display: inline-block;">
      This example shows off many of the things you need to know about <code>vue-primitives</code>:
      <ol>
        <li>'txt' and 'box' are available by default ('bar' is added in main.js)</li>
        <li>class and :class meld as expected, as do style and :style (this is not true by default for functional components - it must be constructed from scratch)</li>
        <li>attrs other than style and class are turned into classes if they have no value or if their value is Boolean true</li>
        <li>the special prop 'vp-debug' causes the context to console log</li>
      </ol>
      Open HelloWorld.vue to explore further.
    </p>

    <br>
    
    <box elevated>

      <txt mint 
        :class="['big']" class="italic" 
        style="text-decoration: orange underline;" :style="{'font-weight': 'bold'}" 
        vp-debug
      >
        Vue
      </txt>

      <bar thick mint/>

      <txt big bold italic mint>
        Primitives
      </txt>

    </box>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
