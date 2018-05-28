import { createDecorator, VueDecorator } from 'vue-class-component'

export function SocketIo(): VueDecorator {
  return createDecorator((componentOptions, handler) => {
    const options = componentOptions as any
    if (typeof options.sockets !== 'object') {
      options.sockets = Object.create(null)
    }
    options.sockets[handler] = options.methods[handler]
  })
}
