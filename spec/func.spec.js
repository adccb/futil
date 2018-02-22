const { lhs, rhs, attachProperty, range } = require('../dist/index.js')

describe('lhs/rhs', () => {
  it('should give the correct respective parameter', () => {
    const l = 'left'
    const r = 'right'

    expect(lhs(l, r)).toEqual(l)
    expect(rhs(l, r)).toEqual(r)
  })
})

describe('range', () => {
  it('should give an array with the correct range', () => {
    const i = 10
    const o = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    
    expect(range(i)).toEqual(o)
  })
})

describe('attachProperty', () => {
  it('should assign the correct property on the given object', () => {
    const obj = {}
    const propertyName = 'name'
    const propertyValue = 'autumn'

    expect(attachProperty(obj, propertyName, propertyValue)).toEqual({ [propertyName]: propertyValue })
  })
})

