import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Button } from '../Shared/Button'
import { useHistory } from 'react-router-dom'

import {
  Container,
  ContentWrapper,
  LeftContainer,
  RightContainer,
  HomeTitle,
  BlackTitle,
  LightTitle,
  HomeDescription
} from './styles'

export const Home = () => {
  const { width } = useWindowSize()
  const history = useHistory();

  return (
    <Container>
      <ContentWrapper>
        {width <= 960
          &&
          <Button width="320px" onClick={() => history.push("/create")}>🎉 Create my event</Button>
        }
        <LeftContainer bgimage="/images/home-image.png" />
        <RightContainer>
          <HomeTitle>
            <BlackTitle>Imagine if</BlackTitle>
            <LightTitle>Snapchat</LightTitle>
            <BlackTitle>had events.</BlackTitle>
          </HomeTitle>
          <HomeDescription>Easily host and share events with your friends<br />across any social media.</HomeDescription>
          {width > 960
            &&
            <Button width="320px" onClick={() => history.push("/create")}>🎉 Create my event</Button>
          }
        </RightContainer>
      </ContentWrapper>
    </Container>
  )
}
