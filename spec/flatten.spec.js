const { flatten } = require('../dist/index.js')

describe('flatten', () => {
  it('should operate on numeric arrays', () => {
    const i = [ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]
    const o = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

    expect(flatten(i)).toEqual(o)
  })
})

