// @flow

import type { Either, Iterable } from './types.js'

const map = (f: Function, i: Iterable): Either<Iterable, Function> => {
  if(Array.isArray(i)) {
    return i.map(f)
  } else {
    const newObj = {}
    Object.keys(i).forEach(k => newObj[k] = f(((i: any): Object)[k]))
    return newObj
  }
}

module.exports = { map }

