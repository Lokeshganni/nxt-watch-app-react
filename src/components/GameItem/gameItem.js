import './gameItem.css'

const GameItem = ({game, isDarkTheme}) => {
  const {thumbnailUrl, title, viewCount} = game
  return (
    <li className="game-item-li-container">
      <img src={thumbnailUrl} alt="img" />
      <h1 style={{color: `${isDarkTheme ? '#ffffff' : '#000000'}`}}>{title}</h1>
      <div className="watching-and-worldwide-container">
        <p>{viewCount} Watching</p>
        <p>Worldwide</p>
      </div>
    </li>
  )
}

export default GameItem
