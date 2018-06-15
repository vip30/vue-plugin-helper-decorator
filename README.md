# Vue Plugin Helper Decorator

[![npm](https://img.shields.io/npm/v/vue-plugin-helper-decorator.svg)](https://www.npmjs.com/package/vue-plugin-helper-decorator)
[![Build Status](https://travis-ci.com/vip30/vue-plugin-helper-decorator.svg?branch=master)](https://travis-ci.com/vip30/vue-plugin-helper-decorator)

This library fully depends on [vue-class-component](https://github.com/vuejs/vue-class-component).

## Description

It helps for using vue plugins.

Now support:

* [Vue-socket.io](https://github.com/MetinSeylan/Vue-Socket.io)
* [Vuelidate](https://github.com/monterail/vuelidate)
* [Idle-vue](https://github.com/soixantecircuits/idle-vue)

## License

MIT License

## Install

```bash
npm i -S vue-plugin-helper-decorator
```

## Usage

```typescript
// In component
import { required } from 'vuelidate/lib/validators'
import { SocketIO, Validation, OnIdle, OnActive } from 'vue-plugin-helper-decorator'
@Component({})
export class DummyComponent extends Vue {
  @SocketIO({
    name: 'reconnect' // can declare your custom event name / names
  })
  public myReconnect() {
    console.log('reconnect')
  }

  @Validation()
  public validationObject() {
    return {
      name: {
        required
      }
    }
  }
  
  @OnIdle()
  public whenIdle() {
    console,log('Idle now')
  }
  
  @OnActive()
  public whenActive() {
    console,log('Active now')
  }
}
```
