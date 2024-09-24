import ThemeContext from '../../context/ThemeContext'
import './failureView.css'

const FailureView = ({getData}) => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          style={{'background-color': `${isDarkTheme ? '#181818' : '#f9f9f9'}`}}
          className="failure-container"
        >
          <img
            src={
              !isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            }
            alt="failure view"
          />
          <h1 style={{color: `${isDarkTheme ? '#ffffff' : '#000000'}`}}>
            Oops! Something Went Wrong
          </h1>
          <p>
            We are having some trouble to complete your request. Please try
            again.
          </p>
          <button onClick={() => getData()} type="button">
            Retry
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default FailureView
