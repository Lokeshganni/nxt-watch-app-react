import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {SavedVideosContainer} from './styledComponent'
import './savedVideos.css'

const Trending = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Header />
          <div className="saved-videos-main-container">
            <SideBar />
            <SavedVideosContainer
              isDarkTheme={isDarkTheme}
              className="saved-videos-content-container"
            >
              <h1 isDarkTheme={isDarkTheme}>Saved Videos</h1>
            </SavedVideosContainer>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Trending
