import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './reactPopup.css'

const ReactPopup = ({triggerBtn, history}) => {
  const handleConfirmLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="popup-container">
      <Popup modal trigger={triggerBtn}>
        {close => (
          <div className="popup-card">
            <div>
              <p className="popup-text">Are you sure you want to logout?</p>
            </div>
            <div className="popup-btn-container">
              <button
                type="button"
                className="cancel-button popup-btn"
                onClick={() => close()}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmLogout}
                type="button"
                className="confirm-button popup-btn"
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default withRouter(ReactPopup)
