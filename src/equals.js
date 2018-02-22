// @flow

import type { Either, Iterable } from './types'

import { every } from './every'

export const equals = <T, V>(a: Array<T>, b: Array<V>): Either<boolean, Function> =>
  typeof b === 'undefined'
    ? (b: Array<V>) => equals(a, b)
    : ((every((itm, idx) => itm === b[idx], a): any): boolean)

