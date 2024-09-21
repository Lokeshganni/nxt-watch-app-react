import {formatDistanceToNow} from 'date-fns'
import {VideoTitle} from './styledComponent'
import './index.css'

const VideoCard = ({videoObj, isDarkTheme}) => {
  const {thumbnailUrl, title, viewCount, channel, publishedAt, id} = videoObj
  const formattedChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name, profileImageUrl} = formattedChannel
  const dateDistance = formatDistanceToNow(new Date(publishedAt))
  const date = dateDistance.split(' ').slice(1, 3).join(' ')

  return (
    <li className="video-li-card-container">
      <img className="thumbnail-img" src={thumbnailUrl} alt={id} />
      <div className="video-description-container">
        <img className="profile-img" src={profileImageUrl} alt={name} />
        <div>
          <VideoTitle isDarkTheme={isDarkTheme} className="video-title">
            {title}
          </VideoTitle>
          <p className="channel-name">{name}</p>
          <p className="views-and-date-para">
            {viewCount} views {date} ago
          </p>
        </div>
      </div>
    </li>
  )
}
export default VideoCard
