import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const VideoItemMainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const Title = styled.h1`
  font-size: 18px;
  color: ${props => props.isDarkTheme && '#ffffff'};
`

export const ChannelName = styled.p`
  font-size: 20px;
  color: ${props => props.isDarkTheme && '#ffffff'};
  margin: 0 0 5px 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const SubscribersCount = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#1e293b')};
  font-weight: 500;
`

export const ChannelDescription = styled.p`
  font-size: 18px;
  color: ${props => props.isDarkTheme && '#ffffff'};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 500;
`

export const AllInteractionsContainer = styled.div`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const InteractionButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#1e293b')};
  cursor: pointer;
`
