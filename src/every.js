// @flow

import type { Either } from './types'

export const every = <T>(f: Function, a: Array<T>): Either<boolean, Function> => 
  typeof a === 'undefined'
    ? (a: Array<T>) => every(f, a)
    : a.filter(f).length === a.length

