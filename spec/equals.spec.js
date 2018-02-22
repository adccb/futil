const { equals } = require('../dist/index')

describe('equals', () => {
  it('should operate on arrays', () => {
    const a = [ 1, 2, 3, 4, 5 ]
    const b = [ 1, 2, 3, 4, 5 ]
    const c = [ 2, 3, 4, 5, 6 ]

    expect(equals(a, b)).toEqual(true)
    expect(equals(a, c)).toEqual(false)
  })
})
