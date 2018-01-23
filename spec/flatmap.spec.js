const { flatMap } = require('../dist/index.js')

describe('flatmap', () => {
  it('should operate on numeric elements', () => {
    const i = [ 1, 2, 3, [ 4, 5 ] ]
    const f = n => n + 1
    const o = [ 2, 3, 4, 5, 6 ]

    expect(flatMap(f, i)).toEqual(o)
  })
})
