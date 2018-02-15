// @flow

import { attachProperty } from './func.js'

import type { Either, Iterable } from './types.js'

const filterObj = (f: Function, o: Object) =>
  Object.keys(o).reduce((acc, key) => 
    f(o[key]) ? attachProperty(acc, key, o[key]) : acc, {})

export const filter = (f: Function, i: Iterable): Either<Iterable, Function> =>
  typeof i === 'undefined'
    ? (i: Iterable) => filter(f, i)
    : Array.isArray(i) ? i.filter(f) : filterObj(f, i)

