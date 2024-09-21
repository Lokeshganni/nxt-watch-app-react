import VideoCard from '../VideoCard'
import {Header, Para} from '../../styledComponents'
import './index.css'

const Videos = props => {
  const {data, retryVideos, isDarkTheme} = props

  return (
    <>
      {data.length !== 0 ? (
        <ul className="videos-list-ul-container">
          {data.map(each => (
            <VideoCard
              isDarkTheme={isDarkTheme}
              key={each.id}
              videoObj={each}
            />
          ))}
        </ul>
      ) : (
        <div className="no-videos-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <Header isDarkTheme={isDarkTheme}>No Search results found</Header>
          <Para isDarkTheme={isDarkTheme}>
            Try different key words or remove search filter
          </Para>
          <button onClick={() => retryVideos()} type="button">
            Retry
          </button>
        </div>
      )}
    </>
  )
}

export default Videos
