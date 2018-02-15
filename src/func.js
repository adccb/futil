// @flow

export const attachProperty = (o: Object, k: string, v: any) => {
  o[k] = v
  return o
}

