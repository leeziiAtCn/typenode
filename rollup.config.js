import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import uglify from 'rollup-plugin-uglify'
import progress from 'rollup-plugin-progress'
import execute from 'rollup-plugin-execute'
import replace from 'rollup-plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import {
  dependencies,
} from './package.json'

import {
  minify,
} from 'uglify-es'

const external = []
for (var key in dependencies) {
  if (dependencies.hasOwnProperty(key)) {
    external.push(key)
  }
}
export default {
  input: './src/app.ts',
  output: {
    file: './dist/app.js',
    format: 'cjs',
  },
  external: external,
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  },
  plugins: [
    typescript(),
    commonjs(),
    nodeResolve(),
    json(),
    uglify({}, minify),
    progress({
      clearLine: true,
    }),
    replace({'import * as ': 'import '}),
    execute([
      'rm -rf ./dist/template',
      'rm -rf ./tsc',
      'cp -R ./src/template ./dist/template',
    ]),
  ],
}