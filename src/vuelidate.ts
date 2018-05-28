import { createDecorator, VueDecorator } from 'vue-class-component'

/**
 * Vulidate helper
 * Reflect the method to component validations option
 * https://github.com/monterail/vuelidate
 */
export function Validation(): VueDecorator {
  return createDecorator((componentOptions, handler) => {
    const options = componentOptions as any
    options.validations = options.methods[handler]
  })
}
