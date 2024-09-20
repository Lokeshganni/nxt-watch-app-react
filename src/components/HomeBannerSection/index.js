import {RxCross2} from 'react-icons/rx'
import './index.css'

const HomeBannerSection = () => (
  <div className="home-banner-container">
    <img
      className="nav-logo-img"
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="nxt watch logo"
    />
    <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
    <button className="get-it-now-btn" type="button">
      GET IT NOW
    </button>
    <button className="cancel-btn" type="button">
      <RxCross2 />
    </button>
  </div>
)

export default HomeBannerSection
