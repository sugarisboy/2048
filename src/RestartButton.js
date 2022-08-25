import React from "react";

const RestartButton = (props) => {
  const {onClick} = props

  return (
    <div className="restart-button" onClick={onClick}/>
  )
}

export default RestartButton
