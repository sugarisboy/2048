import Tile from "./Tile";
import React, {useEffect, useState} from "react";
import {generateRandomTiles, generateStartTiles, moveToRight, rotateMatrix} from "./service";

const GameBoard = () => {
  let [tiles, setTiles] = useState(generateStartTiles())

  useEffect(() => {
    const callback = (event) => setTiles(calculateNewTileMatrix(event, tiles))
    document.addEventListener("keyup", callback)
    return () => document.removeEventListener("keyup", callback)
  }, [tiles])

  return (
    <div className="gameboard">
      {
        tiles.map((row, rowIndex) => (
          <div className="gameboard-row" key={rowIndex}>
            {
              row.map((tile, tileIndex) => <Tile value={tile} key={rowIndex * 4 + tileIndex}/>)
            }
          </div>
        ))
      }
    </div>
  )
}

const calculateNewTileMatrix = (event, tiles) => {
  const keyCodeToListFunction = {
    37: [rotateMatrix, rotateMatrix, moveToRight, rotateMatrix, rotateMatrix, generateRandomTiles], // LEFT
    38: [rotateMatrix, moveToRight, rotateMatrix, rotateMatrix, rotateMatrix, generateRandomTiles], // UP
    39: [moveToRight, generateRandomTiles], // RIGHT
    40: [rotateMatrix, rotateMatrix, rotateMatrix, moveToRight, rotateMatrix, generateRandomTiles]  // DOWN
  }

  const listFunction = keyCodeToListFunction[event.keyCode]
  if (listFunction) {
    return listFunction.reduce((prevValue, currentFunction) => currentFunction(prevValue), tiles)
  } else {
    return tiles
  }
}

export default GameBoard
