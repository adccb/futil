const { lift } = require('../dist/index.js')

describe('lift', () => {
  it('should correctly function as a getter', () => {
    const i = [ 'a', 'b', 'c' ]
    const lifted = lift(i)

    expect(lifted(0)).toEqual('a')
    expect(lifted(1)).toEqual('b')
    expect(lifted(2)).toEqual('c')
  })
  
  it('should return nil for undefined elements', () => {
    const i = [ 'a', 'b', 'c' ]
    const lifted = lift(i)

    expect(lifted(-1)).toEqual(null)
    expect(lifted('oops')).toEqual(null)
    expect(lifted(false)).toEqual(null)
    expect(lifted({})).toEqual(null)
  })
})

