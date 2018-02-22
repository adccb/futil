// @flow

export const lhs = (lhs: any, rhs: any) => lhs
export const rhs = (lhs: any, rhs: any) => rhs

export const attachProperty = (o: Object, k: string, v: any) => 
  Object.assign({}, { [k]: v }, o)

export const range = (length: number): Array<number> => 
  Array.from({ length }, rhs)

