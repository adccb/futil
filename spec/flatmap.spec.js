const { flatMap } = require('../dist/index.js')

describe('flatmap', () => {
  it('should operate on numeric elements', () => {
    const i = [ 1, 2, 3, [ 4, 5 ] ]
    const f = n => n + 1
    const o = [ 2, 3, 4, 5, 6 ]

    expect(flatMap(f, i)).toEqual(o)
  })
})

describe('flatmap#curry', () => {
  it('should return a function if not passed an iterable', () => {
    const f = n => n + 2
    const c = flatMap(f)

    expect(typeof c).toEqual('function')
  })

  it('should return a correct function', () => {
    const i = [ 1, 2, 3, 4, 5 ]
    const f = n => n + 1
    const o = [ 2, 3, 4, 5, 6 ]
    const c = flatMap(f)
    
    expect(c(i)).toEqual(o)
  })
})

