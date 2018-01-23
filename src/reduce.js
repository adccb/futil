// @flow

import type { Either } from './types.js'

const reduce = (f: Function, a: Array<any> = []): Either<any, Function> => {
  return a.reduce(f)
}

module.exports = { reduce }

