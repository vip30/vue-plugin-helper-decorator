# Vue Plugin Helper Decorator

[![npm](https://img.shields.io/npm/v/vue-plugin-helper-decorator.svg)](https://www.npmjs.com/package/vue-plugin-helper-decorator)
[![Build Status](https://travis-ci.com/vip30/vue-plugin-helper-decorator.svg?branch=master)](https://travis-ci.com/vip30/vue-plugin-helper-decorator)

This library fully depends on [vue-class-component](https://github.com/vuejs/vue-class-component).

## Description

It helps for using vue plugins.

Now support:
- [Vue-socket.io](https://github.com/MetinSeylan/Vue-Socket.io)
- [Vuelidate](https://github.com/monterail/vuelidate)

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
import { SocketIO, Validation } from 'vue-plugin-helper-decorator'
@Component({})
export class DummyComponent extends Vue {
  @SocketIO()
  public reconnect() {
    console.log('reconnect')
  }

  @Validation()
  public ValidationObject() {
    return {
      name: {
        required
      }
    }
  }
}
```
