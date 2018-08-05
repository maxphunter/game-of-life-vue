import { gameOfLife } from '@/gameOfLifeLogic/gameOfLife'

let x = true
let o = false

test('Predict Next Generation Test 1', () => {
  var initialState =
  [[o, o, o, o, o, o, x, o],
    [x, x, x, o, o, o, x, o],
    [o, o, o, o, o, o, x, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, x, x, o, o, o],
    [o, o, o, x, x, o, o, o]]

  let expectedState =
  [[o, x, o, o, o, o, o, o],
    [o, x, o, o, o, x, x, x],
    [o, x, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, x, x, o, o, o],
    [o, o, o, x, x, o, o, o]]

  expect(gameOfLife(initialState)).toEqual(expectedState)
})

test('Predict Next Generation Test 2', () => {
  var initialState =
  [[o, o, o, o, o, o, o, o],
    [o, o, o, x, x, o, o, o],
    [o, o, o, x, x, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o]]

  let expectedState =
  [[o, o, o, o, o, o, o, o],
    [o, o, o, x, x, o, o, o],
    [o, o, o, x, x, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o]]

  expect(gameOfLife(initialState)).toEqual(expectedState)
})

test('Predict Next Generation Test 3', () => {
  var initialState =
  [[o, o, o, o, o, o, o, o],
    [o, o, o, x, x, x, o, o],
    [o, o, o, x, o, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o]]

  let expectedState =
  [[o, o, o, o, x, o, o, o],
    [o, o, o, x, x, o, o, o],
    [o, o, o, x, o, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o]]

  expect(gameOfLife(initialState)).toEqual(expectedState)
})

test('Predict Next Generation Test 4', () => {
  var initialState =
  [[o, o, o, o, o, o, o, o],
    [o, o, o, x, o, o, o, o],
    [o, o, o, x, o, o, o, o],
    [o, o, o, x, o, o, o, o],
    [o, o, o, x, o, o, o, o],
    [o, o, o, o, o, o, o, o]]

  let expectedState =
  [[o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, x, x, x, o, o, o],
    [o, o, x, x, x, o, o, o],
    [o, o, o, o, o, o, o, o],
    [o, o, o, o, o, o, o, o]]

  expect(gameOfLife(initialState)).toEqual(expectedState)
})
