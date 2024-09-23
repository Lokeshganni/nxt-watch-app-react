import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
`

export const TrendingTitleContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f4f4f4 ')};
  margin: 0;
`

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: ${props => props.isDarkTheme && '#ffffff'};
`

export const TrendingIconWrapper = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#d7dfe9 ')};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
`
