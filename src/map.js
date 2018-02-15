// @flow

import { attachProperty } from './func.js'

import type { Either, Iterable } from './types.js'

const mapObj = (f: Function, o: Object) =>
  Object.keys(o).reduce((acc, key) => 
    f(o[key]) ? attachProperty(acc, key, f(o[key])) : acc, {})

export const map = (f: Function, i: Iterable): Either<Iterable, Function> =>
  typeof i === 'undefined'
    ? (i: Iterable) => map(f, i)
    : Array.isArray(i) ? i.map(f) : mapObj(f, i)

