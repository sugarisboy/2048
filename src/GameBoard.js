import Tile from "./Tile";
import React, {useEffect, useState} from "react";
import {moveToRight} from "./service";

const GameBoard = () => {
  let [tiles, setTiles] = useState([
    [0, 2, 4, 8],
    [16, 32, 64, 128],
    [256, 512, 1024, 2048],
    [0, 0, 0, 0]
  ])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
  }, [])

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 37:
        console.log('left arrow activated')
        break;
      case 38:
        console.log('up arrow activated')
        break;
      case 39:
        console.log('right arrow activated')
        setTiles(moveToRight(tiles))
        break;
      case 40:
        console.log('down arrow activated')
        break;
      default:
        break;
    }
  }

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

export default GameBoard
