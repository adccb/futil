// @flow

import type { Either, NestedArray } from './types.js'
const { map } = require('./map.js')
const { flatten } = require('./flatten.js')

const flatMap = (f: Function, a: NestedArray<any>): Either<Array<any>, Function> => {
  return map(f, flatten(a))
}

module.exports = { flatMap }

