import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import babel from '@rollup/plugin-babel'
import esbuild from 'rollup-plugin-esbuild'

const extensions = ['.js', '.ts']
const _DEV_ = process.env.NODE_ENV === 'development'
const isCommonJS = process.env.CJS

/**
 * @type { import('rollup').RollupOptions }
 */
const configs = {
  watch: {
    include: 'src',
    chokidar: { ignoreInitial: false, ignorePermissionErrors: true },
  },
  input: 'src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'umd',
      sourcemap: true,
      exports: 'named',
      name: 'JsManifestUtils',
    },
  ],
  plugins: [
    json(),
    nodeResolve({
      extensions,
      browser: true,
    }),
    commonjs(),
    babel({
      extensions: ['.js'],
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env'],
      plugins: ['@babel/transform-runtime'],
    }),
    esbuild({
      experimentalBundling: true,
      include: /\.ts?$/,
      exclude: /node_modules/,
      minify: !_DEV_,
      target: isCommonJS ? 'es2018' : 'es2020',
    }),
    filesize(),
    progress(),
  ],
}

export default configs
