// @flow

import { map } from './map.js'
import { flatten } from'./flatten.js'

import type { Either, NestedArray } from './types.js'

export const flatMap = <T>(f: Function, a: NestedArray<T>): Either<Array<T>, Function> =>
  typeof a === 'undefined'
    ? (a: NestedArray<any>) => ((map(f, flatten(a)): any): Array<T>)
    : ((map(f, flatten(a)): any): Array<T>)

