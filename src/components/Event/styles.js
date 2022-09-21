import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: auto;
  padding: 0px 0px;

  @media (min-width: 440px) {
    padding: 70px 0px;
  }

  @media (min-width: 960px) {
    padding: 150px 0px;
  }
`

export const ContentWrapper = styled.div`
  width: 500px;
  max-width: 100%;
  display: flex;
  margin: 0px auto;
  flex-direction: column-reverse;
  justify-content: start;
  
  @media (min-width: 960px) {
    justify-content: space-between;
    flex-direction: row;
    width: 1100px;
  }
`
export const TitleWrapper = styled.div`
  margin-bottom: 30px;
`

export const LeftWrapper = styled.div`
  width: 100%;
  padding: 0px 20px;

  @media (min-width: 440px) {
    padding: 0px 0px;
  }

  @media (min-width: 960px) {
    width: 40%;
  }
`
export const RightWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 960px) {
    width: 40%;
    margin-bottom: 0px;
  }
  img{
    max-width: 100%;
  }
`

export const Title = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`

export const EventHost = styled.div`
  font-size: 20px;
`

export const ItemWrapper = styled.div`
  padding: 5px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 10px;

  > svg{
    font-size: 23px;
  }
`
export const FirstLine = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #240D57;
`
export const SecontLine = styled.div`
  font-weight: 200;
  font-size: 18px;
  color: #4F4F4F; 
`
export const ArrowIconWrapp = styled.div`
  > svg{
    font-size: 23px;
  }
`

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
`

