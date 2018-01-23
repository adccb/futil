// @flow

import type { NestedArray } from './types.js'

const flatten = <T>(a: NestedArray<T>): Array<T> => {
  return a.reduce((n, i) => (
    Array.isArray(i) ? n.concat(flatten(i)) : n.concat(i)
  ), [])
}

module.exports = { flatten }

