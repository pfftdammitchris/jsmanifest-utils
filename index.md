@jsmanifest/utils

# @jsmanifest/utils

## Table of contents

### Object Functions

- [set](README.md#set)

### Other Functions

- [array](README.md#array)
- [assign](README.md#assign)
- [blue](README.md#blue)
- [bold](README.md#bold)
- [callAll](README.md#callall)
- [camelCase](README.md#camelcase)
- [clearArr](README.md#cleararr)
- [cloneDeep](README.md#clonedeep)
- [compose](README.md#compose)
- [cyan](README.md#cyan)
- [entries](README.md#entries)
- [eq](README.md#eq)
- [filter](README.md#filter)
- [forEach](README.md#foreach)
- [get](README.md#get)
- [getRandomKey](README.md#getrandomkey)
- [green](README.md#green)
- [has](README.md#has)
- [isArr](README.md#isarr)
- [isBool](README.md#isbool)
- [isBrowser](README.md#isbrowser)
- [isErr](README.md#iserr)
- [isFnc](README.md#isfnc)
- [isIn](README.md#isin)
- [isKey](README.md#iskey)
- [isMap](README.md#ismap)
- [isNil](README.md#isnil)
- [isNode](README.md#isnode)
- [isNull](README.md#isnull)
- [isNum](README.md#isnum)
- [isObj](README.md#isobj)
- [isPromise](README.md#ispromise)
- [isSet](README.md#isset)
- [isStr](README.md#isstr)
- [isSymb](README.md#issymb)
- [isUnd](README.md#isund)
- [italic](README.md#italic)
- [kebabCase](README.md#kebabcase)
- [keys](README.md#keys)
- [logError](README.md#logerror)
- [magenta](README.md#magenta)
- [map](README.md#map)
- [merge](README.md#merge)
- [newline](README.md#newline)
- [omit](README.md#omit)
- [parseDataURI](README.md#parsedatauri)
- [parseStackTrace](README.md#parsestacktrace)
- [perf](README.md#perf)
- [pick](README.md#pick)
- [red](README.md#red)
- [reduce](README.md#reduce)
- [shallowArrayEqual](README.md#shallowarrayequal)
- [spread](README.md#spread)
- [unixify](README.md#unixify)
- [upperFirst](README.md#upperfirst)
- [values](README.md#values)
- [white](README.md#white)
- [withTag](README.md#withtag)
- [yellow](README.md#yellow)

### Variables

- [divider](README.md#divider)

## Object Functions

### set

▸ **set**(`obj`, `path`, `value`, `setter?`): `any`

Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
it's created. Arrays are created for missing index properties while objects
are created for all other missing properties.

If a custom setter function is provided it will be used to set the values

**`example`**
const object = { 'a': [{ 'b': { 'c': 3 } }] };
set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // Result: 4

#### Parameters

| Name      | Type                                                                                        | Description                      |
| :-------- | :------------------------------------------------------------------------------------------ | :------------------------------- |
| `obj`     | `any`                                                                                       | -                                |
| `path`    | `string` \| `number` \| `symbol` \| `Path`                                                  | The path of the property to set. |
| `value`   | `any`                                                                                       | The value to set.                |
| `setter?` | (`obj`: `any`, `path`: `string` \| `number` \| `symbol` \| `Path`, `value`: `any`) => `any` | -                                |

#### Returns

`any`

#### Defined in

[utils.ts:432](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L432)

---

## Other Functions

### array

▸ **array**<`O`, `P`\>(`val`): `P`[]

Wraps val into an array if it isn't already one

**`example`**
let num = 42
let arrayNum = array(num) // [42]
arrayNum = array(arrayNum) // [42]

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `O`  | extends `any`[] |
| `P`  | extends `any`   |

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `val` | `P` \| `P`[] |

#### Returns

`P`[]

#### Defined in

[utils.ts:20](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L20)

---

### assign

▸ **assign**(`v`, ...`rest`): `any`

Like Object.assign

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `v`       | `Record`<`string`, `any`\>                    |
| `...rest` | (`undefined` \| `Record`<`string`, `any`\>)[] |

#### Returns

`any`

#### Defined in

[utils.ts:25](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L25)

---

### blue

▸ **blue**(`s`): `string`

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `s`  | `string` \| `number` |

#### Returns

`string`

#### Defined in

[utils.ts:571](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L571)

---

### bold

▸ **bold**(`s`): `string`

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `s`  | `string` \| `number` |

#### Returns

`string`

#### Defined in

[utils.ts:570](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L570)

---

### callAll

▸ **callAll**<`Fn`\>(...`fns`): <Args\>(...`args`: `Args`) => `void`

#### Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `Fn` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name     | Type   |
| :------- | :----- |
| `...fns` | `Fn`[] |

#### Returns

`fn`

▸ <`Args`\>(...`args`): `void`

##### Type parameters

| Name   | Type            |
| :----- | :-------------- |
| `Args` | extends `any`[] |

##### Parameters

| Name      | Type   |
| :-------- | :----- |
| `...args` | `Args` |

##### Returns

`void`

#### Defined in

[utils.ts:32](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L32)

---

### camelCase

▸ **camelCase**(`str`): `string`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:39](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L39)

---

### clearArr

▸ **clearArr**<`V`\>(`arr`): `V`[]

Emptys the array

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `V`  | `any` |

#### Parameters

| Name  | Type  | Description |
| :---- | :---- | :---------- |
| `arr` | `V`[] | Array       |

#### Returns

`V`[]

arr

#### Defined in

[utils.ts:51](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L51)

---

### cloneDeep

▸ **cloneDeep**<`O`\>(`value`): `O`

Returns a deep clone of the value

#### Type parameters

| Name | Type    |
| :--- | :------ |
| `O`  | `any`[] |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `O`  |

#### Returns

`O`

#### Defined in

[utils.ts:61](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L61)

▸ **cloneDeep**<`O`\>(`value`): `O`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `O`  | `any` |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `O`  |

#### Returns

`O`

#### Defined in

[utils.ts:62](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L62)

---

### compose

▸ **compose**<`F`\>(...`fns`): <V\>(`value`: `V`) => `any`

Composes a list of functions and returns a transducer function

#### Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `F`  | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `...fns` | `F`[] |

#### Returns

`fn`

▸ <`V`\>(`value`): `any`

##### Type parameters

| Name | Type  |
| :--- | :---- |
| `V`  | `any` |

##### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `V`  |

##### Returns

`any`

#### Defined in

[utils.ts:84](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L84)

---

### cyan

▸ **cyan**(`s`): `string`

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `s`  | `string` \| `number` |

#### Returns

`string`

#### Defined in

[utils.ts:572](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L572)

---

### entries

▸ **entries**<`K`, `O`\>(`v`): [keyof `O`, `O`[keyof `O`]][]

Like Object.entries

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `K`  | extends `string`              |
| `O`  | extends `Record`<`K`, `any`\> |

#### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `O`  |

#### Returns

[keyof `O`, `O`[keyof `O`]][]

#### Defined in

[utils.ts:91](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L91)

---

### eq

▸ **eq**(`objValue`, `value`): `boolean`

Returns true using the SameEqualityZero comparison algorithm
http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero

#### Parameters

| Name       | Type  |
| :--------- | :---- |
| `objValue` | `any` |
| `value`    | `any` |

#### Returns

`boolean`

#### Defined in

[utils.ts:102](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L102)

---

### filter

▸ **filter**<`O`\>(`fn`, `arr`): `O`[]

Like [].filter

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `O`  | `any` |

#### Parameters

| Name  | Type                                                         |
| :---- | :----------------------------------------------------------- |
| `fn`  | (`value`: `O`, `index`: `number`, `arr`: `O`[]) => `boolean` |
| `arr` | `O`[]                                                        |

#### Returns

`O`[]

#### Defined in

[utils.ts:107](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L107)

---

### forEach

▸ **forEach**<`O`\>(`fn`, `arr`): `void`

Like [].forEach

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `O`  | `any` |

#### Parameters

| Name  | Type                                                      |
| :---- | :-------------------------------------------------------- |
| `fn`  | (`value`: `O`, `index`: `number`, `arr`: `O`[]) => `void` |
| `arr` | `O`[]                                                     |

#### Returns

`void`

#### Defined in

[utils.ts:115](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L115)

---

### get

▸ **get**(`obj`, `path`): `undefined` \| `Record`<`string`, `any`\>

Retrieves a value in obj using path

#### Parameters

| Name   | Type                                       |
| :----- | :----------------------------------------- |
| `obj`  | `any`[] \| `Record`<`string`, `any`\>      |
| `path` | `string` \| `number` \| `symbol` \| `Path` |

#### Returns

`undefined` \| `Record`<`string`, `any`\>

#### Defined in

[utils.ts:128](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L128)

---

### getRandomKey

▸ **getRandomKey**(): `string`

Returns a random key

#### Returns

`string`

#### Defined in

[utils.ts:147](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L147)

---

### green

▸ **green**(`s`): `string`

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `s`  | `string` \| `number` |

#### Returns

`string`

#### Defined in

[utils.ts:573](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L573)

---

### has

▸ **has**<`O`\>(`obj`, `path`): `any`

Returns true if the key path exists in obj

#### Type parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `O`  | extends `Record`<`string`, `any`\> |

#### Parameters

| Name   | Type                                       |
| :----- | :----------------------------------------- |
| `obj`  | `O`                                        |
| `path` | `string` \| `number` \| `symbol` \| `Path` |

#### Returns

`any`

#### Defined in

[utils.ts:272](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L272)

---

### isArr

▸ **isArr**(`v`): v is any[]

Like Array.isArray

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is any[]

#### Defined in

[utils.ts:175](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L175)

---

### isBool

▸ **isBool**(`v`): v is boolean

Like typeof val === 'boolean'

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is boolean

#### Defined in

[utils.ts:180](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L180)

---

### isBrowser

▸ **isBrowser**(): `boolean`

Returns true if we are in a browser environment

#### Returns

`boolean`

#### Defined in

[utils.ts:156](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L156)

---

### isErr

▸ **isErr**(`v`): v is Error

Returns true if value is an Error instance

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is Error

#### Defined in

[utils.ts:185](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L185)

---

### isFnc

▸ **isFnc**<`V`\>(`v`): v is V

Like typeof val === 'function'

#### Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `V`  | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is V

#### Defined in

[utils.ts:256](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L256)

---

### isIn

▸ **isIn**<`K`, `O`\>(`k`, `v`): v is O

Returns true if key K is in object O

#### Type parameters

| Name | Type                                                  |
| :--- | :---------------------------------------------------- |
| `K`  | extends `string`                                      |
| `O`  | extends `Record`<`K`, `any`\> = `Record`<`K`, `any`\> |

#### Parameters

| Name | Type  | Description |
| :--- | :---- | :---------- |
| `k`  | `K`   | Key         |
| `v`  | `any` | Object      |

#### Returns

v is O

boolean

#### Defined in

[utils.ts:311](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L311)

---

### isKey

▸ **isKey**(`value`): value is string \| number

Returns true if value is a key string or number

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is string \| number

#### Defined in

[utils.ts:238](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L238)

---

### isMap

▸ **isMap**<`K`, `V`\>(`v`): v is Map<K, V\>

Like val instanceof Map

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `K`  | `any` |
| `V`  | `any` |

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `unknown` |

#### Returns

v is Map<K, V\>

#### Defined in

[utils.ts:204](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L204)

---

### isNil

▸ **isNil**(`v`): v is undefined \| null

Returns true if val is null or undefined

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is undefined \| null

#### Defined in

[utils.ts:251](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L251)

---

### isNode

▸ **isNode**(): `boolean`

Returns true if we are in a node.js environment

#### Returns

`boolean`

#### Defined in

[utils.ts:161](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L161)

---

### isNull

▸ **isNull**(`v`): v is null

Like value === null

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is null

#### Defined in

[utils.ts:246](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L246)

---

### isNum

▸ **isNum**(`v`): v is number

Like typeof val === 'number'

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is number

#### Defined in

[utils.ts:214](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L214)

---

### isObj

▸ **isObj**(`v`): v is Object

Returns true if the value is a plain object

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is Object

#### Defined in

[utils.ts:209](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L209)

---

### isPromise

▸ **isPromise**<`V`\>(`value`): value is Promise<V\>

Returns true if the value is a "thenable". All promises are thenables

#### Type parameters

| Name |
| :--- |
| `V`  |

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is Promise<V\>

#### Defined in

[utils.ts:170](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L170)

---

### isSet

▸ **isSet**<`V`\>(`v`): v is Set<V\>

Like val instanceof Set

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `V`  | `any` |

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `unknown` |

#### Returns

v is Set<V\>

#### Defined in

[utils.ts:219](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L219)

---

### isStr

▸ **isStr**(`v`): v is string

Like typeof val === 'string'

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is string

#### Defined in

[utils.ts:224](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L224)

---

### isSymb

▸ **isSymb**(`v`): v is symbol

Returns true if value is a Symbol primitive or object
Equivalent to typeof value === 'symbol'

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `unknown` |

#### Returns

v is symbol

#### Defined in

[utils.ts:264](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L264)

---

### isUnd

▸ **isUnd**(`v`): v is undefined

Like typeof val === 'undefined'

#### Parameters

| Name | Type  |
| :--- | :---- |
| `v`  | `any` |

#### Returns

v is undefined

#### Defined in

[utils.ts:229](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L229)

---

### italic

▸ **italic**(`s`): `string`

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `s`  | `string` \| `number` |

#### Returns

`string`

#### Defined in

[utils.ts:574](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L574)

---

### kebabCase

▸ **kebabCase**(`str`): `string`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:151](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L151)

---

### keys

▸ **keys**<`O`, `K`\>(`v`): `K`[]

Like Object.keys

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `O`  | extends `Record`<`string`, `any`\>       |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type               |
| :--- | :----------------- |
| `v`  | `undefined` \| `O` |

#### Returns

`K`[]

#### Defined in

[utils.ts:319](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L319)

---

### logError

▸ **logError**(`err`, `obj?`): `void`

#### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `err`  | `any`                                   |
| `obj?` | `boolean` \| `Record`<`string`, `any`\> |

#### Returns

`void`

#### Defined in

[utils.ts:582](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L582)

---

### magenta

▸ **magenta**(`s`): `string`

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `s`  | `string` \| `number` |

#### Returns

`string`

#### Defined in

[utils.ts:575](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L575)

---

### map

▸ **map**<`V`\>(`fn`, `arr`): `V`[]

Like [].map

#### Type parameters

| Name |
| :--- |
| `V`  |

#### Parameters

| Name  | Type                                                          |
| :---- | :------------------------------------------------------------ |
| `fn`  | (`value`: `V`, `index`: `number`, `collection`: `V`[]) => `V` |
| `arr` | `V`[]                                                         |

#### Returns

`V`[]

#### Defined in

[utils.ts:326](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L326)

---

### merge

▸ **merge**<`O`, `P`\>(`obj`, `props`): `O` & `P`

#### Type parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `O`  | extends `Record`<`string`, `any`\> |
| `P`  | extends `Record`<`string`, `any`\> |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `obj`   | `O`  |
| `props` | `P`  |

#### Returns

`O` & `P`

#### Defined in

[utils.ts:333](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L333)

---

### newline

▸ **newline**(): `void`

#### Returns

`void`

#### Defined in

[utils.ts:569](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L569)

---

### omit

▸ **omit**<`O`, `K`\>(`obj`, `_keys`): `Omit`<`O`, `K`\>

Returns a shallow copy of obj with keys removed

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `O`  | extends `Record`<`string`, `any`\>       |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `obj`   | `O`          |
| `_keys` | `K` \| `K`[] |

#### Returns

`Omit`<`O`, `K`\>

#### Defined in

[utils.ts:348](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L348)

---

### parseDataURI

▸ **parseDataURI**<`S`\>(`dataURI`): `Object`

Parses a datauri string and returns its metadata object:
{ base64, ext, mimeType }

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `S`  | extends `string` |

#### Parameters

| Name      | Type | Description     |
| :-------- | :--- | :-------------- |
| `dataURI` | `S`  | Data URI string |

#### Returns

`Object`

| Name       | Type     |
| :--------- | :------- |
| `base64`   | `string` |
| `ext`      | `string` |
| `mimeType` | `string` |

#### Defined in

[utils.ts:371](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L371)

---

### parseStackTrace

▸ **parseStackTrace**(`stackString`): `Frame`[]

This parses the different stack traces and puts them into one format
This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `stackString` | `string` |

#### Returns

`Frame`[]

#### Defined in

[parseStackTrace.ts:20](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/parseStackTrace.ts#L20)

---

### perf

▸ **perf**(`func`, `label?`): `void`

A convenience utility to log the time it takes for function calls to fully execute

#### Parameters

| Name    | Type        | Default value | Description                        |
| :------ | :---------- | :------------ | :--------------------------------- |
| `func`  | () => `any` | `undefined`   |                                    |
| `label` | `string`    | `''`          | Label added as a prefix to the log |

#### Returns

`void`

#### Defined in

[utils.ts:383](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L383)

---

### pick

▸ **pick**<`O`, `K`\>(`obj`, `_keys?`): `Pick`<`O`, `K`\>

Returns a shallow copy of obj only including the ones in keys picked from obj

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `O`  | extends `Record`<`string`, `any`\>       |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name    | Type         | Default value |
| :------ | :----------- | :------------ |
| `obj`   | `O`          | `undefined`   |
| `_keys` | `K` \| `K`[] | `[]`          |

#### Returns

`Pick`<`O`, `K`\>

#### Defined in

[utils.ts:390](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L390)

---

### red

▸ **red**(`s`): `string`

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `s`  | `string` \| `number` |

#### Returns

`string`

#### Defined in

[utils.ts:576](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L576)

---

### reduce

▸ **reduce**<`T`, `R`\>(`arr`, `fn`, `acc`): `R`

Like Array.reduce

#### Type parameters

| Name |
| :--- |
| `T`  |
| `R`  |

#### Parameters

| Name  | Type                                                                |
| :---- | :------------------------------------------------------------------ |
| `arr` | `undefined` \| `null` \| `T`[]                                      |
| `fn`  | (`prev`: `R`, `curr`: `T`, `index`: `number`, `list`: `T`[]) => `R` |
| `acc` | `R`                                                                 |

#### Returns

`R`

#### Defined in

[utils.ts:407](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L407)

---

### shallowArrayEqual

▸ **shallowArrayEqual**<`T`\>(`a`, `b`): `boolean`

Performs a shallow check between two arrays

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `T`  | extends `any`[] |

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a`  | `T`  | Array       |
| `b`  | `T`  | Array       |

#### Returns

`boolean`

#### Defined in

[utils.ts:493](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L493)

---

### spread

▸ **spread**<`KeyVal`\>(`fn`): (`keyVal`: `KeyVal`) => `void`

#### Type parameters

| Name     | Type                                    |
| :------- | :-------------------------------------- |
| `KeyVal` | extends [`any`, `any`] = [`any`, `any`] |

#### Parameters

| Name | Type                              |
| :--- | :-------------------------------- |
| `fn` | (...`keyVal`: `KeyVal`) => `void` |

#### Returns

`fn`

▸ (`keyVal`): `void`

##### Parameters

| Name     | Type     |
| :------- | :------- |
| `keyVal` | `KeyVal` |

##### Returns

`void`

#### Defined in

[utils.ts:481](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L481)

---

### unixify

▸ **unixify**(`filepath?`): `string`

Formats a filepath to be compatible on both windows and mac osx by replacing back slashes \ with forward slashes /

#### Parameters

| Name       | Type     | Default value |
| :--------- | :------- | :------------ |
| `filepath` | `string` | `''`          |

#### Returns

`string`

string

#### Defined in

[utils.ts:545](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L545)

---

### upperFirst

▸ **upperFirst**(`value?`): `string`

Uppercases the first letter of a string and returns the string

#### Parameters

| Name    | Type     | Default value |
| :------ | :------- | :------------ |
| `value` | `string` | `''`          |

#### Returns

`string`

#### Defined in

[utils.ts:554](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L554)

---

### values

▸ **values**<`O`, `K`\>(`v`): `O`[`K`][]

Like Object.values

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `O`  | extends `Record`<`string`, `any`\>       |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `O`  |

#### Returns

`O`[`K`][]

#### Defined in

[utils.ts:534](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L534)

---

### white

▸ **white**(`s`): `string`

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `s`  | `string` \| `number` |

#### Returns

`string`

#### Defined in

[utils.ts:577](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L577)

---

### withTag

▸ **withTag**(`s`, `colorFunc?`): `string`

#### Parameters

| Name        | Type                                    | Default value |
| :---------- | :-------------------------------------- | :------------ |
| `s`         | `string`                                | `undefined`   |
| `colorFunc` | (`s`: `string` \| `number`) => `string` | `cyan`        |

#### Returns

`string`

#### Defined in

[utils.ts:578](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L578)

---

### yellow

▸ **yellow**(`s`): `string`

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `s`  | `string` \| `number` |

#### Returns

`string`

#### Defined in

[utils.ts:580](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/utils.ts#L580)

## Variables

### divider

• `Const` **divider**: `"----------------------------------------------------------"`

#### Defined in

[constants.ts:1](https://github.com/pfftdammitchris/jsmanifest/blob/8037aa6/packages/utils/src/constants.ts#L1)
