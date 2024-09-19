import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 40%;
`

export const Label = styled.label`
  color: #475569;
  margin-bottom: 7px;
  font-weight: 600;
  font-size: 14px;
`

export const Input = styled.input`
  border: 1px solid #e2e8f0;
  outline: none;
  padding: 0 10px;
  height: 42px;
  border-radius: 3px;
  margin-bottom: 20px;
  font-size: 16px;
`

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`
