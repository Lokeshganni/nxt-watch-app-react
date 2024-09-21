import styled from 'styled-components'

export const SidebarMainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff ')};
`
export const ContactUsHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-size: 20px;
`

export const ContactUsPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-size: 16px;
`

export const IconWrapper = styled.div`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-size: 16px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SidebarTabPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`
