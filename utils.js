function getMode(arr) {
  const countMap = new Map()
  for (const num of arr) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1)
    } else {
      countMap.set(num, 1)
    }
  }

  let mode
  let maxCount = 0

  for (const [key, value] of countMap) {
    if (value > maxCount) {
      maxCount = value
      mode = key
    }
  }
  return mode
}

function getMedian(arr) {
  let median

  arr.sort((a, b) => a - b)

  if (arr.length % 2 !== 0) {
    let middleIndex = Math.floor(arr.length / 2)
    median = arr[middleIndex]
  } else {
    let middleIndex = Math.floor(arr.length / 2)
    median = (arr[middleIndex] + arr[middleIndex - 1]) / 2
  }
  return median
}

function getAverage(arr) {
  return arr.reduce((x, y) => x + y, 0) / arr.length
}

function validateAndConvertToArray(numsStr) {
  const numsArr = numsStr.split(',')

  const result = numsArr.map((numStr) => {
    const valToNum = Number(numStr.trim())
    if (Number.isNaN(valToNum)) {
      throw new Error(`The value ${numStr} is not a valid number`)
    }
    return valToNum
  })
  return result
}

module.exports = {
  getAverage,
  getMedian,
  getMode,
  validateAndConvertToArray,
}
