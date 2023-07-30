const { defineConfig } = require('rollup');
const ts = require('@rollup/plugin-typescript');

module.exports = defineConfig({
  input: './src/index.ts',
  output: {
    format: 'iife',
    file: './dist/index.js',
    globals: {
      moment: 'moment',
    },
  },
  external: ['moment'],
  plugins: [ts()],
});
