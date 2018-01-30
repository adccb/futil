// @flow

import type { Either, Iterable } from './types.js'

const filter = (f: Function, i: Iterable): Either<Iterable, Function> => {
  if(typeof i === 'undefined') {
    return (i: Iterable) => filter(f, i)
  }

  if(Array.isArray(i)) {
    return i.filter(f)
  } else {
    const newObj = {}
    Object.keys(i).forEach(k => {
      if(f(((i: any): Object)[k])) newObj[k] = ((i: any): Object)[k]
    })
    return newObj
  }
}

module.exports = { filter }

