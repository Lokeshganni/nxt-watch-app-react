import {formatDistanceToNow} from 'date-fns'
import {Title, ChannelName, ViewsCount} from './styledComponent'
import './trendingVideoItem.css'

const TrendingVideoItem = ({video, isDarkTheme}) => {
  const {channel, publishedAt, thumbnailUrl, title, viewCount} = video
  const dateDistance = formatDistanceToNow(new Date(publishedAt))
  const date = dateDistance.split(' ').slice(1, 3).join(' ')

  return (
    <li className="trending-video-item-li-container">
      <div className="trending-video-item-thumbnail-container">
        <img className="trending-thumbnail-img" src={thumbnailUrl} alt="img" />
      </div>
      <div className="video-details-container">
        <div className="channel-logo-container">
          <img
            className="profile-img"
            src={channel.profile_image_url}
            alt="img"
          />
        </div>
        <div className="">
          <Title
            style={{color: `${isDarkTheme ? '#ffffff' : '#000000'}`}}
            className="video-title"
          >
            {title}
          </Title>
          <div className="channel-name-and-views-container">
            <ChannelName className="channel-name">{channel.name}</ChannelName>
            <ViewsCount>
              {viewCount} views - {date} ago
            </ViewsCount>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TrendingVideoItem
