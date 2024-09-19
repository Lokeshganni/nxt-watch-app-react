import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="header-main-container">
          <div className="logo-container" data-testid="home">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="nxt watch logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
            )}
          </div>
          <div>
            <button type="button">.</button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
