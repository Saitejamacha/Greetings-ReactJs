import {Component} from 'react'
import {AppContainer, Heading, BtnContainer, Img} from './styledComponents'
import DisplayElements from '../DisplayElements'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Home extends Component {
  state = {
    activeBtn: languageGreetingsList[0].id,
    greentingImg: languageGreetingsList[0].imageUrl,
    altText: languageGreetingsList[0].imageAltText,
  }

  onClickRespectiveBtn = (id, imageUrl, imageAltText) => {
    this.setState({
      greentingImg: imageUrl,
      activeBtn: id,
      altText: imageAltText,
    })
  }

  render() {
    const {activeBtn, greentingImg, altText} = this.state

    // console.log(activeBtn)

    return (
      <AppContainer>
        <Heading>Multilingual Greetings</Heading>
        <BtnContainer>
          {languageGreetingsList.map(eachItem => (
            <DisplayElements
              onClickRespectiveBtn={this.onClickRespectiveBtn}
              key={eachItem.id}
              displayElements={eachItem}
              isActive={eachItem.id === activeBtn}
            />
          ))}
        </BtnContainer>
        <Img alt={altText} src={greentingImg} />
      </AppContainer>
    )
  }
}

export default Home
