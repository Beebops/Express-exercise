const {
  getAverage,
  getMedian,
  getMode,
  validateAndConvertToArray,
} = require('./utils')

describe('getAverage', () => {
  it('returns the average of an array', () => {
    expect(getAverage([10, 20, 30])).toEqual(20)
    expect(getAverage([-10, -20, -30])).toEqual(-20)
  })
})

describe('getMode', () => {
  it('returns the mode of an array', () => {
    expect(getMode([1, 1, 4, 0, 6, 1])).toEqual(1)
  })
})

describe('getMedian', () => {
  it('returns the median of an array', () => {
    expect(getMedian([1, 2, 3, 4, 5])).toEqual(3)
    expect(getMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5)
  })
})
