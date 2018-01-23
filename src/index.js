// @flow

type Iterable = Array<any> | Object
type NestedArray<T> = Array<Array<T> | T>
type Either<T, V> = T | V

const map = (f: Function, i: Iterable): Either<Iterable, Function> => {
  if(Array.isArray(i)) {
    return i.map(f)
  } else {
    const newObj = {}
    Object.keys(i).forEach(k => newObj[k] = f(i[k]))
    return newObj
  }
}

const filter = (f: Function, i: Iterable): Either<Iterable, Function> => {
  if(Array.isArray(i)) {
    return i.filter(f)
  } else {
    const newObj = {}
    Object.keys(i).forEach(k => {
      if(f(i[k])) newObj[k] = i[k]
    })
    return newObj
  }
}

const reduce = (f: Function, a: Array<any> = []): Either<any, Function> => {
  return a.reduce(f)
}

const flatten = <T>(a: NestedArray<T>): Array<T> => {
  return a.reduce((n, i) => (
    Array.isArray(i) ? n.concat(flatten(i)) : n.concat(i)
  ), [])
}

const flatMap = (f: Function, a: NestedArray<any>): Either<Array<any>, Function> => {
  return map(f, flatten(a))
}

module.exports = { filter, flatten, flatMap, map, reduce }

