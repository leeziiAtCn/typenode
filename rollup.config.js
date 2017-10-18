import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
export default {
  input: './tsc/app.js',
  output: {
    file: './dist/app.js',
    format: 'cjs'
  },
  plugins: [
    nodeResolve(),
    commonjs()
  ]
}