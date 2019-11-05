import { createDecorator, VueDecorator } from 'vue-class-component'

export interface SocketIoOption {
  /**
   * for declaring the socket event name manually
   * can support multiple event name point to same function
   */
  name: string | string[]
}

/**
 * Vue-Socket.io helper
 * Adding the method in the component sockets options
 * https://github.com/MetinSeylan/Vue-Socket.io
 */
export function SocketIO(socketOption?: SocketIoOption): VueDecorator {
  return createDecorator(function(componentOptions, handler) {
    const options = componentOptions as any
    if (typeof options.sockets !== 'object') {
      options.sockets = Object.create(null)
    }
    if (socketOption && socketOption.name) {
      if (Array.isArray(socketOption.name)) {
        socketOption.name.forEach(name => {
          options.sockets[name] = options.methods[handler]
        })
      } else {
        options.sockets[socketOption.name] = options.methods[handler]
      }
    } else {
      options.sockets[handler] = options.methods[handler]
    }
  })
}
