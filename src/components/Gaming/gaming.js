import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import GameItem from '../GameItem/gameItem'
import LoaderView from '../LoaderView/loaderView'
import FailureView from '../FailureView/failureView'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingContainer,
  GamingTitleContainer,
  GamingTitle,
  GamingIconWrapper,
} from './styledComponent'
import './gaming.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {gamesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        gamesList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderGamingSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {gamesList} = this.state
        return (
          <GamingContainer
            isDarkTheme={isDarkTheme}
            className="gaming-content-container"
          >
            <GamingTitleContainer
              isDarkTheme={isDarkTheme}
              className="gaming-title-container"
            >
              <GamingIconWrapper isDarkTheme={isDarkTheme}>
                <SiYoutubegaming className="gaming-title-icon" />
              </GamingIconWrapper>
              <GamingTitle isDarkTheme={isDarkTheme}>Gaming</GamingTitle>
            </GamingTitleContainer>
            <ul className="games-ul-container">
              {gamesList.map(each => (
                <GameItem isDarkTheme={isDarkTheme} key={each.id} game={each} />
              ))}
            </ul>
          </GamingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderGamingSuccessView()
      case apiStatusConstants.failure:
        return <FailureView getData={this.getGamingData} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="gaming-main-container">
          <SideBar />
          {this.renderGamingList()}
        </div>
      </>
    )
  }
}

export default Trending
