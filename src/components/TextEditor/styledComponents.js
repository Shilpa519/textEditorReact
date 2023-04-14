import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background-color: #25262c;
  min-height: 100vh;
  max-height: 100%;
  font-family: 'Roboto';
`

export const TextEditorContainer = styled.div`
  display: flex;
  background-color: #1b1c22;
  margin: 55px;
  width: 90%;
`

export const ImageContainer = styled.div`
  width: 45%;
`

export const Heading = styled.h1`
  font-weight: 600;
  color: #f8fafc;
  font-size: 35px;
  text-align: center;
`
export const Image = styled.img`
  height: 250px;
  width: 250px;
  align-items: center;
`

export const TextContainer = styled.div`
  width: 45%;
  align-items: flex-start;
  border: 2px solid #334155;
  border-radius: 5px;
  background-color: #25262c;
  margin: 25px;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  padding: 10px;
  list-style-type: none;
`

export const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  margin-right: 25px;
  align-items: center;
  color: ${props => (props.bold ? ' #faff00' : '#f1f5f9')};
  cursor: pointer;
`

export const InputContainer = styled.textarea`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  background-color: transparent;
  color: #cbd5e1;
  font-size: 15px;
  border-color: transparent;
`
