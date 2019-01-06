import createPrimitive from "./createPrimitive";

export default function registerPrimitives(vm, input) {
  for (let [name, options] of Object.entries(input)) {
    options.name = name
    vm.component(name, createPrimitive(options))
  }
}