// @flow

import type { NestedArray } from './types.js'

export const flatten = <T>(a: NestedArray<T>): Array<T> =>
  a.reduce((n, i) => (
    Array.isArray(i) ? n.concat(flatten(((i: any): Array<any>))) : n.concat(i)
  ), [])

