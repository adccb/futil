const { map } = require('../dist/index.js')

describe('map#array', () => {
  it('should operate on numeric arrays', () => {
    const i = [1, 2, 3, 4, 5]
    const f = n => n + 1
    const o = [2, 3, 4, 5, 6]

    expect(map(f, i)).toEqual(o)
  })

  it('should operate on string arrays', () => {
    const i = ['a', 'b', 'c']
    const f = n => n.toUpperCase()
    const o = ['A', 'B', 'C']

    expect(map(f, i)).toEqual(o)
  })

  it('should operate on identity', () => {
    const i = [1, 2, 3, 4, 5]
    const f = n => n

    expect(map(f, i)).toEqual(i)
  })

  it('should operate between types', () => {
    const i = ['a', 'ab', 'abc', 'abcd', 'abcde']
    const f = n => n.length
    const o = [1, 2, 3, 4, 5]

    expect(map(f, i)).toEqual(o)
  })
})

describe('map#object', () => {
  it('should operate on numeric keys', () => {
    const i = { a: 1, b: 2, c: 3 }
    const f = n => n + 1
    const o = { a: 2, b: 3, c: 4 }

    expect(map(f, i)).toEqual(o)
  })

  it('should operate on string keys', () => {
    const i = { a: 'a', b: 'b', c: 'c' }
    const f = n => n.toUpperCase()
    const o = { a: 'A', b: 'B', c: 'C' }

    expect(map(f, i)).toEqual(o)
  })

  it('should operate on identity', () => {
    const i = { a: 1, b: 2, c: 3 }
    const f = n => n

    expect(map(f, i)).toEqual(i)
  })

  it('should operate between types', () => {
    const i = { a: 'a', b: 'ab', c: 'abc' }
    const f = n => n.length
    const o = { a: 1, b: 2, c: 3 }

    expect(map(f, i)).toEqual(o)
  })
})

describe('map#curry', () => {
  it('should return a function if not passed an iterable', () => {
    const f = n => n + 2
    const c = map(f)

    expect(typeof c).toEqual('function')
  })

  it('should return a correct function', () => {
    const i = [ 1, 2, 3, 4, 5 ]
    const f = n => n + 1
    const o = [ 2, 3, 4, 5, 6 ]
    const c = map(f)
    
    expect(c(i)).toEqual(o)
  })
})

