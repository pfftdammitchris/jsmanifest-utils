import { Path } from './types'

const regex = {
  backlash: /\\(\\)?/g,
  leadingDot: /^\./,
  deepProperty: /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  plainProperty: /^\w*$/,
  property:
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
} as const

/**
 * Wraps val into an array if it isn't already one
 * @example
 * let num = 42
 * let arrayNum = array(num) // [42]
 * arrayNum = array(arrayNum) // [42]
 * @param { any } val
 */
export function array<O extends any[], P extends O[number]>(val: P | P[]): P[] {
  return isArr(val) ? val : [val]
}

/** Like Object.assign */
export function assign(
  v: Record<string, any>,
  ...rest: (Record<string, any> | undefined)[]
) {
  return Object.assign(v, ...rest)
}

export function callAll<Fn extends (...args: any[]) => any>(...fns: Fn[]) {
  function onFunc<Args extends any[]>(...args: Args) {
    fns.forEach((fn) => fn?.(...args))
  }
  return onFunc
}

export function camelCase(str: string) {
  return str
    .split(/[\.\-\_]+/g)
    .map((s) => upperFirst(s))
    .join('')
}

/**
 * Emptys the array
 * @param arr Array
 * @returns arr
 */
export function clearArr<V = any>(arr: V[]) {
  arr.length = 0
  return arr
}

/**
 * Returns a deep clone of the value
 * @param value
 * @returns { any }
 */
export function cloneDeep<O = any[]>(value: O): O
export function cloneDeep<O = any>(value: O): O
export function cloneDeep<O = any>(value: O | O[]) {
  if (isArr(value)) {
    return map((v) => (isObj(v) ? cloneDeep(v) : v), value)
  }
  if (isObj(value)) {
    return reduce(
      keys(value),
      (acc, key) => {
        if (isObj(value[key])) acc[key] = cloneDeep(value[key])
        else acc[key] = value[key]
        return acc
      },
      {} as O,
    )
  }
  return value
}

/**
 * Composes a list of functions and returns a transducer function
 */
export function compose<F extends (...args: any[]) => any>(...fns: F[]) {
  return function <V = any>(value: V) {
    return fns.reduceRight((acc, fn) => acc(fn(value)), ((x) => x) as F)
  }
}

/** Like Object.entries */
export function entries<K extends string, O extends Record<K, any>>(v: O) {
  return (isObj(v) ? Object.entries(v) : []) as [keyof O, O[keyof O]][]
}

/**
 * Returns true using the SameEqualityZero comparison algorithm
 * http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
 * @param objValue
 * @param value
 * @returns { boolean }
 */
export function eq(objValue: any, value: any) {
  return objValue === value || (objValue !== objValue && value !== value)
}

/** Like [].filter */
export function filter<O = any>(
  fn: (value: O, index: number, arr: O[]) => boolean,
  arr: O[],
) {
  return arr.filter(fn)
}

/** Like [].forEach */
export function forEach<O = any>(
  fn: (value: O, index: number, arr: O[]) => void,
  arr: O[],
) {
  arr.forEach(fn)
}

/**
 * Retrieves a value in obj using path
 * @param { Record<string, any> | any[] } obj
 * @param { Path[number] | Path } path
 * @returns { any }
 */
export function get(
  obj: Record<string, any> | any[],
  path: Path[number] | Path,
) {
  let _index = 0
  let _path = toPath(path)
  let _len = _path.length

  while (obj != null && _index < _len) {
    let nextKey = _path[_index++]
    let nextKeyPath = toPath(nextKey) || []
    let key = (nextKeyPath?.join?.('.') || '') as keyof typeof obj
    obj = obj[key]
  }

  return _index && _index == _len ? obj : undefined
}

/** Returns a random key */
export function getRandomKey() {
  return `_${Math.random().toString(36).substring(2, 9)}`
}

