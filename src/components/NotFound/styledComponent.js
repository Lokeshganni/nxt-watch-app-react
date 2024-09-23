import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
`

export const Heading = styled.h1`
  font-size: 28px;
  color: ${props => props.isDarkTheme && '#ffffff'};
`

export const Para = styled.p`
  font-size: 18px;
  margin: 0;
  color: '#475569';
`
