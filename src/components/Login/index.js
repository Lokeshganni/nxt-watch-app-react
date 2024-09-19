import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {Form, Image, Label, Input, ErrorMessage} from './styledComponents'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showPw: false, errMsg: ''}

  submitFormSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  submitFormFailure = errMsg => {
    this.setState({errMsg})
  }

  handleFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POSt',
      body: JSON.stringify({
        username,
        password,
      }),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.submitFormSuccess(data.jwt_token)
    } else {
      this.submitFormFailure(data.error_msg)
    }
  }

  handleUserName = event => {
    this.setState({username: event.target.value})
  }

  handlePassword = event => {
    this.setState({password: event.target.value})
  }

  handleShowPW = () => {
    this.setState(prevState => ({showPw: !prevState.showPw}))
  }

  render() {
    const {username, password, showPw, errMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div className="login-main-container">
              <div className="container">
                <div className="logo-container">
                  {isDarkTheme ? (
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  )}
                </div>
                <Form onSubmit={this.handleFormSubmit}>
                  <Label htmlFor="userName">USERNAME</Label>
                  <Input
                    value={username}
                    onChange={this.handleUserName}
                    id="userName"
                    type="text"
                    placeholder="Username"
                  />
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    onChange={this.handlePassword}
                    value={password}
                    id="password"
                    type={showPw ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <div className="show-pw-container">
                    <input
                      onChange={this.handleShowPW}
                      id="showPassword"
                      type="checkbox"
                    />
                    <label htmlFor="showPassword">Show Password</label>
                  </div>
                  <div className="login-btn-container">
                    <button className="login-btn" type="submit">
                      Login
                    </button>
                  </div>
                  {errMsg !== '' && <ErrorMessage>*{errMsg}</ErrorMessage>}
                </Form>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
