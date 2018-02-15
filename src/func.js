// @flow

export const attachProperty = (o: Object, k: string, v: any) => 
  Object.assign({}, { [k]: v }, o)
