// @flow

import type { Either, Maybe } from './types'

export const lift = <T>(arr: Array<T>, idx: number): Either<Maybe<T>, Function> =>
  typeof idx === 'undefined'
    ? (idx: number) => lift(arr, idx)
    : arr[idx] || null

