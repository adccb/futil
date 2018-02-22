# futil

a small functional library

## to use

### map

```js
const arr = [ 1, 2, 3, 4, 5 ]
const f = i => i + 1

map(f, arr)
  => [ 2, 3, 4, 5, 6 ]

// partial application
const addOne = map(f)
addOne(arr)
  => [ 2, 3, 4, 5, 6 ]

addOne([ 2, 3, 4, 5, 6 ])
  => [ 3, 4, 5, 6, 7 ]
```

### unique

```js
const arr = [ 1, 2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 6 ]
unique(arr)
  => [ 1, 2, 3, 4, 5, 6 ]
```

### every
```js
const a = [ 1, 2, 3, 4, 5 ]
const f = i => typeof i === 'number'

every(f, a)
  => true

// partial application
const isNumeric = every(f)
isNumeric(a)
  => true
```

### sum
```js
const arr = [ 1, 2, 3, 4, 5 ]
sum(arr)
  => 15
```

### equals

```js
const a = [ 1, 2, 3, 4, 5 ]
const b = [ 1, 2, 3, 4, 5 ]
const c = [ 2, 3, 4, 5, 6 ]

equals(a, b)
  => true

// partial application
const equalsA = equals(a)

equalsA(c)
  => false

```

### range

```js
const r = range(10)
  => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

### lhs & rhs

```js
const a = lhs('a', 'b')
  => 'a'
const b = rhs('a', 'b')
  => 'b'
```

### filter

```js
const arr = [ 1, 2, 3, 4, 5 ]
const f = i => i > 3

filter(f, arr)
  => [ 4, 5 ]

// partial application
greaterThanThree = filter(f)
greaterThanThree(arr)
  => [ 4, 5 ]

greaterThanThree([ 2, 3, 4, 5, 6 ])
  => [ 4, 5, 6 ]
```

### reduce

```js
const arr = [ 1, 2, 3, 4, 5 ]
const f = (total, item) => total + item
const base = 0

reduce(f, base, arr)
  => 15

// partial application
const sum = reduce(f, base)
sum(arr)
  => 15

sum([ 2, 3, 4, 5, 6 ])
  => 20
```

### flatten

```js
const arr = [ 1, 2, 3, [ 4, 5 ] ]

flatten(arr)
  => [ 1, 2, 3, 4, 5 ]
```

### lift

```js
const arr = [ 1, 2, 3, 4, 5 ]

lift(arr, 2)
  => 3

lift(arr, 'this is not an index!')
  => null

// partial application
const lifted = lift(arr)
lifted(0)
  => 1

lifted('also not an index!')
  => null
```

### flatmap

(see `flatten` && `map`)

## to build

`$ npm run build`

## to run tests

`$ npm run test`

## to typecheck

`$ npm run flow`
