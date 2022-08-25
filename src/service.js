export const moveToRight = (tiles) => {
  // Копируем массив для сохранения исходного значения старого
  tiles = JSON.parse(JSON.stringify(tiles));

  const updadteTils = tiles.map(row => moveToRightRow(row))
  console.log( 'Обновленная таблица ', updadteTils)
 return updadteTils
}

export const moveToRightRow = (row) => {
  console.log('Список элементов к смещению вправо', row)
  const rowWithoutZero = row.filter (i => i !==0)
  console.log(rowWithoutZero.length)
  for (let i = rowWithoutZero.length - 1; i > 0 ; i--) {
    console.log(i)
    if (rowWithoutZero[i] === rowWithoutZero[i-1]) {
      rowWithoutZero[i] = rowWithoutZero[i] * 2
      rowWithoutZero[i-1] = 0 
      console.log ('массив', rowWithoutZero)
    }

  }
  while (rowWithoutZero.length < 4) {
    rowWithoutZero.unshift(0)
  }

  return rowWithoutZero
}
