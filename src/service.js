export const moveToRight = (tiles) => {
  // Копируем массив для сохранения исходного значения старого
  tiles = JSON.parse(JSON.stringify(tiles));

  tiles.forEach(row => moveToRightRow(row))

  return tiles
}

export const moveToRightRow = (row) => {
  console.log('Список элементов к смещению вправо', row)


}
