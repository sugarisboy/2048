const Tile = (props) => {
  const {value} = props
  const log2value = value === 0 ? 0 : log2(value)

  const styles = {background: `rgb(123, ${228 - log2value * 8}, ${196 - log2value * 8})`}

  return (
    <div className="tiles" style={styles}>
      {value !== 0 && value}
    </div>
  )
}

const log2 = (value) => {
  return Math.log(value) / Math.log(2)
}

export default Tile
