import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdLogout} from 'react-icons/md'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
`

export const SmHamburgBtn = styled(GiHamburgerMenu)`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const SmLogoutBtn = styled(MdLogout)`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
