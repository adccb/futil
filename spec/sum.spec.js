const { sum } = require('../dist/index.js')

describe('sum', () => {
  it('should function correctly on arrays', () => {
    const one = [ 1, 2, 3, 4, 5 ]
    const two = [ 3, 19, 10, 22, 34, 18, 0 ]
    
    expect(sum(one)).toEqual(15)
    expect(sum(two)).toEqual(106)
  })
})
