const { every } = require('../dist/index.js')

describe('every', () => {
  it('should function correctly on arrays', () => {
    const i = [ 1, 2, 3, 4, 5 ]
    const f = i => typeof i === 'number'

    expect(every(f, i)).toEqual(true)
  })

  it('should partially apply', () => {
    const i = [ 1, 2, 3, 4, 5 ]
    const f = i => typeof i === 'number'

    const allNumbers = every(f)

    expect(allNumbers(i)).toEqual(true)
  })
})

