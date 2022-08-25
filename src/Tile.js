import React, {useEffect, useState} from "react";

const Tile = (props) => {
  const [scale, setScale] = useState(1);
  const {value} = props
  const log2value = value === 0 ? 0 : log2(value)

  const color = value !== 0
    ? `rgb(${256 - log2value * 8}, ${200 - log2value * 12}, ${64 + log2value * 8})`
    : '#bdb3b3'

  let styles = {
    background: color,
    transform: `scale(${scale})`
  }

  useEffect(() => {
    if (value !== 0) {
      setScale(1.1)
      setTimeout(() => setScale(1), 100)
    }
    return () => {
      setScale(1)
    }
  }, [value])

  return (
    <div className="tile" style={styles}>
      <p>
        {value !== 0 && value}
      </p>
    </div>
  )
}

const log2 = (value) => {
  return Math.log(value) / Math.log(2)
}

export default Tile
