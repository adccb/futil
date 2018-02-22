// @flow

export const unique = <T>(a: Array<T>): Array<T> =>
  Array.from(new Set(a))

