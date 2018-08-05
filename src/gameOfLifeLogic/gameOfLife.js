function determineNewState (aliveCount, initialCellState) {
  // if previously alive
  if (initialCellState) {
    if (aliveCount < 2 || aliveCount > 3) {
      return false
    }
    if (aliveCount === 2 || aliveCount === 3) {
      return true
    }
  }

  // if previously dead
  if (!initialCellState) {
    if (aliveCount === 3) {
      return true
    } else {
      return false
    }
  }
}

export function gameOfLife (initialState) {
  var updatedState = []

  // iterate over rows
  for (var y = 0; y < initialState.length; y++) {
    var updatedRow = []
    // iterate over columns within each row
    for (var x = 0; x < initialState[y].length; x++) {
      let aliveCount = 0
      // check all the surroundings
      // check left

      if (x > 0) {
        let leftCell = initialState[y][x - 1]
        if (leftCell) { aliveCount++ }
      }

      // check upper left
      if (x > 0 && y > 0) {
        let upperLeftCell = initialState[y - 1][x - 1]
        if (upperLeftCell) { aliveCount++ }
      }

      // check above
      if (y > 0) {
        let aboveCell = initialState[y - 1][x]
        if (aboveCell) { aliveCount++ }
      }

      // check upper right
      if (x < initialState[y].length - 1 && y > 0) {
        let upperRightCell = initialState[y - 1][x + 1]
        if (upperRightCell) { aliveCount++ }
      }

      // check right
      if (x < initialState[y].length - 1) {
        let rightCell = initialState[y][x + 1]
        if (rightCell) { aliveCount++ }
      }

      // check lower right
      if (x < initialState[y].length - 1 && y < initialState.length - 1) {
        let lowerRightCell = initialState[y + 1][x + 1]
        if (lowerRightCell) { aliveCount++ }
      }

      // check below
      if (y < initialState.length - 1) {
        let belowCell = initialState[y + 1][x]
        if (belowCell) { aliveCount++ }
      }

      // check lower left
      if (x > 0 && y < initialState.length - 1) {
        let lowerLeftCell = initialState[y + 1][x - 1]
        if (lowerLeftCell) { aliveCount++ }
      }

      // determine new state based on alive/dead neighbor count
      let newState = determineNewState(aliveCount, initialState[y][x])

      updatedRow.push(newState)
    }
    updatedState.push(updatedRow)
  }

  return updatedState
}
