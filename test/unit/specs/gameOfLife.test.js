import { gameOfLife, determineNewState, checkLeftCell, checkUpperLeftCell, checkAboveCell, checkUpperRightCell, checkRightCell, checkLowerRightCell, checkBottomCell, checkLowerLeftCell } from '@/gameOfLifeLogic/gameOfLife'

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

let alive = true
let dead = false

test('Determine New State: Alive Cell with less than two alive neighbors', () => {
  expect(determineNewState(0, alive)).toBe(dead)
})

test('Determine New State: Alive Cell with greater than three alive neighbors', () => {
  expect(determineNewState(4, alive)).toBe(dead)
})

test('Determine New State: Alive Cell with 2 or 3 alive neighbors', () => {
  expect(determineNewState(2, alive)).toBe(alive)
  expect(determineNewState(3, alive)).toBe(alive)
})

test('Determine New State: Dead cell with exactly 3 alive neighbors', () => {
  expect(determineNewState(3, dead)).toBe(alive)
  expect(determineNewState(4, dead)).toBe(dead)
  expect(determineNewState(2, dead)).toBe(dead)
})

test('checkLeftCell is true', () => {
  var initialState = [[true, false], [true, false]]
  expect(checkLeftCell(1, 0, initialState)).toBe(1)
})

test('checkUpperLeftCell is true', () => {
  var initialState = [[true, false], [true, false]]
  expect(checkUpperLeftCell(1, 1, initialState)).toBe(1)
})

test('checkAboveCell is true', () => {
  var initialState = [[true, false], [true, false]]
  expect(checkAboveCell(0, 1, initialState)).toBe(1)
})

test('checkUpperRightCell is true', () => {
  var initialState = [[true, true], [true, false]]
  expect(checkUpperRightCell(0, 1, initialState)).toBe(1)
})

test('checkRightCell is true', () => {
  var initialState = [[true, true], [true, false]]
  expect(checkRightCell(0, 0, initialState)).toBe(1)
})

test('checkLowerRightCell is true', () => {
  var initialState = [[true, false], [true, true]]
  expect(checkLowerRightCell(0, 0, initialState)).toBe(1)
})

test('checkBottomCell is true', () => {
  var initialState = [[true, false], [true, true]]
  expect(checkBottomCell(0, 0, initialState)).toBe(1)
})

test('checkLowerLeftCell is true', () => {
  var initialState = [[true, false], [true, true]]
  expect(checkLowerLeftCell(1, 0, initialState)).toBe(1)
})
