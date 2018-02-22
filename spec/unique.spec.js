const { unique } = require('../dist/index')

describe('unique', () => {
  it('should function correctly', () => {
    const i = [ 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9 ]
    const o = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    expect(unique(i)).toEqual(o)
  })
})
