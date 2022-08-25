export const moveToRight = (tiles) => {
  const updatedRowsWithScores = tiles.map(row => moveToRightRowAndReturnScores(row))
  const updatedTiles = updatedRowsWithScores.map(rowWithScore => rowWithScore.updatedRow)
  const updatedScores = updatedRowsWithScores.map(rowWithScore => rowWithScore.scoreRow)
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0)

  console.log('Обновленная таблица ', updatedTiles)
  return {
    tiles: updatedTiles,
    score: updatedScores
  }
}

export const moveToRightRowAndReturnScores = (row) => {
  //console.log('Список элементов к смещению вправо', row)
  const rowWithoutZero = row.filter(i => i !== 0)
  const {updatedRow, scoreRow} = mergeEqualsTiles(rowWithoutZero)

  while (updatedRow.length < 4) {
    updatedRow.unshift(0)
  }

  return {
    updatedRow: updatedRow,
    scoreRow: scoreRow
  }
}

export const mergeEqualsTiles = (row) => {
  let scoreRow = 0
  for (let i = row.length - 1; i > 0; i--) {
    if (row[i] === row[i - 1]) {
      row[i] = row[i] * 2
      row[i - 1] = 0

      scoreRow += row[i]
    }
  }
  return {
    updatedRow: row.filter(i => i !== 0),
    scoreRow: scoreRow
  }
}

export const generateRandomTiles = (tiles) => {
  const emptyTiles = tiles.flatMap((row, rowIndex) =>
    row.map((value, columnIndex) => (
        {rowIndex: rowIndex, columnIndex: columnIndex, value: value}
      )
    )).filter(i => i.value === 0)

  if (emptyTiles.length !== 0) {
    const newTileValue = getRandomInt(10) === 0 ? 4 : 2
    const randomIndex = getRandomInt(emptyTiles.length)
    const targetTile = emptyTiles[randomIndex]
    tiles[targetTile.rowIndex][targetTile.columnIndex] = newTileValue
  }

  return tiles
}

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

export const generateStartTiles = () => {
  const nullMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
  return generateRandomTiles(generateRandomTiles(nullMatrix))
}

export const getClearGameState = () => {
  return {
    score: 0,
    maxScore: 0,
    tiles: generateStartTiles()
  }
}

export const getRestartGameState = (gameState) => {
  return {
    ...getClearGameState(),
    maxScore: gameState.maxScore
  }
}

export const rotateMatrix = (matrix) => {
  return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
}
