import './index.css'

const VideoDetails = props => {
  const {match} = props
  const {id} = match.params
  return (
    <div>
      <h1>Video Details</h1>
      <p>id : {id}</p>
    </div>
  )
}

export default VideoDetails
