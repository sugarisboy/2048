export const moveToRight = (tiles) => {
  const updatedTiles = tiles.map(row => moveToRightRow(row))
  console.log('Обновленная таблица ', updatedTiles)
  return updatedTiles
}

export const moveToRightRow = (row) => {
  //console.log('Список элементов к смещению вправо', row)
  const rowWithoutZero = row.filter(i => i !== 0)
  const mergedRowWithoutZero = mergeEqualsTiles(rowWithoutZero)

  while (mergedRowWithoutZero.length < 4) {
    mergedRowWithoutZero.unshift(0)
  }

  return mergedRowWithoutZero
}

export const mergeEqualsTiles = (row) => {
  for (let i = row.length - 1; i > 0; i--) {
    if (row[i] === row[i - 1]) {
      row[i] = row[i] * 2
      row[i - 1] = 0
    }
  }
  return row.filter(i => i !== 0)
}

export const generateRandomTiles = (tiles) => {
  const emptyTiles = tiles.flatMap((row, rowIndex) =>
  row.map((value, columnIndex) => (
      {rowIndex: rowIndex, columnIndex: columnIndex, value: value}
    )
  )).filter(i => i.value === 0)

const newTileValue = getRandomInt(10) === 0 ? 4 : 2
const randomIndex = getRandomInt(emptyTiles.length)
const targetTile = emptyTiles[randomIndex]
tiles[targetTile.rowIndex][targetTile.columnIndex] = newTileValue


console.log(emptyTiles)
return tiles
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}


export const generateStartTiles = () => {
  const nullMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  return generateRandomTiles(generateRandomTiles(nullMatrix))
}



export const rotateMatrix = (matrix) => {
  return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
}
