// @flow

import type { Either, Iterable, NestedArray } from './types.js'
const { map } = require('./map.js')
const { flatten } = require('./flatten.js')

const flatMap = (f: Function, a: NestedArray<any>): Either<Iterable, Function> => {
  if(typeof a === 'undefined') {
    return (a: NestedArray<any>) => map(f, flatten(a))
  } else {
    return map(f, flatten(a))
  }
}

module.exports = { flatMap }

