const { reduce } = require('../dist/index.js')

describe('reduce#array', () => {
  it('should operate on numbers', () => {
    const i = [1, 2, 3, 4, 5]
    const f = (acc, curr) => acc + curr
    const o = 15

    expect(reduce(f, i)).toEqual(o)
  })

  it('should operate on strings', () => {
    const i = ['a', 'ab', 'abc', 'abcd', 'abcde']
    const f = (acc, curr) => acc + curr
    const o = 'aababcabcdabcde'

    expect(reduce(f, i)).toEqual(o)
  })
})

