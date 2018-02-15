// @flow

import { map } from './map.js'
import { flatten } from'./flatten.js'

import type { Either, Iterable, NestedArray } from './types.js'

export const flatMap = (f: Function, a: NestedArray<any>): Either<Iterable, Function> =>
  typeof a === 'undefined'
    ? (a: NestedArray<any>) => map(f, flatten(a))
    : map(f, flatten(a))

