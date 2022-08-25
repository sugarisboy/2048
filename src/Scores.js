import React from "react";

const Scores = (props) => {
  const {value} = props

  return (
    <div className="scores">
      Scores: {value}
    </div>
  )
}

export default Scores
