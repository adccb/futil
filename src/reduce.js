// @flow

import type { Either } from './types.js'

const reduce = <T>(f: Function, b: T, a: Array<T>): Either<T, Function> => {
  if(typeof a === 'undefined') {
    return (a: Array<any>) => reduce(f, b, a)
  } else {
    return a.reduce(f, b)
  }
}

module.exports = { reduce }

