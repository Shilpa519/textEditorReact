import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  TextEditorContainer,
  ImageContainer,
  Heading,
  Image,
  ButtonsContainer,
  TextContainer,
  Button,
  InputContainer,
} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {
    boldActive: false,
    italicActive: false,
    underlineActive: false,
    input: '',
  }

  onBoldClick = () => {
    this.setState(prevState => ({boldActive: !prevState.boldActive}))
  }

  onItalicClick = () => {
    this.setState(prevState => ({italicActive: !prevState.italicActive}))
  }

  onUnderlineClick = () => {
    this.setState(prevState => ({underlineActive: !prevState.underlineActive}))
  }

  onInputChange = e => {
    this.setState({input: e.target.value})
  }

  render() {
    const {boldActive, italicActive, underlineActive, input} = this.state

    return (
      <>
        <MainContainer>
          <TextEditorContainer>
            <ImageContainer>
              <Heading>Text Editor</Heading>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </ImageContainer>
            <TextContainer>
              <ButtonsContainer>
                <li>
                  <Button
                    type="button"
                    data-testid="bold"
                    onClick={this.onBoldClick}
                    bold={boldActive}
                  >
                    <VscBold size={23} />
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    data-testid="italic"
                    onClick={this.onItalicClick}
                    bold={italicActive}
                  >
                    <GoItalic size={23} />
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    data-testid="underline"
                    onClick={this.onUnderlineClick}
                    bold={underlineActive}
                  >
                    <AiOutlineUnderline size={23} />
                  </Button>
                </li>
              </ButtonsContainer>
              <hr style={{borderColor: '#334155'}} />

              <InputContainer
                bold={boldActive}
                italic={italicActive}
                underline={underlineActive}
                type="textarea"
                value={input}
                onChange={this.onInputChange}
              />
            </TextContainer>
          </TextEditorContainer>
        </MainContainer>
      </>
    )
  }
}
export default TextEditor
