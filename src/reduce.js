// @flow

import type { Either } from './types.js'

const reduce = (f: Function, a: Array<any>): Either<any, Function> => {
  if(typeof a === 'undefined') {
    return (a: Array<any>) => reduce(f, a)
  } else {
    return a.reduce(f)
  }
}

module.exports = { reduce }

