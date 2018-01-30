const { filter } = require('../dist/index.js')

describe('filter#array', () => {
  it('should operate on numbers', () => {
    const i = [1, 2, 3, 4, 5]
    const f = i => i < 3
    const o = [1, 2]

    expect(filter(f, i)).toEqual(o)
  })

  it('should operate on strings', () => {
    const i = ['a', 'ab', 'abc', 'abcd', 'abcde']
    const f = i => i.length >= 4
    const o = ['abcd', 'abcde']

    expect(filter(f, i)).toEqual(o)
  })

  it('should operate on objects', () => {
    const i = [{ flag: true }, {}, {}]
    const f = i => i.flag
    const o = [{ flag: true }]

    expect(filter(f, i)).toEqual(o)
  })

  it('should operate on mixed types', () => {
    const i = [1, 2, '3', {}, []]
    const f = i => typeof i === 'string'
    const o = ['3']

    expect(filter(f, i)).toEqual(o)
  })
})

describe('filter#object', () => {
  it('should operate on numeric keys', () => {
    const i = { a: 1, b: 2, c: 3 }
    const f = n => n < 2
    const o = { a: 1 }

    expect(filter(f, i)).toEqual(o)
  })

  it('should operate on string keys', () => {
    const i = { a: 'a', b: 'ab', c: 'abc', d: 'abcd', e: 'abcde' }
    const f = i => i.length >= 4
    const o = { d: 'abcd', e: 'abcde' }

    expect(filter(f, i)).toEqual(o)
  })

  it('should operate on objects', () => {
    const i = { a: { flag: true }, b: { flag: false } }
    const f = i => i.flag
    const o = { a: { flag: true } }

    expect(filter(f, i)).toEqual(o)
  })

  it('should operate on mixed types', () => {
    const i = { a: 'a', b: 2, c: '3' }
    const f = i => typeof i === 'string'
    const o = { a: 'a', c: '3' }

    expect(filter(f, i)).toEqual(o)
  })
})

describe('filter#curry', () => {
  it('should return a function if not passed an iterable', () => {
    const f = n => n + 2
    const c = filter(f)

    expect(typeof c).toEqual('function')
  })

  it('should return a correct function', () => {
    const i = [ 1, 2, 3, 4, 5 ]
    const f = n => n % 2
    const o = [ 1, 3, 5 ]
    const c = filter(f)
    
    expect(c(i)).toEqual(o)
  })
})


