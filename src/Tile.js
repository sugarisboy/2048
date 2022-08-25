const Tile = (props) => {
  const {value} = props
  const log2value = log2(value)

  return (
    <div className="tiles" style={{background: `rgb(123, ${228 - log2value * 4}, ${196 - log2value * 4})`}}>
      {value !== 0 && value}
    </div>
  )
}

const log2 = (value) => {
  return Math.log(value) / Math.log(2)
}

export default Tile
