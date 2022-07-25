import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <Background>
      <TetrisContainer></TetrisContainer>
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const TetrisContainer = styled.div`
  width: 968px;
  height: 1200px;
  background-color: lightgray;
`

export default Home
