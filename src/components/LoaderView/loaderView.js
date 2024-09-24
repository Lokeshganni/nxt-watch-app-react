import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import './loaderView.css'

const LoaderView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          style={{backgroundColor: `${isDarkTheme ? '#181818' : '#f9f9f9 '}`}}
          className="loader-container"
          data-testid="loader"
        >
          <Loader
            color={isDarkTheme && '#ffffff'}
            type="ThreeDots"
            height="50"
            width="50"
          />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default LoaderView
