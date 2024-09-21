import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import {
  SidebarMainContainer,
  ContactUsHeading,
  ContactUsPara,
  IconWrapper,
  SidebarTabPara,
} from './styledComponents'
import './index.css'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SidebarMainContainer
          isDarkTheme={isDarkTheme}
          className="sidebar-main-container"
        >
          <div className="sidebar-navigators-main-container">
            <button className="sidebar-tab-btn" type="button">
              <IconWrapper isDarkTheme={isDarkTheme}>
                <AiFillHome />
              </IconWrapper>
              <SidebarTabPara
                isDarkTheme={isDarkTheme}
                className="sidebar-tab-para"
              >
                Home
              </SidebarTabPara>
            </button>
            <button className="sidebar-tab-btn" type="button">
              <IconWrapper isDarkTheme={isDarkTheme}>
                <HiFire />
              </IconWrapper>
              <SidebarTabPara
                isDarkTheme={isDarkTheme}
                className="sidebar-tab-para"
              >
                Trending
              </SidebarTabPara>
            </button>
            <button className="sidebar-tab-btn" type="button">
              <IconWrapper isDarkTheme={isDarkTheme}>
                <SiYoutubegaming />
              </IconWrapper>
              <SidebarTabPara
                isDarkTheme={isDarkTheme}
                className="sidebar-tab-para"
              >
                Gaming
              </SidebarTabPara>
            </button>
            <button className="sidebar-tab-btn" type="button">
              <IconWrapper isDarkTheme={isDarkTheme}>
                <MdPlaylistAdd />
              </IconWrapper>
              <SidebarTabPara
                isDarkTheme={isDarkTheme}
                className="sidebar-tab-para"
              >
                Saved videos
              </SidebarTabPara>
            </button>
          </div>
          <div className="sidebar-contact-details-main-container">
            <ContactUsHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactUsHeading>
            <div className="contact-app-icons-container">
              <img
                className="contact-app-icon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <img
                className="contact-app-icon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <img
                className="contact-app-icon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <ContactUsPara isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsPara>
          </div>
        </SidebarMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
