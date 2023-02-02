import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: yellowgreen;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 35px;
`

export const BtnContainer = styled.ul`
  flex-direction: row;
  width: 50vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
`

export const Button = styled.button`
  width: 90px;
  height: 35px;
  border-radius: 15px;
  color: red;
  background-color: white;
`

export const Img = styled.img`
  width: 30vw;
  height: 40vh;
`
