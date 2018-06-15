import { createDecorator, VueDecorator } from 'vue-class-component'

export interface SocketIoOption {
  /**
   * for declaring the socket event name manually
   */
  name: string
}

/**
 * Vue-Socket.io helper
 * Adding the method in the component sockets options
 * https://github.com/MetinSeylan/Vue-Socket.io
 */
export function SocketIO(socketOption?: SocketIoOption): VueDecorator {
  return createDecorator((componentOptions, handler) => {
    const options = componentOptions as any
    if (typeof options.sockets !== 'object') {
      options.sockets = Object.create(null)
    }
    if (socketOption && socketOption.name) {
      options.sockets[socketOption.name] = options.methods[handler]
    } else {
      options.sockets[handler] = options.methods[handler]
    }
  })
}
