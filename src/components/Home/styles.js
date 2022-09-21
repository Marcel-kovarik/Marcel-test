import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  max-width: 90%;
  margin: 0px auto;
  flex-direction: column-reverse;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`

export const LeftContainer = styled.div`
  ${({ bgimage }) => bgimage && css`
    background-image: url(${bgimage});
  `}
  background-size: cover;
  background-position: center center;
  width: 165.63px;
  height: 292px;
  filter: drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05));
  border-radius: 13.2326px;

  @media (min-width: 400px) {
    width: 311px;
    height: 548.27px;
    filter: drop-shadow(0px 0px 33.1283px rgba(0, 0, 0, 0.05));
    border-radius: 24.8462px;
  }
  
  @media (min-width: 960px) {
    height: 775.69px;
    width: 440px;
    filter: drop-shadow(0px 0px 46.8696px rgba(0, 0, 0, 0.05));
    border-radius: 35.1522px;
  }
`

export const RightContainer = styled.div`
  text-align: center;

  @media (min-width: 960px) {
    text-align: right;
  }
`

export const HomeTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  text-shadow: 1px 4px 4px #00000040;
  
  @media (min-width: 650px) {
    font-size: 64px;
  }
`

export const BlackTitle = styled.span`
  display: block;
  color: #240D57;
`

export const LightTitle = styled.span`
  display: block;
  background: linear-gradient(90deg, #8456EC 24.2%, #F87BD9 120.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`

export const HomeDescription = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #4F4F4F;
  text-shadow: 1px 4px 4px #00000040;
  margin-bottom: 0px;

  @media (min-width: 650px) {
    font-size: 24px;
  }

  @media (min-width: 960px) {
    margin-bottom: 40px;
  }
`