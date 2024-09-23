import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import {TiTick} from 'react-icons/ti'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  Container,
  Title,
  ChannelName,
  SubscribersCount,
  ChannelDescription,
  AllInteractionsContainer,
  InteractionButton,
} from './styledComponent'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    channelObj: {},
    apiStatus: apiStatusConstants.initial,
    date: '',
    notification: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {id} = match.params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const formattedData = {
        channel: data.video_details.channel,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }

      const formattedChannel = {
        name: formattedData.channel.name,
        profileImageUrl: formattedData.channel.profile_image_url,
        subscriberCount: formattedData.channel.subscriber_count,
      }

      const dateDistance = formatDistanceToNow(
        new Date(formattedData.publishedAt),
      )
      const date = dateDistance.split(' ').slice(1, 3).join(' ')

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: formattedData,
        channelObj: formattedChannel,
        date,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  handleSaveVideo = () => {
    this.setState({notification: 'video saved successfully!'})

    setTimeout(() => {
      this.setState({notification: ''})
    }, 3000)
  }

  render() {
    const {videoDetails, channelObj, date, notification} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <Container isDarkTheme={isDarkTheme}>
                <SideBar />
                <div className="video-item-details-container">
                  <div className="responsive-container">
                    <ReactPlayer
                      url={videoDetails.videoUrl}
                      controls
                      width="100%"
                      height="100%"
                      className="react-player"
                    />
                  </div>
                  <Title isDarkTheme={isDarkTheme}>{videoDetails.title}</Title>
                  <div className="views-and-likes-container">
                    <div className="views-container">
                      <p className="views-and-date-para">
                        {videoDetails.viewCount} views {date} ago
                      </p>
                    </div>
                    <AllInteractionsContainer
                      isDarkTheme={isDarkTheme}
                      className="like-dislike-save-container"
                    >
                      <InteractionButton
                        isDarkTheme={isDarkTheme}
                        className="interaction-btn"
                        type="button"
                      >
                        <BiLike className="interaction-icon" />
                        <p className="interaction-para">Like</p>
                      </InteractionButton>
                      <InteractionButton
                        isDarkTheme={isDarkTheme}
                        className="interaction-btn"
                        type="button"
                      >
                        <BiDislike className="interaction-icon" />
                        <p className="interaction-para">Dislike</p>
                      </InteractionButton>
                      <InteractionButton
                        isDarkTheme={isDarkTheme}
                        className="interaction-btn"
                        type="button"
                        onClick={this.handleSaveVideo}
                      >
                        <MdOutlinePlaylistAdd className="interaction-icon" />
                        <p className="interaction-para">Save</p>
                      </InteractionButton>
                    </AllInteractionsContainer>
                    {notification && (
                      <div className="notification-container">
                        <TiTick className="notification-tick-icon" />
                        <p className="notification">{notification}</p>
                      </div>
                    )}
                  </div>
                  <hr />
                  <div>
                    <div className="channel-logo-and-name-container">
                      <img
                        className="channel-logo"
                        src={channelObj.profileImageUrl}
                        alt="img"
                      />
                      <div>
                        <ChannelName isDarkTheme={isDarkTheme}>
                          {channelObj.name}
                        </ChannelName>
                        <SubscribersCount isDarkTheme={isDarkTheme}>
                          {channelObj.subscriberCount} subscribers
                        </SubscribersCount>
                        <ChannelDescription
                          className="lg-channel-description"
                          isDarkTheme={isDarkTheme}
                        >
                          {videoDetails.description}
                        </ChannelDescription>
                      </div>
                    </div>
                    <ChannelDescription
                      className="sm-channel-description"
                      isDarkTheme={isDarkTheme}
                    >
                      {videoDetails.description}
                    </ChannelDescription>
                  </div>
                </div>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
