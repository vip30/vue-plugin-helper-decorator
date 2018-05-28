export default {
  input: 'dist/vue-plugin-helper-decorator.js',
  name: 'VuePluginHelperDecorator',
  output: {
    file: 'dist/vue-plugin-helper-decorator.umd.js',
    format: 'umd',
  },
  external: [
    'vue',
    'vue-class-component',
  ],
  exports: 'named',
  name: 'vue-plugin-helper-decorator',
  globals: {
    'vue': 'Vue',
    'vue-class-component': 'VueClassComponent',
  },
}
