import { createDecorator, VueDecorator } from 'vue-class-component'

/**
 * Vue-Socket.io helper
 * Adding the method in the component sockets options
 * https://github.com/MetinSeylan/Vue-Socket.io
 */
export function SocketIO(): VueDecorator {
  return createDecorator((componentOptions, handler) => {
    const options = componentOptions as any
    if (typeof options.sockets !== 'object') {
      options.sockets = Object.create(null)
    }
    options.sockets[handler] = options.methods[handler]
  })
}
