import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {GamingContainer} from './styledComponent'
import './gaming.css'

const Trending = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Header />
          <div className="gaming-main-container">
            <SideBar />
            <GamingContainer
              isDarkTheme={isDarkTheme}
              className="gaming-content-container"
            >
              <h1 isDarkTheme={isDarkTheme}>Gaming</h1>
            </GamingContainer>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Trending