export function kebabCase(str: string) {
  return str.split(/[\.\-\_\/\\\`\!\^\@\s]+/g).join('-')
}

/** Returns true if we are in a browser environment */
export function isBrowser() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined'
}

/** Returns true if we are in a node.js environment */
export function isNode() {
  return (
    typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.node != null
  )
}

/** Returns true if the value is a "thenable". All promises are thenables */
export function isPromise<V>(value: unknown): value is Promise<V> {
  return isObj(value) && 'then' in value
}

/** Like Array.isArray */
export function isArr(v: any): v is any[] {
  return Array.isArray(v)
}

/** Like typeof val === 'boolean' */
export function isBool(v: any): v is boolean {
  return typeof v === 'boolean'
}

/** Returns true if value is an Error instance */
export function isErr(v: any): v is Error {
  return isObj(v) && (v instanceof Error || ('stack' in v && 'message' in v))
}

/**
 * Checks if value is a valid array-like index.
 * @param { number } v
 * @returns { boolean }
 */
function isIndex(v: unknown): v is string | number {
  return (
    (isNum(v) || (isStr(v) && /^(?:0|[1-9]\d*)$/.test(v))) &&
    v > -1 &&
    (v as number) % 1 == 0 &&
    v < Number.MAX_SAFE_INTEGER
  )
}

/** Like val instanceof Map */
export function isMap<K = any, V = any>(v: unknown): v is Map<K, V> {
  return isObj(v) && v instanceof Map
}

/** Returns true if the value is a plain object */
export function isObj(v: any): v is { [key: string]: any } {
  return !!v && !isArr(v) && typeof v === 'object'
}

/** Like typeof val === 'number' */
export function isNum(v: any): v is number {
  return typeof v === 'number'
}

/** Like val instanceof Set */
export function isSet<V = any>(v: unknown): v is Set<V> {
  return isObj(v) && v instanceof Set
}

/** Like typeof val === 'string' */
export function isStr(v: any): v is string {
  return typeof v === 'string'
}

/** Like typeof val === 'undefined' */
export function isUnd(v: any): v is undefined {
  return typeof v === 'undefined'
}

/**
 * Returns true if value is a key string or number
 * @param value
 * @returns { boolean }
 */
export function isKey(value: unknown): value is number | string {
  if (isArr(value)) return false
  if (value == null) return false
  const type = typeof value
  return type === 'string' || type === 'number' || isSymb(value)
}

/** Like value === null */
export function isNull(v: any): v is null {
  return v === null
}

/** Returns true if val is null or undefined */
export function isNil(v: any): v is null | undefined {
  return isNull(v) || isUnd(v)
}

/** Like typeof val === 'function' */
export function isFnc<V extends (...args: any[]) => any>(v: any): v is V {
  return typeof v === 'function'
}

/**
 * Returns true if value is a Symbol primitive or object
 * Equivalent to typeof value === 'symbol'
 */
export function isSymb(v: unknown): v is symbol {
  return (
    typeof v === 'symbol' ||
    Object.prototype.toString.call(v) == '[object Symbol]'
  )
}

/** Returns true if the key path exists in obj */
export function has<O extends Record<string, any>>(
  obj: O,
  path: Path | Path[number],
) {
  if (obj != null) {
    let paths = toPath(path)
    let index = -1
    let len = paths.length
    let result = false

    while (++index < len) {
      let key = toKey(paths[index])
      result = obj != null && Object.prototype.hasOwnProperty.call(obj, key)
      if (!result) break
      obj = obj[key as string]
    }

    if (result || ++index != len) return result
    len = obj == null ? 0 : obj.length

    return (
      isNum(len) &&
      len > 0 &&
      len % 1 == 0 &&
      (isArr(obj) ||
        (isObj(obj) &&
          Object.prototype.hasOwnProperty.call(obj, 'callee') &&
          Object.prototype.propertyIsEnumerable.call(obj, 'callee')))
    )
  }
  return false
}

/**
 * Returns true if key K is in object O
 * @param k Key
 * @param v Object
 * @returns boolean
 */
export function isIn<
  K extends string,
  O extends Record<K, any> = Record<K, any>,
>(k: K, v: any): v is O {
  return isObj(v) && isStr(k) && k in v
}

/** Like Object.keys */
export function keys<O extends Record<string, any>, K extends keyof O>(
  v: O | undefined,
): K[] {
  return (isObj(v) ? Object.keys(v) : []) as K[]
}

/** Like [].map */
export function map<V>(
  fn: (value: V, index: number, collection: V[]) => V,
  arr: V[],
) {
  return arr.map(fn)
}

export function merge<
  O extends Record<string, any>,
  P extends Record<string, any>,
>(obj: O, props: P) {
  return reduce(
    entries(props),
    (acc, [key, value]) => {
      acc[key as keyof O & P] = value
      return acc
    },
    obj as O & P,
  )
}

/** Returns a shallow copy of obj with keys removed */
export function omit<O extends Record<string, any>, K extends keyof O>(
  obj: O,
  _keys: K | K[],
) {
  return reduce(
    keys(obj),
    (acc, key) => {
      if (!isNil(key)) {
        if ((_keys as K[]).includes(key as K)) return acc
        ;(acc as O)[key] = obj[key]
      }
      return acc
    },
    {} as Omit<O, K>,
  )
}

/**
 * Parses a datauri string and returns its metadata object:
 * { base64, ext, mimeType }
 * @param dataURI Data URI string
 * @returns { object }
 */
export function parseDataURI<S extends string>(dataURI: S) {
  let [metadata, base64] = dataURI.split(',')
  const mimeType = metadata.split(';')[0].split(':')[1]
  const ext = mimeType.substring(mimeType.indexOf('/') + 1)
  return { base64, ext, mimeType }
}

/**
 * A convenience utility to log the time it takes for function calls to fully execute
 * @param func
 * @param label Label added as a prefix to the log
 */
export function perf(func: () => any, label = '') {
  console.time(label)
  func()
  console.timeEnd(label)
}

/** Returns a shallow copy of obj only including the ones in keys picked from obj */
export function pick<O extends Record<string, any>, K extends keyof O>(
  obj: O,
  _keys: K | K[] = [],
) {
  return reduce(
    array(_keys),
    (acc, key, _, collection) => {
      if (key && isStr(key)) {
        if (collection.includes(key)) acc[key as K] = get(obj, key) as O[K]
      }
      return acc
    },
    {} as Pick<O, K>,
  )
}

/** Like Array.reduce */
export function reduce<T, R>(
  arr: T[] | null | undefined,
  fn: (prev: R, curr: T, index: number, list: T[]) => R,
  acc: R,
): R {
  return arr ? arr?.reduce?.(fn, acc) : (arr as any)
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties.
 *
 * If a custom setter function is provided it will be used to set the values
 *
 * @category Object
 * @param { object } object The object to modify.
 * @param { Path | Path[number] } path The path of the property to set.
 * @param { any } value The value to set.
 *
 * @example
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 * set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c); // Result: 4
 */
export function set(
  obj: any,
  path: Path | Path[number],
  value: any,
  setter?: (obj: any, path: Path | Path[number], value: any) => any,
) {
  if (!isObj(obj)) return obj

  path = toPath(path)

  let index = -1
  let len = path.length
  let lastIndex = len - 1
  let nested = obj

  while (nested != null && ++index < len) {
    let key = toKey(path[index])
    let newValue = value

    if (index != lastIndex) {
      let objValue = nested[key as string]

      newValue = setter ? setter(objValue, key, nested) : undefined

      if (newValue === undefined) {
        newValue = isObj(objValue)
          ? objValue
          : isIndex(path[index + 1])
          ? []
          : {}
      }
    }

    if (
      !(
        Object.prototype.hasOwnProperty.call(nested, key) &&
        eq(nested[key as string], newValue)
      ) ||
      (newValue === undefined && !(key in nested))
    ) {
      nested[key as string] = newValue
    }

    nested = nested[key as string]
  }

  return obj
}

export function spread<KeyVal extends [any, any] = [any, any]>(
  fn: (...keyVal: KeyVal) => void,
) {
  return (keyVal: KeyVal) => fn(...keyVal)
}

/**
 * Performs a shallow check between two arrays
 * @param a Array
 * @param b Array
 * @returns { boolean }
 */
export function shallowArrayEqual<T extends any[]>(a: T, b: T) {
  if (a === b) return true
  if (a.length !== b.length) return false
  for (let i = 0, l = a.length; i < l; i++) if (a[i] !== b[i]) return false
  return true
}

/**
 * Casts the value to a path array if it isn't already one
 * @param v Value
 * @returns { string[] }
 */
function toPath(v: any): Path {
  if (isArr(v)) return v as Path
  if (isStr(v)) {
    const result = [] as string[]

    if (regex.leadingDot.test(v) || v === '') {
      result.push('')
    }

    v.replace(
      regex.property,
      // @ts-expect-error
      (match, num, quote, str) => {
        result.push(quote ? str.replace(/\\(\\)?/g, '$1') : num || match)
      },
    )

    return result
  }
  return [v] as Path
}

function toKey(value: any): string | symbol {
  if (isStr(value) || isSymb(value)) return value
  let result = value + ''
  return result == '0' && 1 / value == -(1 / 0) ? '-0' : result
}

/** Like Object.values */
export function values<O extends Record<string, any>, K extends keyof O>(
  v: O,
): O[K][] {
  return Object.values(v)
}

/**
 * Formats a filepath to be compatible on both windows and mac osx by replacing back slashes \ with forward slashes /
 * @param filepath
 * @returns string
 */
export function unixify(filepath = '') {
  return filepath.replace(/\\/g, '/')
}

/**
 * Uppercases the first letter of a string and returns the string
 * @param value
 * @returns { string }
 */
export function upperFirst(value = '') {
  if (!value) return ''
  if (!isStr(value)) value = String(value)
  return value[0].toUpperCase() + value.slice(1)
}

/* -------------------------------------------------------
  ---- CONSOLE LOGGING UTILS FOR NODEJS
-------------------------------------------------------- */

const resetColorCode = '\x1b[0m'
const createColorStr = (codePoint: number | string) => (s: number | string) =>
  `\x1b[${codePoint}m${s}${resetColorCode}`

const log = console.log
export const newline = () => log('')
export const bold = createColorStr(1)
export const blue = createColorStr(34)
export const cyan = createColorStr(36)
export const green = createColorStr(32)
export const italic = createColorStr(3)
export const magenta = createColorStr(35)
export const red = createColorStr(31)
export const white = createColorStr(37)
export const withTag = (s: string, colorFunc = cyan) =>
  `[${colorFunc?.(s) || s}]`
export const yellow = createColorStr(33)

export function logError(err: any, obj?: Record<string, any> | boolean) {
  if (!(err instanceof Error)) err = new Error(String(err))
  const errName = err.name || 'Error'
  const errMsg = err.message
  const errStack = err.stack
  const logMsg = isNode()
    ? `[${yellow(errName)}] ${red(errMsg)}`
    : `[${errName}] ${errMsg}`
  if (obj != null) console.error(logMsg, obj === true ? errStack : obj)
  else console.error(logMsg)
}
