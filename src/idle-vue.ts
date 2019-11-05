import { createDecorator, VueDecorator } from 'vue-class-component'

/**
 * Idle-vue helper
 * Reflect the method to component onIdle option
 * https://github.com/soixantecircuits/idle-vue
 */
export function OnIdle(): VueDecorator {
  return createDecorator(function(componentOptions, handler) {
    const options = componentOptions as any
    options.onIdle = options.methods[handler]
  })
}

/**
 * Idle-vue helper
 * Reflect the method to component onActive option
 * https://github.com/soixantecircuits/idle-vue
 */
export function OnActive(): VueDecorator {
  return createDecorator(function(componentOptions, handler) {
    const options = componentOptions as any
    options.onActive = options.methods[handler]
  })
}
