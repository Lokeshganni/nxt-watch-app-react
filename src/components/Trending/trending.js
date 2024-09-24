import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import LoaderView from '../LoaderView/loaderView'
import FailureView from '../FailureView/failureView'
import TrendingVideoItem from '../TrendingVideoItem/trendingVideoItem'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingContainer,
  TrendingTitleContainer,
  Title,
  TrendingIconWrapper,
} from './styledComponent'
import './trending.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: each.channel,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        trendingVideosList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {trendingVideosList} = this.state
        return (
          <TrendingContainer
            isDarkTheme={isDarkTheme}
            className="trending-content-container"
          >
            <TrendingTitleContainer
              isDarkTheme={isDarkTheme}
              className="trending-title-container"
            >
              <TrendingIconWrapper isDarkTheme={isDarkTheme}>
                <HiFire className="trending-title-icon" />
              </TrendingIconWrapper>
              <Title isDarkTheme={isDarkTheme}>Trending</Title>
            </TrendingTitleContainer>
            <ul className="trending-videos-ul-container">
              {trendingVideosList.map(each => (
                <TrendingVideoItem
                  isDarkTheme={isDarkTheme}
                  key={each.id}
                  video={each}
                />
              ))}
            </ul>
          </TrendingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingVideosList = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return <FailureView getData={this.getTrendingVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="trending-main-container">
          <SideBar />
          {this.renderTrendingVideosList()}
        </div>
      </>
    )
  }
}

export default Trending
