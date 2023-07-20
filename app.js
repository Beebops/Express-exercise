const express = require('express')
const ExpressError = require('./expressError')
const {
  validateAndConvertToArray,
  getAverage,
  getMedian,
  getMode,
} = require('./utils')

const app = express()

app.use(express.json())

app.get('/average', (request, response, next) => {
  if (!request.query.nums) {
    throw new ExpressError(
      'Query key must be "nums" with a comma-separated list of numbers',
      400
    )
  }

  let numsStr = request.query.nums
  let nums = validateAndConvertToArray(numsStr)
  if (nums instanceof Error) {
    throw new ExpressError(nums.message)
  }

  let result = {
    operation: 'average',
    result: getAverage(nums),
  }

  return response.send(result)
})

app.get('/mode', (request, response, next) => {
  if (!request.query.nums) {
    throw new ExpressError(
      'Query key must be "nums" with a comma-separated list of numbers',
      400
    )
  }

  let numsStr = request.query.nums
  let nums = validateAndConvertToArray(numsStr)
  if (nums instanceof Error) {
    throw new ExpressError(nums.message)
  }

  let result = {
    operation: 'mode',
    result: getMode(nums),
  }

  return response.send(result)
})

app.get('/median', (request, response, next) => {
  if (!request.query.nums) {
    throw new ExpressError(
      'Query key must be "nums" with a comma-separated list of numbers',
      400
    )
  }

  let numsStr = request.query.nums
  let nums = validateAndConvertToArray(numsStr)
  if (nums instanceof Error) {
    throw new ExpressError(nums.message)
  }

  let result = {
    operation: 'median',
    result: getMedian(nums),
  }

  return response.send(result)
})

app.use((request, response, next) => {
  const error = new ExpressError('Not found', 404)
  return next(error)
})

app.use(function (error, request, response, next) {
  response.status(error.status || 500)

  return response.json({
    error: error,
    message: error.message,
  })
})

app.listen(5000, function () {
  console.log('App on port 5000')
})
