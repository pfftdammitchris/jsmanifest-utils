process.stdout.write('\x1Bc')
import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import esbuild from 'rollup-plugin-esbuild'
import fs from 'fs-extra'
import path from 'path'
import ts from 'ts-morph'

const getAbsFilePath = (...s) => path.resolve(path.join(process.cwd(), ...s))
const extensions = ['.js', '.ts']

fs.remove(getAbsFilePath('dist'))

const inputFilePath = getAbsFilePath('src/index.ts')
const outputFilePath = getAbsFilePath('dist')

const plugins = [
  json(),
  nodeResolve({
    extensions,
    browser: true,
  }),
  commonjs(),
  esbuild({
    keepNames: true,
    include: /\.ts$/,
    exclude: /node_modules/,
    target: 'es2018',
    tsconfig: './tsconfig.json',
  }),
  filesize(),
  progress(),
]

/** @type { import('rollup').OutputOptions } */
const outputOptions = {
  dir: outputFilePath,
  format: 'umd',
  sourcemap: true,
  exports: 'named',
  name: 'JsManifestUtils',
  strict: true,
}

async function build() {
  const bundle = await rollup({
    input: inputFilePath,
    plugins,
    watch: {
      chokidar: {
        ignorePermissionErrors: true,
        ignoreInitial: false,
      },
    },
  })

  await bundle.write(outputOptions)

  return bundle
}

/**
 *
 * @param { import('rollup').RollupBuild } bundle
 */
async function typings(bundle) {
  const outputDirs = [{ format: 'cjs', dir: './dist' }]

  /** @type { ts.ProjectOptions } */
  const tsOptions = {
    compilerOptions: {
      allowSyntheticDefaultImports: true,
      allowJs: true,
      baseUrl: path.resolve('./src'),
      composite: true,
      declaration: true,
      emitDeclarationOnly: true,
      importHelpers: true,
      inlineSourceMap: true,
      isolatedModules: true,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      newLine: ts.NewLineKind.CarriageReturnLineFeed,
      skipLibCheck: true,
      rootDir: path.resolve('./src'),
      target: ts.ScriptTarget.ES2018,
    },
    manipulationSettings: {
      indentationText: 2,
      newLineKind: ts.NewLineKind.CarriageReturnLineFeed,
      quoteKind: ts.QuoteKind.Single,
      useTrailingCommas: true,
    },
    tsConfigFilePath: './tsconfig.json',
  }

  const project = new ts.Project(tsOptions)

  project.addSourceFilesFromTsConfig('./tsconfig.json')
  project.addSourceFileAtPath('./src/utils.ts')

  for (const { dir } of outputDirs) {
    project.compilerOptions.set({
      ...tsOptions.compilerOptions,
      module: ts.ModuleKind.CommonJS,
      declarationDir: path.resolve(dir),
      target: ts.ScriptTarget.ES2018,
    })

    await project.emit({ emitOnlyDtsFiles: true })
    await project.save()
  }

  await bundle.close()
}

build().then(typings).catch(console.error)
