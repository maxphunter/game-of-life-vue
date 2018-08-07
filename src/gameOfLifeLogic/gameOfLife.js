export function determineNewState (aliveCount, initialCellState) {
  let newState = false
  // if previously alive
  if (initialCellState) {
    if (aliveCount < 2 || aliveCount > 3) {
      newState = false
    } else if (aliveCount === 2 || aliveCount === 3) {
      newState = true
    }
  } else if (!initialCellState) {
    if (aliveCount === 3) {
      newState = true
    } else {
      newState = false
    }
  }
  return newState
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

      aliveCount += checkLeftCell(x, y, initialState)
      aliveCount += checkUpperLeftCell(x, y, initialState)
      aliveCount += checkAboveCell(x, y, initialState)
      aliveCount += checkUpperRightCell(x, y, initialState)
      aliveCount += checkRightCell(x, y, initialState)
      aliveCount += checkLowerRightCell(x, y, initialState)
      aliveCount += checkBottomCell(x, y, initialState)
      aliveCount += checkLowerLeftCell(x, y, initialState)

      // determine new state based on alive/dead neighbor count
      let newState = determineNewState(aliveCount, initialState[y][x])

      updatedRow.push(newState)
    }
    updatedState.push(updatedRow)
  }

  return updatedState
}

function checkLeftCell (x, y, initialState) {
  let leftCellAlive = false
  if (x > 0) {
    leftCellAlive = initialState[y][x - 1]
  }
  return leftCellAlive ? 1 : 0
}

function checkUpperLeftCell (x, y, initialState) {
  let upperLeftCellAlive = false
  if (x > 0 && y > 0) {
    upperLeftCellAlive = initialState[y - 1][x - 1]
  }
  return upperLeftCellAlive ? 1 : 0
}

function checkAboveCell (x, y, initialState) {
  let isAboveCellAlive = false
  // check above
  if (y > 0) {
    isAboveCellAlive = initialState[y - 1][x]
  }
  return isAboveCellAlive ? 1 : 0
}

function checkUpperRightCell (x, y, initialState) {
  let isUpperRightCellAlive = false
  // check upper right
  if (x < initialState[y].length - 1 && y > 0) {
    isUpperRightCellAlive = initialState[y - 1][x + 1]
  }
  return isUpperRightCellAlive ? 1 : 0
}

function checkRightCell (x, y, initialState) {
  let isRightCellAlive = false
  // check right
  if (x < initialState[y].length - 1) {
    isRightCellAlive = initialState[y][x + 1]
  }
  return isRightCellAlive ? 1 : 0
}
function checkLowerRightCell (x, y, initialState) {
  let isLowerRightCellAlive = false
  // check lower right
  if (x < initialState[y].length - 1 && y < initialState.length - 1) {
    isLowerRightCellAlive = initialState[y + 1][x + 1]
  }
  return isLowerRightCellAlive ? 1 : 0
}
function checkBottomCell (x, y, initialState) {
  let isBottomCellAlive = false
  // check below
  if (y < initialState.length - 1) {
    isBottomCellAlive = initialState[y + 1][x]
  }
  return isBottomCellAlive ? 1 : 0
}
function checkLowerLeftCell (x, y, initialState) {
  let isLowerLeftCellAlive = false
  // check lower left
  if (x > 0 && y < initialState.length - 1) {
    isLowerLeftCellAlive = initialState[y + 1][x - 1]
  }
  return isLowerLeftCellAlive ? 1 : 0
}
