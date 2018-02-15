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

### filter

```js
const arr = [ 1, 2, 3, 4, 5 ]
const f = i => i > 3

reduce(f, arr)
  => [ 4, 5 ]

// partial application
greaterThanThree = reduce(f)
greaterThanThree(arr)
  => [ 4, 5 ]

greaterThanThree([ 2, 3, 4, 5, 6 ])
  => [ 4, 5, 6 ]
```

### reduce

```js
const arr = [ 1, 2, 3, 4, 5 ]
const f = (total, item) => total + item

reduce(f, arr)
  => 15

// partial application
const sum = reduce(f)
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
