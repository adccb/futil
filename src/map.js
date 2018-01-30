// @flow

import type { Either, Iterable } from './types.js'

const map = (f: Function, i: Iterable): Either<Iterable, Function> => {
  if(typeof i === 'undefined') {
    return (i: Iterable) => map(f, i)
  }
  
  if(Array.isArray(i)) {
    return i.map(f)
  } else {
    const newObj = {}
    Object.keys(i).forEach(k => newObj[k] = f(((i: any): Object)[k]))
    return newObj
  }
}

module.exports = { map }

