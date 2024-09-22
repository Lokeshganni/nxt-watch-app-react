import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {LuSearch} from 'react-icons/lu'
import Header from '../Header'
import HomeBannerSection from '../HomeBannerSection'
import SideBar from '../SideBar'
import Videos from '../Videos'
import {
  HomeMainContainer,
  InputContainer,
  SearchButton,
} from './styledComponents'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchedTxt: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchedTxt} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchedTxt}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedList = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        channel: each.channel,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: formattedList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryVideos = () => {
    this.getData()
  }

  handleSearchedTxt = event => {
    this.setState({searchedTxt: event.target.value})
  }

  handleSearchBtn = () => {
    this.getData()
  }

  renderLoaderView = isDarkTheme => (
    <div className="loader-container" data-testid="loader">
      <Loader
        color={isDarkTheme ? '#ffffff' : '#000000'}
        type="ThreeDots"
        height="50"
        width="50"
      />
    </div>
  )

  renderSuccessView = isDarkTheme => {
    const {videosList} = this.state
    return (
      <Videos
        isDarkTheme={isDarkTheme}
        retryVideos={this.retryVideos}
        data={videosList}
      />
    )
  }

  renderFailureView = isDarkTheme => (
    <div className="failure-container">
      <img
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button onClick={() => this.getData()} type="button">
        Retry
      </button>
    </div>
  )

  renderVideosList = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView(isDarkTheme)
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {searchedTxt} = this.state
    return (
      <div>
        <Header />
        <div className="home-app-container">
          <SideBar />
          <div className="home-right-container">
            <HomeBannerSection />
            <ThemeContext.Consumer>
              {value => {
                const {isDarkTheme} = value
                return (
                  <HomeMainContainer
                    isDarkTheme={isDarkTheme}
                    className="home-main-content-container"
                  >
                    <div className="search-bar-container">
                      <InputContainer
                        value={searchedTxt}
                        onChange={this.handleSearchedTxt}
                        isDarkTheme={isDarkTheme}
                        type="search"
                      />
                      <SearchButton
                        onClick={this.handleSearchBtn}
                        isDarkTheme={isDarkTheme}
                        type="button"
                      >
                        <LuSearch size={20} />
                      </SearchButton>
                    </div>
                    {this.renderVideosList(isDarkTheme)}
                  </HomeMainContainer>
                )
              }}
            </ThemeContext.Consumer>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
