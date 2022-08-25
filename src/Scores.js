import React from "react";

const Scores = (props) => {
  const {score, maxScore} = props

  return (
    <div className="scores">
      Score: {score}
      <br/>
      Best score: {maxScore}
    </div>
  )
}

export default Scores
