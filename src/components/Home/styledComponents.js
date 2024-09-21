import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
`

export const InputContainer = styled.input`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff ')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000 ')};
`

export const SearchButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9 ')};
`
