import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {LuSearch} from 'react-icons/lu'
import Header from '../Header'
import HomeBannerSection from '../HomeBannerSection'
import SideBar from '../SideBar'
import Videos from '../Videos'
import FailureView from '../FailureView/failureView'
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
    this.getHomeData()
  }

  getHomeData = async () => {
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

  handleSearchedTxt = event => {
    this.setState({searchedTxt: event.target.value})
  }

  retryVideos = () => {
    this.getHomeData()
  }

  handleSearchBtn = () => {
    this.getHomeData()
  }

  renderLoader = isDarkTheme => (
    <div className="home-loader-container" data-testid="loader">
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

  renderVideosList = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader(isDarkTheme)
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return <FailureView getData={this.getHomeData} />
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
