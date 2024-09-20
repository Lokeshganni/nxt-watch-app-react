import styled from 'styled-components'

export const Header = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const Para = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`
