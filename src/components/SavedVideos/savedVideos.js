import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import {BsThreeDotsVertical} from 'react-icons/bs'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem/trendingVideoItem'
import ThemeContext from '../../context/ThemeContext'
import {getBookmarks} from '../../services/bookmarkService'
import {
  SavedVideosContainer,
  SavedVideosTitleContainer,
  SavedVideosTitle,
  SavedVideosIconWrapper,
} from './styledComponent'
import './savedVideos.css'

class Trending extends Component {
  state = {savedVideosList: []}

  componentDidMount() {
    this.getSavedVideos()
  }

  getSavedVideos = () => {
    const bookmarkedData = getBookmarks()
    this.setState({savedVideosList: bookmarkedData})
  }

  renderEmptySavedVideos = isDarkTheme => (
    <SavedVideosContainer
      isDarkTheme={isDarkTheme}
      className="saved-videos-content-container no-saved-videos-container"
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
        alt="no saved videos"
      />
      <h1 style={{color: `${isDarkTheme ? '#ffffff' : '#000000'}`}}>
        No saved videos found
      </h1>
      <p>You can save your videos while watching them</p>
    </SavedVideosContainer>
  )

  renderSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {savedVideosList} = this.state
        console.log(savedVideosList)
        if (savedVideosList.length === 0) {
          return this.renderEmptySavedVideos(isDarkTheme)
        }
        return (
          <SavedVideosContainer
            isDarkTheme={isDarkTheme}
            className="saved-videos-content-container"
          >
            <SavedVideosTitleContainer
              isDarkTheme={isDarkTheme}
              className="gaming-title-container"
            >
              <SavedVideosIconWrapper isDarkTheme={isDarkTheme}>
                <HiFire className="gaming-title-icon" />
              </SavedVideosIconWrapper>
              <SavedVideosTitle isDarkTheme={isDarkTheme}>
                Saved Videos
              </SavedVideosTitle>
            </SavedVideosTitleContainer>
            <ul className="saved-videos-ul-container">
              {savedVideosList.map(each => (
                <div className="saved-video-item-card">
                  <TrendingVideoItem
                    isDarkTheme={isDarkTheme}
                    key={each.id}
                    video={each}
                  />
                  <button className="three-dots-icon-btn" type="button">
                    <BsThreeDotsVertical />
                  </button>
                </div>
              ))}
            </ul>
          </SavedVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <div className="saved-videos-main-container">
          <SideBar />
          {this.renderSavedVideos()}
        </div>
      </>
    )
  }
}

export default Trending
