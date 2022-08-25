import Tile from "./Tile";
import React, {useEffect, useState} from "react";
import {generateRandomTiles, getClearGameState, moveToRight, getRestartGameState, rotateMatrix} from "./service";
import Scores from "./Scores";
import RestartButton from "./RestartButton";

const GameBoard = () => {
  let [gameState, setGameState] = useState(getClearGameState())

  const {tiles, score, maxScore} = gameState

  useEffect(() => {
    const callback = (event) => setGameState(calculateNewTileMatrix(event, gameState))
    document.addEventListener("keyup", callback)
    return () => document.removeEventListener("keyup", callback)
  }, [gameState])

  return (
    <div className="gameboard">
      <div className="gameboard-header">
        <Scores score={score} maxScore={maxScore}/>
        <RestartButton onClick={() => setGameState(getRestartGameState(gameState))}/>
      </div>

      <div className="gameboard-board">
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
    </div>
  )
}

const calculateNewTileMatrix = (event, gameState) => {
  let newScore = gameState.score

  const {maxScore} = gameState

  const moveToRightAndUpdateScores = (sourceTiles) => {
    const {tiles, score} = moveToRight(sourceTiles)
    newScore += score
    return tiles
  }

  const keyCodeToListFunction = {
    37: [rotateMatrix, rotateMatrix, moveToRightAndUpdateScores, rotateMatrix, rotateMatrix, generateRandomTiles], // LEFT
    38: [rotateMatrix, moveToRightAndUpdateScores, rotateMatrix, rotateMatrix, rotateMatrix, generateRandomTiles], // UP
    39: [moveToRightAndUpdateScores, generateRandomTiles], // RIGHT
    40: [rotateMatrix, rotateMatrix, rotateMatrix, moveToRightAndUpdateScores, rotateMatrix, generateRandomTiles]  // DOWN
  }

  const listFunction = keyCodeToListFunction[event.keyCode]
  if (listFunction) {
    return {
      tiles: listFunction.reduce((prevValue, currentFunction) => currentFunction(prevValue), gameState.tiles),
      score: newScore,
      maxScore: newScore > maxScore ? newScore : maxScore
    }
  } else {
    return gameState
  }
}

export default GameBoard
