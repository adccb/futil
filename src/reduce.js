// @flow

import type { Either } from './types.js'

const reduce = <T>(f: Function, b: T, a: Array<T>): Either<T, Function> =>
  typeof a === 'undefined'
    ? (a: Array<any>) => reduce(f, b, a)
    : a.reduce(f, b)

module.exports = { reduce }

