import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {Container, Heading, Para} from './styledComponent'
import './notfound.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Header />
          <div className="not-found-main-container">
            <SideBar />
            <Container
              isDarkTheme={isDarkTheme}
              className="not-found-content-container"
            >
              <img
                className="not-found-img"
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <Heading isDarkTheme={isDarkTheme}>Page Not Found</Heading>
              <Para>
                We are sorry, the page you requested could not be found.
              </Para>
            </Container>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
